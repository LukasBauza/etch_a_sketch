var div = document.querySelector("div");
var button = document.querySelector("button");

button.addEventListener("click", () => {
	var grid_size = prompt("Enter the size of the grid");

	if (grid_size <= 100) {
		console.log("Grid Size: " + grid_size);
		removeGrid();
		drawGrid(grid_size);
	}
});

drawGrid(16);

function drawGrid(grid_size) {
	for (let c = 0; c < grid_size; c++) {
	    var col_clone = div.cloneNode();
	    col_clone.style.flexDirection = "column";
		for (let r = 0; r < grid_size; r++) {
			var row_clone = div.cloneNode();
			row_clone.classList.add("tile");
			col_clone.appendChild(row_clone);
		}
	    div.appendChild(col_clone);
	}

	var tiles = document.getElementsByClassName("tile");

	for (var i = 0; i < tiles.length; i++) {
		tiles[i].addEventListener("mouseover", function(e) {
			this.style.backgroundColor = "black";
		});
	}
}

function removeGrid() {
	while (div.firstChild) {
		div.removeChild(div.firstChild);
	}
}
