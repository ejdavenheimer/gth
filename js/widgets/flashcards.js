/* =====================================================================
   GTH — Flashcards (memorización)
   GTH.flashcards(container, cards) donde cards = [{front, back}]
   Tocar la tarjeta revela/oculta la respuesta.
   ===================================================================== */
(function () {
  "use strict";
  const GTH = window.GTH;

  GTH.flashcards = function (container, cards) {
    if (!container) return;
    const grid = document.createElement("div");
    grid.className = "flashcards";
    cards.forEach((c) => {
      const card = document.createElement("div");
      card.className = "flashcard";
      card.innerHTML =
        '<div class="fc-front">' + c.front + "</div>" +
        '<div class="fc-back">' + c.back + "</div>" +
        '<div class="fc-hint">tocá para revelar</div>';
      const hint = card.querySelector(".fc-hint");
      card.addEventListener("click", () => {
        const open = card.classList.toggle("open");
        hint.textContent = open ? "tocá para ocultar" : "tocá para revelar";
      });
      grid.appendChild(card);
    });
    container.appendChild(grid);
  };
})();
