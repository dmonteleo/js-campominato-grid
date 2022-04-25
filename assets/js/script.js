let listNumbers = [];
const griglia = document.querySelector('.griglia');
const main = document.querySelector('main');

document.getElementById('play').addEventListener('click', play);


 function play() {
   reset();
   const level = document.getElementById('level').value;
   const levels = [100, 81, 49];
   const squareNumbers = levels[level];
   init(squareNumbers);
 }

 function reset() {
   griglia.innerHTML = '';
   listNumbers = [];
 }

function createSquare(target, x) {
  const square = document.createElement('div');
  square.className = 'square ' + `square${x}`;
  const number = getUniqueRandomNumber(1, x);
  square.innerHTML = `<span>${number}</span>`;
  square.classList.add(getOddEven(number));
  target.append(square);
  return square;
}

function init(x) {
   /*const grid = document.createElement('div');
   grid.className = 'griglia';*/
   for(i=1; i<=x; i++) {
     const square = createSquare(griglia, x);
     square.addEventListener('click', function() {
       this.classList.add('clicked');
     })
   }
 }

function getUniqueRandomNumber(min, max) {
  if ( listNumbers.length === max - min + 1 ) listNumbers = [];
  let number;
  let valid = false;
  prova = true;
  while(!valid /*&& prova*/) {
    number = getRandomNumber(min, max);
    if(!listNumbers.includes(number)) {
      valid = true;
      listNumbers.push(number);
    }
    // if ( listNumbers.length === max - min + 1 ) {
    //   prova = false;
    //   return null;
    // }
  }
  return number;
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getOddEven(n) {
  if(n % 2) return 'odd';
  return 'even';
}
