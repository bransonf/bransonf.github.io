// Scroll listener to update ToC position
// function updateTOC() {
//     let st = getScrollTop();
//     let navContent = document.getElementById("navContent");
//     navContent.style.top = Math.max(st, 250) + "px"
// }

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

// document.addEventListener('scroll', function(){
//     updateTOC();
// });


// Listener to update content highlight when intersecting view

let viridis_inferno = [
  "#000004", "#08051E", "#190C3E", "#300A5B", "#460B6A", "#5C126E", "#711A6E",
  "#87216B", "#9C2964", "#B1325A", "#C43C4E", "#D64B40", "#E55C30", "#F17020",
  // "#F8870E", "#FCA007", "#FBB91F", "#F7D340", "#F1ED6F", "#FCFFA4",
]

window.addEventListener('DOMContentLoaded', () => {

    // TODO; Use a gradient color scheme based on the fraction of the intersection
    // Too much, intersection observer lags on large scroll
    // Could interpolate distance between elements, but too much trouble for now
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          const id = entry.target.getAttribute('id');
          // console.log(id)
          
          // Based on the intersection ratio, get the color pallete item
          // const index = Math.floor(entry.intersectionRatio * viridis_inferno.length);
          // const color = viridis_inferno[index]
          const link = document.querySelector(`#navContent h3 a[href="#${id}"]`) || document.querySelector(`#navContent ul li a[href="#${id}"]`)
          const navSection = document.querySelector(`.navSection h3 a[href="#${id}`)
          // link.style.color = color
          // .style.color = color

          if (entry.intersectionRatio > 0) {
            // document.querySelector(`#navContent h3 a[href="#${id}"]`).parentElement.classList.add('active');
            link.parentElement.classList.add('active')
            if (navSection) {
              navSection.parentElement.parentElement.classList.add('activeSection')
            }
          } else {
            // document.querySelector(`#navContent h3 a[href="#${id}"]`).parentElement.classList.remove('active');
            link.parentElement.classList.remove('active')
            if (navSection){
              navSection.parentElement.parentElement.classList.remove('activeSection')
            }
          }
        })
      },
      {
        threshold: Array.from({ length: 1001 }, (_, i) => i / 1000) // Creates an array [0, 0.01, 0.02, ..., 1]
      }
    );
  
    // Track all sections that have an `id` applied
    document.querySelectorAll('.section[id]').forEach((section) => {
      observer.observe(section);
    });

    // Also track all projects
    document.querySelectorAll('.project[id]').forEach((project) => {
      observer.observe(project)
    });
    
  });


// Smooth scrolling behavior for anchor links
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//   anchor.addEventListener('click', function (e) {
//       e.preventDefault();

//       document.querySelector(this.getAttribute('href')).scrollIntoView({
//           behavior: 'smooth'
//       });
//   });
// });

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute('href'));
      
      if (window.innerWidth < 960) {
          const navContent = document.querySelector('#navContent');
          const navHeight = navContent ? navContent.offsetHeight : 0;
          
          const targetPosition = target.offsetTop - navHeight;
          
          window.scrollTo({
              top: targetPosition,
              behavior: 'smooth'
          });
      } else {
          target.scrollIntoView({
              behavior: 'smooth'
          });
      }
  });
});