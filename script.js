const container = document.querySelector("#container");
const btn = document.querySelector("#btn");

for (let i = 0; i < 256; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    container.appendChild(square);
}

container.addEventListener("mouseover", (event) => {
    let target = event.target;
    if (target != container)
        target.classList.add("hovered");
});

btn.addEventListener("click", () => {
    let size = prompt("Enter the size of the new grid:");
});