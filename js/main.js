'use strict'
const tabItem = document.querySelectorAll('.tabs__btn');
const tabContent = document.querySelectorAll('.tabs__content-item');

tabItem.forEach(function(element){
    element.addEventListener('click', open);
});

function open(evt){
    const tabTarget = evt.currentTarget;
    const button = tabTarget.dataset.button;

    tabItem.forEach(function(item){
        item.classList.remove('tabs__btn--active');
    });

    tabContent.forEach(function(item){
        item.classList.remove('tabs__content-item--active');
    });

    tabTarget.classList.add('tabs__btn--active');
    document.querySelector(`#${button}`).classList.add('tabs__content-item--active');
}


const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.choose__select');

menu.addEventListener('click', () => {
    menuBtn.classList.toggle('menu-btn--active');
    menu.classList.toggle('choose__select--active');
});

const tabItem1 = document.querySelectorAll('.select__title');
const value = document.querySelector('.select__text');

tabItem1.forEach(function (element){
    element.addEventListener('click' , giveValue);
})

function giveValue(evt){
    let data = value.textContent;
    const tabTarget = evt.currentTarget;

    value.textContent = tabTarget.textContent;
    tabTarget.textContent = data;
}


function watchAnyObject(
    object = {},
    methods = [],
    callbackBefore = function () {},
    callbackAfter = function () {},
  ) {
    for (let method of methods) {
      const original = object[method].bind(object);
      const newMethod = function (...args) {
        callbackBefore(method, ...args);
        const result = original.apply(null, args);
        callbackAfter(method, ...args);
        return result;
      };
      object[method] = newMethod.bind(object);
    }
  }

const menuBtn2 = document.querySelector('.menu--btn-1');
const menu2 = document.querySelector('.choose__select-card');

menu2.addEventListener('click', () => {
    menuBtn2.classList.toggle('menu--btn-1--active');
    menu2.classList.toggle('choose__select-card--active');
});

const tabItem2 = document.querySelectorAll('.select--title-1');
const value2 = document.querySelector('.select__text--title');

tabItem2.forEach(function (element){
    element.addEventListener('click' , giveValue2);
    console.log(element);
})

function giveValue2(evt){
    let data = value2.textContent;
    const tabTarget = evt.currentTarget;

    value2.textContent = tabTarget.textContent;
    tabTarget.textContent = data;
}
