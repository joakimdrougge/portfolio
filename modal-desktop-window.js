/* About window */

var aboutModal = document.getElementById("about-modal");
var aboutBtn = document.getElementById("about-icon");


var xButton = document.getElementById("about-x-button");
var closeButton = document.getElementById("close-button");

aboutBtn.ondblclick = function () {
    aboutModal.style.display = "grid";
}

xButton.onclick = function () {
    aboutModal.style.display = "none";
}

closeButton.onclick = function () {
    aboutModal.style.display = "none";
}

/* Desktop window */

var windowModal = document.getElementById("window-modal");
var binBtn = document.getElementById("bin-icon");
var portfolioBtn = document.getElementById("portfolio-icon");

var xButton = document.getElementById("window-x-button");

var headerText = document.getElementById("window-header-text");

headerText.innerHTML = "FIX THIS";

binBtn.ondblclick = function () {
    windowModal.style.display = "grid";
}

portfolioBtn.ondblclick = function () {
    windowModal.style.display = "grid";
}

xButton.onclick = function () {
    windowModal.style.display = "none";
}

/* Resumé */

var resume = document.getElementById("resume-container");
var resumeBtn = document.getElementById("resume-icon");
var resumeImg = document.getElementById("resume-image");

resumeBtn.ondblclick = function () {
    resume.style.display = "block";
}

resumeImg.onclick = function () {
    resume.style.display = "none";
}


/* Poster */

var poster = document.getElementById("poster-container");
var posterBtn = document.getElementById("poster-icon");
var posterImg = document.getElementById("poster-image");

posterBtn.ondblclick = function () {
    poster.style.display = "block";
}

posterImg.onclick = function () {
    poster.style.display = "none";
}


/* Video */

var video = document.getElementById("video-container");
var videoBtn = document.getElementById("video-icon");
var videoImg = document.getElementById("dotd-video");

videoBtn.ondblclick = function () {
    video.style.display = "grid";
}

var xButton = document.getElementById("video-x-button");

xButton.onclick = function () {
    video.style.display = "none";
}


/* Show logo text */

function toggleText() {
    var logoText = document.getElementById("logo-text");
    if (logoText.style.display === "none") {
        logoText.style.display = "block";
    } else {
        logoText.style.display = "none";
    }
}