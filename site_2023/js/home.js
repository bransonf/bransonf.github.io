// Slideshow handler

let img_list = [
    {
        "src": "img/slideshow/all_us_buildings.jpg",
        "caption": "All Building Footprints in the United States"
    },
    {
        "src": "img/slideshow/milliso_raster.jpg",
        "caption": "Timber Mill Harvest Potential"
    }
];

let maxIndex = img_list.length - 1;

function changeSlide(n){
    let curImgBox = document.getElementById("currentImageBox");
    let curImg = document.getElementById("currentImage");
    let slideIndex = parseInt(curImgBox.dataset.index);

    slideIndex = slideIndex + n
    if (slideIndex == -1){
        slideIndex = maxIndex
    }
    if (slideIndex > maxIndex) {
        slideIndex = 0
    }

    let newImage = document.createElement("img");
    newImage.src = img_list[slideIndex]["src"]
    newImage.alt = img_list[slideIndex]["caption"]
    newImage.id = "currentImage"
    newImage.style.opacity = 0;

    curImg.style.opacity = 0;

    curImgBox.appendChild(newImage)

    curImg.remove();

    newImage.style.opacity = 1;
    // Set src and caption

    
    // Set current img oppacity to 0
    
    // Create image, append and set opacity to 1
    // curImg.appendChild("<img>")
    
    // curImg.src = img_list[slideIndex]["src"]
    curImgBox.dataset.index = slideIndex
}

function autoSlideshow(){
    changeSlide(1)
    setTimeout(autoSlideshow, 2000)
}

// autoSlideshow();