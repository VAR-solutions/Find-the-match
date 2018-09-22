var tiles = document.querySelectorAll(".thumbnail");
tiles.forEach(function (i) {
	i.style.background = "rgb(255,165,0)";
});
score = 0;
var colors = [];
driver();
function driver() {
	// check(0, 3);
	colors = generateRandColors(8);
	for (var i = 0; i < tiles.length; i++) {
		tiles[i].addEventListener("click", function () {
			console.log("you clicked the tile");
			var clickedcolor = this.style.background;
			this.style.border = "2px solid black";
			if (clickedcolor === "rgb(255, 165, 0)") {

				 this.style.background = col();

			}

		});
	}
}

function col(){
	for(var i=0;i<16;i++)
	{
		if(tiles[i].style.border === "2px solid black")
		{
			return colors[i];
		}
	}
	return "black";
}
function check(i, j) {
	if (tiles[i].style.background === tiles[j].style.background) {
		tiles[i].style.background = "rgba(255, 255, 255, 0)";
		tiles[j].style.background = "rgba(255, 255, 255, 0)";
		tiles[i].style.border = "1px solid rgba(255, 255, 255, 0)";
		tiles[j].style.border = "1px solid rgba(255, 255, 255, 0)";
		score = score+10;
	}
	else {
		tiles[i].style.background = "rgb(255,165,0)";
		tiles[j].style.background = "rgb(255,165,0)";
		score = score - 5
	}
}

function reset() {

}
function randomColor() {
	//pick r, g, b from 0 - 255
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

function generateRandColors(num) {
	//make an array
	var arr = [];
	//repeat num times
	for (var i = 0; i < num; i++) {
		//get random numbers and push it in array
		arr.push(randomColor());
	}
	var uniques = chance.unique(chance.natural, 8, {min: 0, max: 7});
	for(i=0;i<8;i++){
		arr.push(arr[uniques[i]]);
	}
	//return that array
	return arr;
}
