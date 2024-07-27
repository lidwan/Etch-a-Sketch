const rows = document.querySelector(".rows");

let num = 16;

function drawGrid(color) {
    if(!color)
        color = "red";
    for (let i = 0; i < num; i++) {
        const row = document.createElement("div");
        row.classList.add("squareDiv");
        row.classList.add("row");
        row.addEventListener("mouseover", (e) => {
            const div = e.target;
            div.style.backgroundColor = `${color}`;
        });

        rows.appendChild(row);
        for(let i = 0; i < num; i++){
            const column = document.createElement("div");
            column.classList.add("squareDiv");
            column.classList.add("col");
            column.addEventListener("mouseover" , (e) => {
                const div = e.target;
                div.style.backgroundColor = `${color}`;
            });
            row.appendChild(column);
        }
    }
}
drawGrid();
const sizeButton = document.querySelector("#sizeButton");

sizeButton.addEventListener("click", () => {
    let input = undefined;
    while(!input || input > 100)
        input = window.prompt("Choose grid size: ");
    num = input;
    clearGrid();
    drawGrid();
});

function clearGrid() {
    while (rows.firstChild) 
        rows.removeChild(rows.lastChild);
}

const colorPicker = document.getElementById("color-picker");
colorPicker.addEventListener("input", function() {
    clearGrid();
    drawGrid(this.value);
    
  });