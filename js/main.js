//nav
const navMenu = document.getElementById('nav_Menu');
const navToggle = document.getElementById('nav_Toggle');
const navClose = document.getElementById('nav_Close');
const navlink = document.querySelectorAll('.nav__link');
//show section active var
const sections = document.querySelectorAll('section[id]')
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
//funcion show your section in nav ARREGLAR
function scrollActive(){
    const scrollY = window.pageXOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sections = current.getAttribute('id')
        
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            console.log('hola')
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active_link')
        }else{
            console.log('chao')
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active_link')
        }
    })
}
window.addEventListener('scroll',scrollActive)