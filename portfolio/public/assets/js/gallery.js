/*
AUTHOR: Rikki Tomiko Ehrhart (rikki.ehrhart@g.austincc.edu)
LAST UPDATE: 01.20.2025

FILE: portfolio/public/assets/js/gallery.js
DESCRIPTION: This is the functions for the image gallery
             on the projects page for my portfolio at 
             rikkitomikoehrhart.com and is also on Github
*/
// Grab all necessary elements
var leftButton = document.getElementById('leftBtn');
var rightButton = document.getElementById('rightBtn');
var focusImg = document.getElementById('focusImg');
var thumbnailImgs = document.querySelectorAll('.thumbnailImg');



window.onload = (event) => {
    // Set up elements for start of gallery
    setUpCurrentImage()


    // On click event for left bottom
    leftButton.onclick = function() {
        switchImgButton("left");
    }

    // on click event for right button
    rightButton.onclick = function() {
        switchImgButton("right");
    }
    
    // on click event for thumbnails
    thumbnailImgs.forEach(thumbnail => {
        thumbnail.addEventListener("click", () => {
            switchImgThumb(thumbnail.src);
        })
    })
}


function setUpCurrentImage() {
    // Grab the current image's name
    var currentImg = (focusImg.src).slice(-15);

    // loop through the thumbnail images
    for (var i = 0; i < thumbnailImgs.length; i++) {
        // for each thumbnailImg, grab the image name
        var thumbImg = (thumbnailImgs[i].src).slice(-15);
        
        // Check if thumbImg matches currentImg
        if (currentImg == thumbImg) {
            // if they match set the thumbImg opacity
            thumbnailImgs[i].style.opacity = .95;
            thumbnailImgs[i].style.boxShadow = "0px 0px 10px #00000030"
        } else {
            thumbnailImgs[i].style.opacity = .5;
            thumbnailImgs[i].style.boxShadow = "none";
        }
    }

}

function switchImgButton(direction) {
    var dir = 0;

    // establish direction to loop through
    if (direction == "right") {
        dir = 1;
    } else if (direction == "left") {
        dir = -1;
    }

    // grab number of current image
    var currentImg = (focusImg.src).slice(-5);
    var currentImgNum = currentImg.slice(0, 1);
    var desiredImgNum = parseInt(currentImgNum) + dir

    // Check if the desiredImgNum exists in the thumbnails
    if (thumbnailImgs.length >= desiredImgNum && desiredImgNum >= 1) {
        changeImg(desiredImgNum);
    } else if (desiredImgNum == 0) {
        changeImg(thumbnailImgs.length)
    } else {
        changeImg(1);
    }
}

function switchImgThumb(img) {
    focusImg.src = img

    setUpCurrentImage()
}

function changeImg(newImgNum) {
    var imgBase = (focusImg.src).slice(0, -5);
    var newImg = imgBase + newImgNum + ".png";

    focusImg.src = newImg;

    setUpCurrentImage();
}