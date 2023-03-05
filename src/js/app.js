import {isWebp} from './modules/functions.js'

isWebp();

const burgers = [...document.getElementsByClassName('burger')];

burgers.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('burger_active');
        [...document.getElementsByClassName('menu__list')].forEach(cls => cls.classList.toggle('menu__list_active'));
    })
})