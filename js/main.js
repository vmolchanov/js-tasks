'use strict';

(function() {
    const URL = 'http://learn.javascript.ru/task/';

    const inputContainer = document.querySelector('.input');
    const input = inputContainer.querySelector('.input input');
    const goButton = document.querySelector('#go-button');
    const randomButton = document.querySelector('#random-button');
    const introCountElement = document.querySelector('.intro b');

    const min = input.min;
    const max = window.data.length;

    introCountElement.textContent = max;
    input.max = max;
    input.value = localStorage.getItem('lastTask') || 1;

    inputContainer.addEventListener('click', (e) => {
        const target = e.target;
        if (target.classList.contains('input__button')) {
            const value = Number(input.value);
            switch (target.dataset.action) {
                case 'decrease':
                    if (value - 1 >= min) {
                        input.value = value - 1;
                    }
                    break;
                case 'increase':
                    if (value + 1 <= max) {
                        input.value = value + 1;
                    }
                    break;
                default:
                    console.error('Такой клавиши нет!');
            }
        }
    });

    goButton.addEventListener('click', () => {
        localStorage.setItem('lastTask', input.value);
        location.href = URL + window.data[input.value - 1];
    });

    randomButton.addEventListener('click', () => {
        location.href = URL + window.data[getRandom(0, max - 1)];
    });

    function getRandom(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
})();