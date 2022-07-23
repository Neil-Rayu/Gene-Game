fieldSpots = document.getElementsByClassName('fieldSpot');
let geneViewMode = false;

fieldSpots[0].onclick = () => {
  if (geneViewMode) {
    //
  } else {
    document.getElementById('myForm').style.display = 'flex';
  }
};
function removeOpt() {
  //e.preventDefault();
  document.getElementById('myForm').style.display = 'none';
  let img = document.createElement('img');
  img.src = 'flower1200.png';
  img.style = 'position: absolute; top: 30px; left: 20px;';
  document.getElementById('fieldSpot1').appendChild(img);
}

let microscope = document.getElementById('Microscope');
microscope.onclick = () => {
  geneViewMode = true;
};
