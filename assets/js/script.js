const listNumbers = [];
const griglia = document.querySelector('.griglia');

init();

function createSquare(target) {
  const square = document.createElement('div');
  square.className = 'square';
  const number = getUniqueRandomNumber(1, 100);
  square.innerHTML = `<span>${number}</span>`;
  square.classList.add(getOddEven(number));
  target.append(square);
  return square;
}

function init() {
  for(i=1; i<=100; i++) {
    const square = createSquare(griglia);
    square.addEventListener('click', function() {
      this.classList.add('clicked');
    })
  }
}

function getUniqueRandomNumber(min, max) {
  let number;
  let valid = false;
  while(!valid) {
    number = getRandomNumber(min, max);
    if(!listNumbers.includes(number)) {
      valid = true;
      listNumbers.push(number);
    }
  }
  return number;
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getOddEven(n) {
  if(n % 2) return 'odd';
  return event;
}
