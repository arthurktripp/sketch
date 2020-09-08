var dimension = 16;
var totalSquares = dimension * dimension;
var i = 0;

const container = document.querySelector("#container");



function createPixels() {
    for ( i = 0; i < totalSquares; i++ ) {
        const pixel = document.createElement("div");
        pixel.classList.add("blank");
        pixel.setAttribute("id", i);
        pixel.addEventListener("mouseover", () => {
            pixel.classList.remove("blank");
            pixel.classList.add("dark");
        })

        container.appendChild(pixel);
    }
}

createPixels();
