fieldSpots = document.getElementsByClassName('fieldSpot');
let geneViewMode = false;

fieldSpots[0].onclick = () => {
  if (geneViewMode) {
    document.getElementById('microPop').style.display = 'flex';
  } else {
    document.getElementById('myForm').style.display = 'flex';
  }
};
function removeOpt() {
  //e.preventDefault();
  document.getElementById('myForm').style.display = 'none';
  let img = document.createElement('img');
  let genePoolChromosomes = [];
  for (let j = 0; j < 3; j++) {
    genePoolChromosomes.push(generate(10));
  }
  console.log(genePoolChromosomes);
  let spec = deriveInfo(genePoolChromosomes);
  if (spec == 0) {
    img.src = 'flowerLiq200.png';
    document.getElementById('flowerCont').src = 'flowerLiq200.png';
  } else if (spec == 1) {
    img.src = 'flowerTim200.png';
    document.getElementById('flowerCont').src = 'flowerTim200.png';
  } else {
    img.src = 'flowerImp200.png';
    document.getElementById('flowerCont').src = 'flowerImp200.png';
  }
  img.style = 'position: absolute; top: 30px; left: 20px;';
  document.getElementById('fieldSpot1').appendChild(img);
}

function generate(length) {
  let chromosome = '';
  for (let i = 0; i < length; i++) {
    if (Math.floor(Math.random() * 10) % 2 == 0) {
      chromosome += '1';
    } else {
      chromosome += '0';
    }
  }
  return chromosome;
}

let microscope = document.getElementById('Microscope');
microscope.onclick = () => {
  geneViewMode = true;
  //console.log(geneViewMode);
};

let plantList = [
  {
    fieldSpot: 1,
    name: 'hello',
  },
];

function deriveInfo(chromosomes) {
  let species;
  let traits;
  let chromosome;
  let fitness;
  let generation;
  let traitCnt = 0;
  let num = 0;
  chromosomes[0].split('').forEach((base) => {
    if (Number(base) == 1) {
      traitCnt++;
    }
  });
  console.log(traitCnt);
  let phenoCnt = 0;
  chromosomes[1].split('').forEach((base) => {
    if (Number(base) == 1) {
      phenoCnt++;
    }
  });
  chromosomes[2].split('').forEach((base) => {
    if (Number(base) == 1) {
      phenoCnt++;
    }
  });
  console.log(phenoCnt);
  if (
    chromosomes[0].includes('1000101') &&
    chromosomes[1].includes('1000101') &&
    chromosomes[2].includes('1000101')
  ) {
    species = 'Legendary';
    traits = '???';
  } else if (
    chromosomes[0].includes('110100100') &&
    chromosomes[1].includes('110100100') &&
    chromosomes[2].includes('110100100')
  ) {
    species = 'Uber Legendary';
    traits = '???';
  } else if (traitCnt <= 1) {
    species = 'Liquidum';
    traits = 'Patient, Slow, Calm';
  } else if (traitCnt <= 3) {
    species = 'Liquidum Timidus';
    traits = 'Slow, Reserved, Fragile';
  } else if (traitCnt <= 5) {
    species = 'Timidus';
    traits = 'Reserved, Fragile, Chaotic';
    num = 1;
  } else if (traitCnt <= 7) {
    species = 'Impetus Timidus';
    traits = 'Irritable, Morally Deprived, Chaotic';
    num = 2;
  } else if (traitCnt <= 9) {
    species = 'Inpetus';
    traits = 'Irritable, Frustrated, Honorable';
    num = 2;
  }
  if (phenoCnt <= 7) {
    species += ' Brevis';
    traits += ', Small';
  } else if (phenoCnt <= 11) {
    species += ' Modus';
    traits += ', Medium Size';
  } else if (phenoCnt <= 19) {
    species += ' Magnus';
    traits += ', Large';
  } else {
    species += ' Gigas';
    traits += ', Giant';
  }
  console.log(species);
  document.getElementById('species').innerText = 'Species: ' + species;
  document.getElementById('traits').innerText = 'Traits: ' + traits;
  document.getElementById('chromosome').innerText =
    'Chromosomes: ' +
    chromosomes[0] +
    ', ' +
    chromosomes[1] +
    ', ' +
    chromosomes[2];
  document.getElementById('fitness').innerText = 'Fitness: ???';
  document.getElementById('generation').innerText = 'Generation: N/A';
  //document.getElementById('rarity').innerText = Math.pow(.5, traitCnt)
  return num;
}
