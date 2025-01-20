// Using PanZoom for this
// See https://github.com/timmywil/panzoom
// And https://timmywil.com/panzoom/demo/#Panning%20and%20zooming
// Start with the ERD element

const pdc = document.getElementById("parcel-diagram-canvas")
const panzoom = Panzoom(pdc,)

zoomInButton.addEventListener('click', panzoom.zoomIn)
zoomOutButton.addEventListener('click', panzoom.zoomOut)
resetButton.addEventListener('click', panzoom.reset)
rangeInput.addEventListener('input', (event) => {
  panzoom.zoom(event.target.valueAsNumber)
})