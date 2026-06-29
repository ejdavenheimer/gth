/* =====================================================================
   GTH — Widget de cuestionario interactivo
   GTH.quiz(container, questions) donde cada pregunta es:
     {n, topic, type:'vf'|'mc'|'multi', q, options:[{t, ok}], explain?}
     {n, topic, type:'open', q, answer}
     {n, topic, type:'match', q, pairs:[{l, r}]}
   ===================================================================== */
(function () {
  "use strict";
  const GTH = window.GTH;

  GTH.quiz = function (container, questions) {
    const topics = [];
    questions.forEach((q) => { if (topics.indexOf(q.topic) === -1) topics.push(q.topic); });

    const state = { filter: "Todos", answered: 0, correct: 0, total: questions.length };

    const toolbar = document.createElement("div");
    toolbar.className = "quiz-toolbar";
    const filter = document.createElement("div");
    filter.className = "quiz-filter";
    ["Todos"].concat(topics).forEach((t) => {
      const b = document.createElement("button");
      b.className = "chip-btn" + (t === "Todos" ? " active" : "");
      b.textContent = t;
      b.addEventListener("click", () => {
        state.filter = t;
        filter.querySelectorAll(".chip-btn").forEach((x) => x.classList.toggle("active", x === b));
        renderList();
      });
      filter.appendChild(b);
    });
    const score = document.createElement("div");
    score.className = "quiz-score";
    toolbar.appendChild(filter);
    toolbar.appendChild(score);
    container.appendChild(toolbar);

    const list = document.createElement("div");
    container.appendChild(list);

    function updateScore() {
      score.innerHTML = "Aciertos: <b>" + state.correct + "</b> / " + state.answered +
        " respondidas · " + state.total + " preguntas";
    }

    // Cartel de resultado correcto/incorrecto (el aviso se adapta al tipo)
    function feedback(ok, kind) {
      const hint = kind === "fill" ? "mirá la respuesta correcta abajo"
        : kind === "match" ? "mirá las relaciones correctas abajo"
        : "fijate la opción marcada en verde";
      const d = document.createElement("div");
      d.className = "q-result " + (ok ? "ok" : "bad");
      d.innerHTML = ok ? "✅ ¡Correcto!" : "❌ Incorrecto — " + hint + ".";
      return d;
    }

    function renderList() {
      list.innerHTML = "";
      questions
        .filter((q) => state.filter === "Todos" || q.topic === state.filter)
        .forEach((q) => list.appendChild(card(q)));
    }

    function card(q) {
      const c = document.createElement("div");
      c.className = "q-card";
      const head = document.createElement("div");
      head.className = "q-head";
      head.innerHTML =
        '<div class="q-num">' + q.n + '</div>' +
        '<div><p class="q-text">' + q.q + '</p><div class="q-topic">' + q.topic + '</div></div>';
      c.appendChild(head);

      if (q.type === "open") {
        const btn = mkBtn("Ver respuesta", "ghost sm");
        const rev = document.createElement("div");
        rev.className = "q-reveal"; rev.style.display = "none";
        rev.innerHTML = '<div class="ans"><b>Respuesta:</b> ' + q.answer + '</div>';
        btn.addEventListener("click", () => { rev.style.display = "block"; btn.style.display = "none"; });
        c.appendChild(btn); c.appendChild(rev);
        return c;
      }

      if (q.type === "match") {
        // Opciones de la derecha, mezcladas
        const shuffled = q.pairs.map((p, i) => ({ r: p.r, i })).sort(() => Math.random() - 0.5);
        const rows = [];
        const wrap = document.createElement("div");
        wrap.className = "q-matchx";
        q.pairs.forEach((p, i) => {
          const row = document.createElement("div");
          row.className = "q-mrow";
          const left = document.createElement("div");
          left.className = "q-mleft";
          left.innerHTML = p.l;
          const sel = document.createElement("select");
          sel.className = "q-msel";
          const ph = document.createElement("option");
          ph.value = ""; ph.textContent = "Elegí la definición…";
          sel.appendChild(ph);
          shuffled.forEach((opt) => {
            const o = document.createElement("option");
            o.value = String(opt.i);
            o.textContent = opt.r;
            sel.appendChild(o);
          });
          row.appendChild(left); row.appendChild(sel);
          wrap.appendChild(row);
          rows.push({ sel, correct: i });
        });
        c.appendChild(wrap);
        const btn = mkBtn("Comprobar", "sm");
        let resolved = false;
        btn.addEventListener("click", () => {
          if (resolved) return;
          resolved = true;
          let allRight = true;
          rows.forEach(({ sel, correct }) => {
            sel.disabled = true;
            const ok = String(sel.value) === String(correct);
            sel.classList.add(ok ? "correct" : "wrong");
            if (!ok) allRight = false;
          });
          state.answered++;
          if (allRight) state.correct++;
          updateScore();
          c.appendChild(feedback(allRight, "match"));
          const ul = document.createElement("ul");
          ul.className = "q-match";
          q.pairs.forEach((p) => {
            const li = document.createElement("li");
            li.innerHTML = "<b>" + p.l + "</b> → " + p.r;
            ul.appendChild(li);
          });
          c.appendChild(ul);
        });
        c.appendChild(btn);
        return c;
      }

      if (q.type === "fill") {
        const norm = (s) => String(s).toLowerCase().trim().replace(/\s+/g, " ")
          .normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        // Soporta un hueco (q.answer) o varios (q.blanks: [{t, answer, accept}])
        const blanks = q.blanks || [{ answer: q.answer, accept: q.accept }];
        const inputs = [];
        blanks.forEach((bl) => {
          const row = document.createElement("div");
          row.className = "q-fill";
          if (bl.t) {
            const lab = document.createElement("span");
            lab.className = "q-fill-label";
            lab.innerHTML = bl.t;
            row.appendChild(lab);
          }
          const input = document.createElement("input");
          input.type = "text";
          input.placeholder = "Escribí la respuesta…";
          row.appendChild(input);
          c.appendChild(row);
          inputs.push({ input, bl });
        });
        const btn = mkBtn("Comprobar", "sm");
        let resolved = false;
        const go = () => {
          if (resolved) return;
          resolved = true;
          let allRight = true;
          const ans = [];
          inputs.forEach(({ input, bl }) => {
            input.disabled = true;
            const accept = (bl.accept || [bl.answer]).map(norm);
            const ok = accept.indexOf(norm(input.value)) !== -1;
            input.classList.add(ok ? "correct" : "wrong");
            if (!ok) allRight = false;
            ans.push((bl.t ? bl.t + " " : "") + "<b>" + bl.answer + "</b>");
          });
          state.answered++;
          if (allRight) state.correct++;
          updateScore();
          c.appendChild(feedback(allRight, "fill"));
          const rev = document.createElement("div");
          rev.className = "q-reveal";
          rev.innerHTML = '<div class="ans"><b>Respuesta:</b> ' + ans.join(" · ") + "</div>" +
            (q.explain ? '<div style="margin-top:.4rem">💡 ' + q.explain + "</div>" : "");
          c.appendChild(rev);
        };
        btn.addEventListener("click", go);
        inputs.forEach(({ input }) => input.addEventListener("keydown", (e) => { if (e.key === "Enter") go(); }));
        c.appendChild(btn);
        return c;
      }

      if (q.type === "vflist") {
        // Una pregunta con varios sub-ítems Verdadero/Falso (cuenta como una sola).
        const list = document.createElement("div");
        list.className = "q-vflist";
        let resolved = false;
        const picks = {};
        q.items.forEach((it, i) => {
          const row = document.createElement("div");
          row.className = "q-vfrow";
          const label = document.createElement("div");
          label.className = "q-vftext";
          label.innerHTML = (it.label ? "<b>" + it.label + ")</b> " : "") + it.t;
          const btns = document.createElement("div");
          btns.className = "q-vfbtns";
          [["Verdadero", "V"], ["Falso", "F"]].forEach(([txt, val]) => {
            const b = document.createElement("button");
            b.className = "q-opt q-vfbtn";
            b.textContent = txt;
            b.addEventListener("click", () => {
              if (resolved) return;
              picks[i] = val;
              btns.querySelectorAll(".q-vfbtn").forEach((x) => x.classList.toggle("sel", x === b));
            });
            btns.appendChild(b);
          });
          it._btns = btns;
          row.appendChild(label); row.appendChild(btns);
          list.appendChild(row);
        });
        c.appendChild(list);
        const check = mkBtn("Comprobar", "sm");
        check.addEventListener("click", () => {
          if (resolved) return;
          resolved = true;
          let allRight = true;
          q.items.forEach((it, i) => {
            const correct = it.ok === true || it.ok === "V" ? "V" : "F";
            const b = it._btns.querySelectorAll(".q-vfbtn");
            b.forEach((x) => x.classList.remove("sel")); // limpiar resaltado de selección
            const correctBtn = correct === "V" ? b[0] : b[1];
            correctBtn.classList.add("correct");
            if (picks[i] && picks[i] !== correct) {
              (picks[i] === "V" ? b[0] : b[1]).classList.add("wrong");
            }
            if (picks[i] !== correct) allRight = false;
            b.forEach((x) => (x.disabled = true));
          });
          state.answered++;
          if (allRight) state.correct++;
          updateScore();
          c.appendChild(feedback(allRight));
          if (q.explain) {
            const ex = document.createElement("div");
            ex.className = "q-reveal";
            ex.innerHTML = "💡 " + q.explain;
            c.appendChild(ex);
          }
        });
        c.appendChild(check);
        return c;
      }

      // vf / mc / multi
      const opts = document.createElement("div");
      opts.className = "q-opts";
      const isMulti = q.type === "multi";
      let resolved = false;
      const chosen = new Set();

      q.options.forEach((o, i) => {
        const b = document.createElement("button");
        b.className = "q-opt";
        b.innerHTML = '<span class="mk">' + (o.ok ? "✓" : "✗") + '</span><span>' + o.t + '</span>';
        b.addEventListener("click", () => {
          if (resolved) return;
          if (isMulti) {
            if (chosen.has(i)) { chosen.delete(i); b.style.borderColor = ""; b.style.background = ""; }
            else { chosen.add(i); b.style.borderColor = "var(--brand)"; b.style.background = "var(--brand-soft)"; }
          } else {
            resolve([i]);
          }
        });
        opts.appendChild(b);
      });
      c.appendChild(opts);

      if (isMulti) {
        const check = mkBtn("Comprobar selección", "sm");
        check.addEventListener("click", () => { if (!resolved) resolve(Array.from(chosen)); });
        c.appendChild(check);
      }

      function resolve(selected) {
        resolved = true;
        const buttons = Array.from(opts.children);
        let allRight = true;
        q.options.forEach((o, i) => {
          const picked = selected.indexOf(i) !== -1;
          buttons[i].style.borderColor = ""; buttons[i].style.background = "";
          if (o.ok) buttons[i].classList.add("correct");
          if (picked && !o.ok) { buttons[i].classList.add("wrong"); allRight = false; }
          if (!picked && o.ok) allRight = false;
        });
        buttons.forEach((b) => (b.disabled = true));
        state.answered++;
        if (allRight) state.correct++;
        updateScore();
        c.appendChild(feedback(allRight));
        if (q.explain) {
          const ex = document.createElement("div");
          ex.className = "q-reveal";
          ex.innerHTML = "💡 " + q.explain;
          c.appendChild(ex);
        }
      }

      return c;
    }

    function mkBtn(label, cls) {
      const b = document.createElement("button");
      b.className = "btn " + (cls || "") + " btn-reveal";
      b.textContent = label;
      return b;
    }

    updateScore();
    renderList();
  };
})();
