var modal = document.getElementById("modal");

var btn = document.getElementById("portfolio-icon");
var btn2 = document.getElementById("bin-icon");

var xButton = document.getElementById("x-button");
var closeButton = document.getElementById("close-button");

btn.onclick = function () {
    modal.style.display = "grid";
}

btn2.onclick = function () {
    modal.style.display = "grid";
}

xButton.onclick = function () {
    modal.style.display = "none";
}

closeButton.onclick = function () {
    modal.style.display = "none";
}