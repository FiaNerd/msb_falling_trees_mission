// Import our styles
import './scss/main.scss'

// Import all of Bootstrap's JS
import 'bootstrap/dist/js/bootstrap.js'



const menu = document.querySelector('.menu');
const navUl = document.querySelector('.nav-items') as HTMLDivElement;
const hamburgerMenu = document.querySelector('.hamburger');
const menuLink = document.querySelector('.menu-text');

menu!.addEventListener('click', () => {
	navUl!.classList.toggle('show');
  hamburgerMenu!.classList.toggle('close');

  if (navUl!.classList.contains('show')) {
    navUl!.style.display = 'grid';
  } else {
	navUl!.style.display = 'none';
  }

  navUl!.classList.contains('show') ? menuLink!.textContent = 'stäng' : menuLink!.textContent = 'meny';
})

