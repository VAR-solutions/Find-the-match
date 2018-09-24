var score = 0;
var count = 0;
var flag = 0;
var colors = [];
var tiles = document.querySelectorAll(".thumbnail");
var scoreDisplay = document.querySelector("#score");
var finScore = document.querySelector("#final");

tiles.forEach(function (i) {
	i.style.background = "black";
});

driver();

function driver() {
	colors = generateRandColors(8);
	score = 0;
	scoreDisplay.textContent = "000";
	count1 = 0;
	for (var i = 0; i < tiles.length; i++) {
		tiles[i].addEventListener("click", function () {
			var clickedcolor = this.style.background;
			if (this.style.border === "") {
				this.style.border = "2px solid black";
			}
			if (clickedcolor === "black") {
				count += 1;
				this.style.background = col();
				if (count == 2) {
					var i = ind();
					var j = ind();
					setTimeout(function () {
						if (tiles[i].style.background === tiles[j].style.background) {
							tiles[i].style.background = "rgba(255, 255, 255, 0)";
							tiles[j].style.background = "rgba(255, 255, 255, 0)";
							tiles[i].style.border = "1px solid rgba(255, 255, 255, 0)";
							tiles[j].style.border = "1px solid rgba(255, 255, 255, 0)";
							tiles[i].blur = "";
							tiles[i].style.zIndex = "";
							tiles[j].blur = "";
							tiles[j].style.zIndex = "";
							score = score + 25;
							count1++;
						}
						else {
							tiles[i].style.background = "black";
							tiles[j].style.background = "black";
							tiles[i].blur = "";
							tiles[i].style.zIndex = "";
							tiles[j].blur = "";
							tiles[j].style.zIndex = "";
							tiles[i].style.border = ""
							tiles[j].style.border = "";
							score = score - 5;
						}
						scoreDisplay.textContent = score;
						if(count1===8){
							// console.log("win");
							finScore.textContent = score;
							// console.log(score);
							$("#congrat").modal();
						}
					}, 250);
					count = 0;
				}
			}
		});
	}

}

function ind() {
	for (i = 0; i < 16; i++) {
		if (tiles[i].style.border === "2px solid black" & tiles[i].blur != "2") {
			tiles[i].blur = "2";
			return i;
		}
	}
}

function col() {
	for (var i = 0; i < 16; i++) {
		if (tiles[i].style.border === "2px solid black" && tiles[i].style.zIndex != "1") {
			tiles[i].style.zIndex = "1";
			return colors[i];
		}
	}
	return "black";
}

function win() {
	flag = 0;
	for (i = 0; i < 16; i++) {
		if (tiles[i].style.background != "rgba(255, 255, 255, 0)") {
			flag = 1;
		}
	}
	return flag;
}

// make array of random colors
function generateRandColors(num) {
	//make an array
	var arr = [];
	//repeat num times
	for (var i = 0; i < num; i++) {
		//get random numbers and push it in array
		arr.push(randomColor());
	}
	var uniques = chance.unique(chance.natural, 8, { min: 0, max: 7 });
	for (i = 0; i < 8; i++) {
		arr.push(arr[uniques[i]]);
	}
	//return that array
	var as = [];
	var uniques = chance.unique(chance.natural, 16, { min: 0, max: 15 });
	for (var i = 0; i < 16; i++) {
		as.push(arr[uniques[i]]);

	}
	return as;
}

//function to generate random color
function randomColor() {
	//pick r, g, b from 0 - 255
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}
function init(){
	score = 0;
	count = 0;
	count1 = 0;
	for(i=0;i<16;i++){
		tiles[i].style.background = "black";
		tiles[i].style.cssText = "background: black;";
		// tiles[i].style.backgroundColor = "black";
		tiles[i].style.border="";

	}
	driver();
}
