const container = document.querySelector("#container");

for (let i = 0; i < 256; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    container.appendChild(square);
}

container.addEventListener("mouseover", (event) => {
    let target = event.target;
    if (target != container)
        target.classList.add("hovered");
})