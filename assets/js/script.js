const listNumbers = [];

function createSquare(target) {
  const square = document.createElement('div');
  square.className = 'square';
  const number = getUniqueRandomNumber(1, 100);
  square.innerHTML = `<span>${muber}</span>`;
  square.classList.add(getOddEven(number));
  target.append(square);
  return square;
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

