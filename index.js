fieldSpots = document.getElementsByClassName('fieldSpot');
fieldSpots[0].onclick = () => {
  document.getElementById('myForm').style.display = 'flex';
};
function removeOpt() {
  //e.preventDefault();
  document.getElementById('myForm').style.display = 'none';
  let img = document.createElement('img');
  img.src = 'flower1200.png';
  img.style = 'position: absolute; top: 0; left: 0;';
  document.getElementById('fieldSpot1').appendChild(img);
}
