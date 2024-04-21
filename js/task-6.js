function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('input[type="number"]');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const boxesContainer = document.getElementById('boxes');

createBtn.addEventListener('click', handlerClick);
destroyBtn.addEventListener('click', handlerClick);

function handlerClick(event) {
  let amount;
  if (event.currentTarget.dataset.create !== undefined) {
    destroyBoxes();
    amount = Number(input.value);
    if (amount >= 1 && amount <= 100) {
      createBoxes(amount);
    }
    input.value = '';
  }
  if (event.currentTarget.dataset.destroy !== undefined) {
    destroyBoxes();
  }
}

function destroyBoxes() {
  boxesContainer.innerHTML = '';
}

function createBoxes(amount) {
  let size = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesContainer.appendChild(box);
    size += 10;
  }
}
