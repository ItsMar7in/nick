document.addEventListener("DOMContentLoaded", () => {
    const envelope = document.getElementById("envelope");
    const lid = document.getElementById("lid");
    const card = document.getElementById("card");
    let isOpen = false;

    envelope.addEventListener("click", () => {
        if (!isOpen) {
            // Abrir el sobre y mover la carta
            lid.style.transform = "rotateX(180deg)";
            setTimeout(() => {
                card.style.bottom = "30px"; // Ajustado para el sobre más grande
                card.style.transform = "scale(1)";
            }, 250);
            isOpen = true;
        } else {
            // Cerrar el sobre y bajar la carta
            card.style.bottom = "-280px"; // Ajustado para la carta más grande
            card.style.transform = "scale(0.9)";
            setTimeout(() => {
                lid.style.transform = "rotateX(0deg)";
            }, 300);
            isOpen = false;
        }
    });
});