'use strict';

console.log('>> Ready :)');

const menu = document.querySelector('.hamburger');

function toggleMenu(event) {
    this.classList.toggle('is-active');
    document.querySelector(".menuppal").classList.toggle("is_active");
    event.preventDefault();
}

const elementportfolio = document.querySelectorAll('.portfolio');
const elementWeb = document.getElementById('js-web');
const elementJs = document.getElementById('js-javascript');
const elementReact = document.getElementById('js-react')
const elementRicky = document.getElementById('js-ricky')
const buttonAll = document.querySelector('#btn-all');
const buttonWeb = document.getElementById('btn-web');
const buttonJs = document.querySelector('#btn-js');
const buttonReact = document.querySelector('#btn-react');

function selectCategoryAll() {
    elementWeb.classList.remove('hidden')
    elementReact.classList.remove('hidden')
    elementRicky.classList.remove('hidden')
    elementJs.classList.remove('hidden')
}


function selectCategoryWeb() {
   elementJs.classList.add('hidden')
   elementReact.classList.add('hidden')
   elementRicky.classList.add('hidden')
   elementWeb.classList.remove('hidden')
}

function selectCategoryJs(){
    elementJs.classList.remove('hidden')
    elementReact.classList.add('hidden')
    elementRicky.classList.add('hidden')
    elementWeb.classList.add('hidden')  
}

function selectCategoryReact() {
    elementJs.classList.add('hidden')
    elementReact.classList.remove('hidden')
    elementRicky.classList.remove('hidden')
    elementWeb.classList.add('hidden')
 }


menu.addEventListener('click', toggleMenu, false);
buttonAll.addEventListener('click', selectCategoryAll)
buttonWeb.addEventListener('click', selectCategoryWeb)
buttonJs.addEventListener('click', selectCategoryJs)
buttonReact.addEventListener('click', selectCategoryReact)


