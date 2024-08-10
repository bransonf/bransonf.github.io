// Scroll listener to update ToC position
function updateTOC() {
    let st = getScrollTop();
    let navContent = document.getElementById("navContent");
    navContent.style.top = Math.max(st, 250) + "px"
}

// function getScrollPercent() {
//     var h = document.documentElement, 
//         b = document.body,
//         st = 'scrollTop',
//         sh = 'scrollHeight';
//     return (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;
// }

function getScrollTop() {
    var h = document.documentElement;
    return h['scrollTop']
}

document.addEventListener('scroll', function(){
    updateTOC();
});

// Listener to update content highlight when intersecting view
window.addEventListener('DOMContentLoaded', () => {

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const id = entry.target.getAttribute('id');
        if (entry.intersectionRatio > 0) {
          document.querySelector(`#navContent h3 a[href="#${id}"]`).parentElement.classList.add('active');
        } else {
          document.querySelector(`#navContent h3 a[href="#${id}"]`).parentElement.classList.remove('active');
        }
      });
    });
  
    // Track all sections that have an `id` applied
    document.querySelectorAll('.section[id]').forEach((section) => {
      observer.observe(section);
    });
    
  });


// Smooth scrolling behavior for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});