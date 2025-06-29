function ready() {
    polyominoes = document.getElementById("polys-svg").children;
    for (let i = 0; i < polyominoes.length; i++) {
        polyominoes[i].style.visibility = "hidden";
      }
}

function getScrollPercent() {
    var h = document.documentElement, 
        b = document.body,
        st = 'scrollTop',
        sh = 'scrollHeight';
    return (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;
}

function updatePolys() {
    let percent = getScrollPercent();
    let viewpercent = Math.floor(percent / 100 * polyominoes.length);
    for (let i = 0; i < viewpercent; i++) {
        polyominoes[i].style.visibility = "visible";
    }
    for (let i = viewpercent; i < polyominoes.length; i++) {
        polyominoes[i].style.visibility = "hidden";
    }
}

document.addEventListener('scroll', function(){
    updatePolys()
});
document.addEventListener("DOMContentLoaded", ready);