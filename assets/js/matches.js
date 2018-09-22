var tiles = document.querySelectorAll(".thumbnail");
tiles.forEach(function (i) {
	i.style.background = "black";
});
var score = 0;
var count = 0;
var flag = 0;
var colors = [];
driver();
function ind() {
	for(i=0;i<15;i++){
		if(tiles[i].style.border === "2px solid black" & tiles[i].style.zIndex != "2"){
			tiles[i].style.zIndex = "2";
			return i;
		}
	}
}
function driver() {
	// check(0, 3);
	colors = generateRandColors(8);
	for (var i = 0; i < tiles.length; i++) {
		tiles[i].addEventListener("click", function () {
			console.log("you clicked the tile");
			var clickedcolor = this.style.background;
			this.style.border = "2px solid black";
			if (clickedcolor === "black") {
				count += 1;
				this.style.background = col();
                if(count==2){
                    var i = ind();
                    var j = ind();
                    check(i,j);
                    count = 0;
                }
			}

		});
	}

}

function col(){
	for(var i=0;i<16;i++)
	{
		if(tiles[i].style.border === "2px solid black" && tiles[i].style.zIndex != "1")
		{
			tiles[i].style.zIndex = "1";
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
		tiles[i].style.background = "black";
		tiles[j].style.background = "black";
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
	var as = [];
	var uniques = chance.unique(chance.natural, 16, {min: 0, max: 15});
	for (var i = 0; i < 16; i++) {
   	as.push(arr[uniques[i]]);

	}
	return as;
}
