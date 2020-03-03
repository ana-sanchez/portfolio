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
const elementSciencie = document.getElementById('js-sciencie')
const elementCero = document.getElementById('js-cero') 
const elementBudget = document.getElementById('js-control')
const buttonAll = document.querySelector('#btn-all');
const buttonWeb = document.getElementById('btn-web');
const buttonJs = document.querySelector('#btn-js');
const buttonReact = document.querySelector('#btn-react');
const buttonWordpress = document.querySelector('#btn-wordpress');


function selectCategoryAll() {
    elementWeb.classList.remove('hidden')
    elementReact.classList.remove('hidden')
    elementRicky.classList.remove('hidden')
    elementJs.classList.remove('hidden')
    elementSciencie.classList.remove('hidden')
    elementCero.classList.remove('hidden')
    elementBudget.classList.remove('hidden')

}


function selectCategoryWeb() {
   elementJs.classList.add('hidden')
   elementReact.classList.add('hidden')
   elementRicky.classList.add('hidden')
   elementWeb.classList.remove('hidden')
   elementSciencie.classList.remove('hidden')
   elementCero.classList.remove('hidden')
   elementBudget.classList.add('hidden')



}

function selectCategoryJs(){
    elementJs.classList.remove('hidden')
    elementReact.classList.add('hidden')
    elementRicky.classList.add('hidden')
    elementWeb.classList.add('hidden')
    elementSciencie.classList.add('hidden')
    elementCero.classList.add('hidden')
    elementBudget.classList.add('hidden')


  
}

function selectCategoryReact() {
    elementJs.classList.add('hidden')
    elementReact.classList.remove('hidden')
    elementRicky.classList.remove('hidden')
    elementWeb.classList.add('hidden')
    elementSciencie.classList.add('hidden')
    elementCero.classList.add('hidden')
    elementBudget.classList.remove('hidden')



 }

 function selectCategoryWordpress() {
    elementJs.classList.add('hidden')
    elementReact.classList.add('hidden')
    elementRicky.classList.add('hidden')
    elementWeb.classList.add('hidden')
    elementSciencie.classList.remove('hidden')
    elementCero.classList.remove('hidden')
    elementBudget.classList.add('hidden')
    console.log('hola')
 }

const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
  
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        console.log('hola')
    }
    else {document.documentElement.setAttribute('data-theme', 'light');
          localStorage.setItem('theme', 'light');
    }    
}

if (toggleSwitch) {
    toggleSwitch.addEventListener('change', switchTheme, false);
}

menu.addEventListener('click', toggleMenu, false);
buttonAll.addEventListener('click', selectCategoryAll)
buttonWeb.addEventListener('click', selectCategoryWeb)
buttonJs.addEventListener('click', selectCategoryJs)
buttonReact.addEventListener('click', selectCategoryReact)
buttonWordpress.addEventListener('click' , selectCategoryWordpress)




