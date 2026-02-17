const fases = document.querySelectorAll(".fase");

fases.forEach(fase => {
    fase.addEventListener("click", () => {
        const numero = fase.dataset.fase;
        window.location.href = `fase${numero}.html`;
    });
});

const sky = document.getElementById("sky");
const quantidade = 200; // densidade

for (let i = 0; i < quantidade; i++) {
    const star = document.createElement("div");
    star.classList.add("star-dot");

    star.style.top = Math.random() * 200 + "vh";
    star.style.left = Math.random() * 100 + "vw";
    star.style.opacity = Math.random();

    sky.appendChild(star);
}

