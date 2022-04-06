//nav
const navMenu = document.getElementById('nav_Menu');
const navToggle = document.getElementById('nav_Toggle');
const navClose = document.getElementById('nav_Close');
const navlink = document.querySelectorAll('.nav__link');

//show menu
if(navToggle){
    navToggle.addEventListener('click',() =>{
        navMenu.classList.add("showMenu")
    })
};
//hide menu
if(navClose){
    navClose.addEventListener('click',() =>{
        navMenu.classList.remove('showMenu')
    })
};
//hide menu when click
function linkAction(){
    const navMenu = document.getElementById('nav_Menu')
    navMenu.classList.remove('showMenu')
};
navlink.forEach(n => n.addEventListener('click',linkAction))