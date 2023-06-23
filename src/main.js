const targetContainer = document.querySelector('main');
const input = document.querySelector('input[name="search"]');
const button = document.querySelector('button[type="button"]');
const BASE_URL = 'https://brasilapi.com.br/api/';

const clearPage = () => {
  targetContainer.innerHTML = '';
};

const generateResult = (elements) => {
  clearPage();
  elements.forEach((el) => {
    const card = document.createElement('div');
    const title = document.createElement('span');
    title.innerText = el;
    card.className = 'city-card';
    card.appendChild(title);
    targetContainer.appendChild(card);
  });
};

fetch('https://brasilapi.com.br/api/ddd/v1/71')
  .then((response) => response.json())
  .then((data) => generateResult(data.cities));

button.addEventListener('click', () => {
  fetch(`${BASE_URL}ddd/v1/${input.value}`)
    .then((response) => response.json())
    .then((data) => generateResult(data.cities));
});
