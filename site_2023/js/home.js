// List of Images and Captions
let img_list = [
    {
        "src": "img/slideshow/all_us_buildings.jpg",
        "caption": "All Building Footprints in the United States"
    },
    {
        "src": "img/slideshow/milliso_raster.jpg",
        "caption": "Timber Mill Harvest Potential"
    },
    {
        "src": "img/slideshow/waffle_anim.gif",
        "caption": "Efficient Scalable Spatial Indexing"
    },
    {
        "src": "img/slideshow/crime_dashboard.jpg",
        "caption": "St. Louis Crime Dashboard"
    },
    {
        "src": "img/slideshow/data_exchange.jpg",
        "caption": "St. Louis Regional Data Exchange (RDX)"
    },
    {
        "src": "img/slideshow/live_dashboard.jpg",
        "caption": "LIVE Dashboard"
    },
    {
        "src": "img/slideshow/rda_forum.jpg",
        "caption": "RDA Member Directory and Forum"
    },
    {
        "src": "img/slideshow/vaccine_sites.jpg",
        "caption": "Missouri Vaccine Sites"
    },
    {
        "src": "img/slideshow/data_commons.jpg",
        "caption": "Data Commons"
    },
    {
        "src": "img/slideshow/rtm.jpg",
        "caption": "Risk Terrain Modeling"
    },
    {
        "src": "img/slideshow/community_coverage.jpg",
        "caption": "Vaccine Site Community Coverage"
    },
    {
        "src": "img/slideshow/lemma_model.jpg",
        "caption": "LEMMA COVID-19 Hospitalization Projections"
    },
    {
        "src": "img/slideshow/dasymetric_interpolation.jpg",
        "caption": "Dasymetric Areal Weighted Interpolation"
    },      
             
];

// Load only the first immediately, defer rest to window ready
function loadDefererredImages(){
    let imgContainer = document.getElementById("currentImageBox")
    let new_img_list = img_list.slice(1)
    for (let index = 0; index < new_img_list.length; index++) {
        let newImg = document.createElement("img")
        newImg.id = "slide-image-" + (index + 1) // Already init a -0
        newImg.src = new_img_list[index]["src"]
        newImg.alt = new_img_list[index]["caption"]
        newImg.style.opacity = 0;
        imgContainer.appendChild(newImg)
    }
}

let maxIndex = img_list.length - 1;

function changeSlide(n){
    let curImgBox = document.getElementById("currentImageBox");
    let slideIndex = parseInt(curImgBox.dataset.index);
    let curImg = document.getElementById("slide-image-" + slideIndex);
    let curCaption = document.getElementById("slideshow-caption")

    nextSlideIndex = slideIndex + n
    if (nextSlideIndex == -1){
        nextSlideIndex = maxIndex
    }
    if (nextSlideIndex > maxIndex) {
        nextSlideIndex = 0
    }
    
    let nextImg = document.getElementById("slide-image-" + nextSlideIndex)

    curImg.style.opacity = 0;
    nextImg.style.opacity = 1;
    curCaption.textContent = img_list[nextSlideIndex]["caption"]

    curImgBox.dataset.index = nextSlideIndex
}

var timeoutID;
var slideshowStatus = true

function autoSlideshow(init=false){
    if(!init){
        changeSlide(1)
    }
    timeoutID = setTimeout(autoSlideshow, 6000)
}

function toggleShow(){
    let statusEl = document.getElementById("showStatus")
    let statusIconPlay = document.getElementById("statusIconPlay")
    let statusIconPause = document.getElementById("statusIconPause")
    if(slideshowStatus){
        clearTimeout(timeoutID)
        slideshowStatus = false
        statusIconPause.style.opacity = 0
        statusIconPlay.style.opacity = 1
    }else{
        autoSlideshow(init=true)
        slideshowStatus = true
        statusIconPause.style.opacity = 1
        statusIconPlay.style.opacity = 0
    }
}

window.onload = function(){
    loadDefererredImages();
    autoSlideshow(init=true);
};