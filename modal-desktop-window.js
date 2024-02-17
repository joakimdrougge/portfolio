var modal = document.getElementById("modal");

var btn = document.getElementById("about-icon");

var closeButton = document.getElementById("x-button");

btn.onclick = function () {
    modal.style.display = "grid";
}

closeButton.onclick = function () {
    modal.style.display = "none";
}