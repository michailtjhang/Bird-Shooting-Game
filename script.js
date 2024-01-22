// banyak count nya

let counter = '';
var start, end, totalWaktu;


function showBird() {
	tampilkanGambar();
	counter = 1;
	start = "";
	end = "";
	totalWaktu = "";	
}

if (localStorage.getItem("topScore") !== null) {
	var topScore = localStorage.getItem("topScore");
	document.getElementById("topScore").innerHTML = topScore + " s";
}


// 1. Tampilkan gambar burung secara random


function tampilkanGambar () {
	var top = Math.random() * 400;
	var left = Math.random() * 400;

	start = new Date().getTime();

	document.getElementById("bird").src = "image/bird.png"
	document.getElementById("bird").style.height = 60 + "px";
	document.getElementById("bird").style.width = 60 + "px";

	document.getElementById("bird").style.top = top + "px";
	document.getElementById("bird").style.left = left + "px";

	document.getElementById("bird").style.position = "relative";
	document.getElementById("bird").style.display = "block";
}

// 2. kalau gambar burung di klik/di pencet, ganti gambar burung menjadi gambar bom

document.getElementById("bird").onclick = function () {
	document.getElementById("bird").src = "image/bom.png";
	document.getElementById("bird").style.height = 120 + "px";
	document.getElementById("bird").style.width = 120 + "px";

	setTimeout(sembunyikanGambar, 400); 
	
	// 3. Setelah 5 kali tembakan, hitung total waktunya

	if (counter < 5) {
		setTimeout(tampilkanGambar, 450);
		counter++;
	} else {
		swal("Bird Shooting Game!", "Selesai!!");
		end = new Date().getTime();
		totalWaktu = (end - start) / 1000;
		document.getElementById("totalWaktu").innerHTML = totalWaktu + " s";
		setTopScore();
	}
}

function sembunyikanGambar () {
	document.getElementById("bird").style.display = "none";
}

// 4. set topscore

function setTopScore() {
	if (localStorage.getItem ("topScore") == null) {
		localStorage.setItem("topScore", totalWaktu);
		document.getElementById("topScore").innerHTML = totalWaktu + " s";
	} else {
		if (totalWaktu < localStorage.getItem("topScore")) {
			localStorage.setItem("topScore", totalWaktu);
			document.getElementById("topScore").innerHTML = totalWaktu + " s";
		}
	}
}
