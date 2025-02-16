const button = document.createElement("button");
button.textContent = "select size";
button.addEventListener("click", () => {
    let gridNumber = prompt("how big should the etch a sketch be?");
    gridFunction(gridNumber);
});

const container = document.querySelector(".container");
document.body.insertBefore(button, container);
function gridFunction(gridNumber) {
    if (gridNumber > 0 && gridNumber <= 100 ) {
        container.innerHTML = "";
        for (let j = 0; j < gridNumber; j++) {
            const rows = document.createElement("div");
            rows.setAttribute("class", "row");

            for (let i = 0; i < gridNumber; i++) {
                const box = document.createElement("div");
                box.setAttribute ("class", "gridBox");
                box.addEventListener("mouseover", () => {
                    box.setAttribute("style", "background-color:red");
                } )
                rows.appendChild(box);
            }
            container.appendChild(rows);
        }
    }
    else {
        alert("pick a number from 1 to 100");
    }
    

}
   