var col_count = 16;
var row_count = 16;
// var row_array = new Array(row_count);
// var square_array = new Array(square_count);

var div = document.querySelector("div");

for (let c = 0; c < col_count - 1; c++) {
    console.log("Col: " + c);
    var col_clone = div.cloneNode();
    div.appendChild(col_clone);
}

for (let r = 0; r < row_count; r++) {
    console.log("Row: " + r);
    var row_clone = div.cloneNode(true);
    row_clone.style.flexDirection = "column";
    document.body.appendChild(row_clone);
}
