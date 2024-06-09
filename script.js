const container = document.querySelector("#container");
const btn = document.querySelector("#btn");

generateGrid(16);

container.addEventListener("mouseover", (event) => {
    let target = event.target;
    if (target != container) {
        target.classList.add("hovered");
        if (parseFloat(target.style.opacity) < 1)
            target.style.opacity = parseFloat(target.style.opacity) + .1;
    }
});

btn.addEventListener("click", () => {
    let size;
    do {
        size = prompt("Enter the size of the new grid (1-100):");
    } while (size < 1 || size > 100);
    while (container.firstChild)
        container.removeChild(container.lastChild);
    generateGrid(size);
});

function generateGrid (size) {
    for (let i = 0; i < (size * size); i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.opacity = 0;
        let boxSize = 800 / size;
        square.style.width = boxSize + "px";
        square.style.height = boxSize + "px";
        container.appendChild(square);
    }
}