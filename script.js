var div = document.querySelector("div");

for (let c = 0; c < 16; c++) {
    var col_clone = div.cloneNode();
    col_clone.style.flexDirection = "column";
	for (let r = 0; r < 16; r++) {
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
