// const numbers = [1, 2, 3];
// const sumresult = numbers.reduce((accumulator, item) => accumulator + item, 0);

// console.log(sumresult);

const phaseScore = [
  { name: 'Vinicius Costa', score: 337 },
  { name: 'Roger Melo', score: 43 },
  { name: 'Alfredo Braga', score: 234 },
  { name: 'Pedro H. Silva', score: 261 },
  { name: 'Ana Paula Rocha', score: 491 },
  { name: 'Vinicius Costa', score: 167 },
  { name: 'Roger Melo', score: 137 },
  { name: 'Alfredo Braga', score: 135 },
  { name: 'Ana Paula Rocha', score: 359 },
  { name: 'Pedro H. Silva', score: 133 },
];

const rogerScore = phaseScore.reduce((accumulator, phaseScore) => {
  if (phaseScore.name === 'Roger Melo') {
    accumulator += phaseScore.score;
  }

  return accumulator;
}, 0);

console.log(rogerScore);
