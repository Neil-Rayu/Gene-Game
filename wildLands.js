let shade = Math.random() * 2 - 1;
let soilHealth = Math.random() * 2 - 1;
let birdCnt = Math.random();
let waterFall = Math.random() * 2 - 1;
function naturalFitness(chromosomes) {
  let heightCnt = 0;
  let seedCnt = 0;
  let curveCnt = 0;
  let rootCnt = 0;
  chromosomes[0].split('').forEach((base) => {
    if (Number(base) == 1) {
      heightCnt++;
    }
  });
  // chromosomes[1].forEach(base => {
  //       if(base == 1){
  //         seedCnt++;
  //       }
  // });
  chromosomes[1].split('').forEach((base) => {
    if (Number(base) == 1) {
      curveCnt++;
    }
  });
  chromosomes[2].split('').forEach((base) => {
    if (Number(base) == 1) {
      rootCnt++;
    }
  });

  let multi = 1;
  if (shade > 0) {
    multi = 2;
  }
  let divi = 2;
  if (soilHealth > 0) {
    divi = 1;
  }
  let waterMulti = 0.3;
  if (waterFall > 0) {
    waterMulti = 2;
  }

  let fitness =
    heightCnt * shade * multi +
    (heightCnt * soilHealth) / divi +
    rootCnt * soilHealth * 2 +
    heightCnt * ((-1 * birdCnt) / 2) +
    (curveCnt * birdCnt) / 2 +
    curveCnt * waterMulti * waterFall;
  return fitness;
}
var NaturalGeneticAlgorithm = function () {};
NaturalGeneticAlgorithm.prototype.generate = function (length) {
  let chromosome = '';
  for (let i = 0; i < length; i++) {
    if (Math.floor(Math.random() * 10) % 2 == 0) {
      chromosome += '1';
    } else {
      chromosome += '0';
    }
  }
  return chromosome;
};

NaturalGeneticAlgorithm.prototype.select = function (population, fitnesses) {
  let max = fitnesses[0];
  let index1 = 0;
  for (let i = 0; i < fitnesses.length; i++) {
    if (fitnesses[i] > max) {
      max = fitnesses[i];
      index1 = i;
    }
  }
  //this.simulateAppearance([population[index1][0], population[index1][1]],fitnesses[index1] );

  fitnesses.splice(index1, 1);
  let max2 = fitnesses[0];
  let index2 = 0;
  for (let i = 0; i < fitnesses.length; i++) {
    if (fitnesses[i] > max2) {
      max2 = fitnesses[i];
      index2 = i;
    }
  }
  return [population[index1], population[index2]];
};
NaturalGeneticAlgorithm.prototype.mutate = function (chromosome, p) {
  for (let i = 0; i < chromosome.length; i++) {
    if (Math.random() <= p) {
      if (chromosome.charAt(i) == '1') {
        chromosome =
          chromosome.substring(0, i) + '0' + chromosome.substring(i + 1);
      } else {
        chromosome =
          chromosome.substring(0, i) + '1' + chromosome.substring(i + 1);
      }
    }
  }
  return chromosome;
};
NaturalGeneticAlgorithm.prototype.crossover = function (
  chromosome1,
  chromosome2
) {
  let n = Math.floor(Math.random() * chromosome1.length);
  //console.log(n);
  let x = chromosome1;
  chromosome1 = chromosome1.substring(0, n) + chromosome2.substring(n);
  chromosome2 = chromosome2.substring(0, n) + x.substring(n);
  return [chromosome1, chromosome2];
};
NaturalGeneticAlgorithm.prototype.createPool = function (fitness, length) {
  // GENERATE INITIAL CHROMOSOMES
  let genePoolChromosomes = [[], []];
  let genePoolFitness = [];
  //Fill starting sunflower chromosomes
  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 3; j++) {
      genePoolChromosomes[i].push(this.generate(length));
    }
  }
  //Get fitness for starting pool
  for (let i = 0; i < 2; i++) {
    genePoolFitness[i] = fitness(genePoolChromosomes[i]);
    // this.simulateApperance(
    //   [genePoolChromosomes[i][0], genePoolChromosomes[i][1]],
    //   genePoolFitness[i]
    // );
  }
  return [genePoolChromosomes, genePoolFitness];
};
NaturalGeneticAlgorithm.prototype.naturalRun = function (
  fitness,
  genePoolChromosomes,
  genePoolFitness
) {
  console.log(genePoolChromosomes, genePoolFitness); //CONSOLE LOG!!
  //for (let gen = 0; gen < iterations; gen++) {
  let tempC = [[], [], [], [], [], []]; //new temp chromosome list
  for (let i = 0; i < 2; i += 2) {
    let cross = this.select(genePoolChromosomes, genePoolFitness); //Select Two
    //console.log(cross); //CONSOLE LOG!!
    for (let index = 0; index < 3; index++) {
      let dubleCross = this.crossover(
        //Returns the cross between x1 and y1 so two chromsomes
        this.mutate(cross[0][index], 0.005),
        this.mutate(cross[1][index], 0.005)
      );
      tempC[i].push(dubleCross[0]); //x
      tempC[i + 1].push(dubleCross[1]); //y
    }
  }
  //console.log(tempC);
  genePoolChromosomes = tempC;
  for (let i = 0; i < 2; i++) {
    genePoolFitness[i] = fitness(genePoolChromosomes[i]);
    // this.simulateApperance(
    //   [genePoolChromosomes[i][0], genePoolChromosomes[i][1]],
    //   genePoolFitness[i]
    // );
  }
  //console.log(genePoolChromosomes, genePoolFitness); //CONSOLE LOG!!
  let sum = 0;
  genePoolFitness.forEach((e) => {
    sum += e;
  });
  //console.log(sum / 10);
  if (genePoolFitness.includes(1)) {
    console.log('HELL YEAHHHS');
    //break;
  }
  //}
  return [genePoolChromosomes, genePoolFitness];
};

let nG = new NaturalGeneticAlgorithm();

let pool = nG.createPool(naturalFitness, 10);
console.log(pool);

//Timer
let text = document.getElementById('timer');
let night = document.getElementById('nightScreen');
let time = 0;
let downTime = 2;
function timer() {
  if (time > 15 && time < 35) {
    night.style.opacity = (time - 15) * 2 + '%';
  }
  if (time > 45 && time < 65) {
    night.style.opacity = (38 - downTime) / 100;
    downTime += 2;
  }
  if (time == 65) {
    pool = nG.naturalRun(naturalFitness, pool[0], pool[1]);
    console.log(pool);
    time = 0;
  }
  text.innerText = time;
  time++;
}
let interval = setInterval(timer, 1000);
let pause = false;
function clearInt() {
  if (pause) {
    interval = setInterval(timer, 1000);
  } else {
    clearInterval(interval);
  }
  pause = !pause;
}
