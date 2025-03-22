document.addEventListener("DOMContentLoaded", () => {
    const envelope = document.getElementById("envelope");
    const lid = document.getElementById("lid");
    const card = document.getElementById("card");
    let isOpen = false;

    envelope.addEventListener("click", () => {
        if (!isOpen) {
            lid.style.transform = "rotateX(180deg)";
            card.style.bottom = "30px";
            card.style.transform = "scale(1)";
            isOpen = true;
        } else {
            card.style.bottom = "-280px";
            card.style.transform = "scale(0.9)";
            lid.style.transform = "rotateX(0deg)";
            isOpen = false;
        }
    });
});