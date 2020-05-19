// Select color input
// Select size input
// When size is submitted by the user, call makeGrid()

function makeGrid() {
// Your code goes here!
    //prevent default behavior
    event.preventDefault();
    //retrieve grid, store in variable
    const grid = document.getElementById("pixelCanvas");
    //wipe grid clear
    grid.innerHTML="";
    //Retrieve height, width and color from user input
    const height = document.getElementById("inputHeight").value;
    const width = document.getElementById("inputWidth").value;
    const color = document.getElementById("colorPicker");

    //Loop through and create rows/cols based on user input
    for (x = 0; x < height; x++) {
        //create row, store in variable
        const row = document.createElement("tr");
        //add row to grid
        grid.appendChild(row);
        for (y = 0; y < width; y++) {
          //create column, store in variable
            const col = document.createElement("td");
            //add event listener for click on a cell in the grid
            //When clicked, changed background of cell to selected color
            col.addEventListener("click", (e) => {
            col.style.backgroundColor = color.value;
          });
          //add column to grid
            row.appendChild(col);
        }
      }
}
