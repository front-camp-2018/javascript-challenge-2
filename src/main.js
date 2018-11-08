import './styles/main.scss';
import {getAdapter} from './services';

const $input = document.getElementById('input');
const $clearBtn = document.getElementById('clear-cookie');
const $tasksList = document.getElementById('tasks-list');

const adapter = getAdapter('mLab');

$clearBtn.addEventListener('click', () => {
  adapter.removeAll();
  $tasksList.innerHTML = '';
});

$input.addEventListener('keyup', event => {
  if (event.key === 'Enter') {
    const {value} = event.target;

    adapter.save(value);
    renderTask(createTask(value));
    event.target.value = '';
  }
});

$tasksList.addEventListener('click', event => {
  if (event.target.classList.contains('remove')) {
    const [$valueElement] = event.target.parentNode.getElementsByClassName('value');
    const value = $valueElement.textContent;

    $tasksList.removeChild(event.target.parentNode);
    adapter.remove(value);
  }
});

const createTask = value => {
  const $li = document.createElement('li');

  $li.innerHTML = `
    <span class="value">${value}</span>
    <span class="remove">&#x274C;</span>  
  `;

  return $li;
};

const renderTask = data => {
  $tasksList.appendChild(data);
};

const initialize = arr => {
  arr.forEach(item => renderTask(createTask(item)));
};

adapter.read()
  .then(data => {
    initialize(data);
  });

