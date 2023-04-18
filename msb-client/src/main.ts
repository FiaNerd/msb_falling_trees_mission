// Import our styles
import './scss/main.scss'

// Import all of Bootstrap's JS
import 'bootstrap/dist/js/bootstrap.js'


const menu = document.querySelector('.menu')
const ul = document.querySelector('ul')
const hamburgerMenu = document.querySelector('.hamburger')
const menuLink = document.querySelector('.menu-text')

menu!.addEventListener('click', () => {
  ul!.classList.toggle('show')
  hamburgerMenu!.classList.toggle('close')

  ul!.classList.contains('show') ? menuLink!.textContent = 'stäng' : menuLink!.textContent = 'meny'
});
