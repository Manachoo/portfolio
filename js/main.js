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
//show section active var
const sections = document.querySelectorAll('section[id]')
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
        };
    })
};
window.addEventListener('scroll',scrollActive)
//show shadow in nav when scroll
function scrollHeader(){
    const nav = document.getElementById('header')
    if(this.scrollY >= 80) nav.classList.add('scroll_header');else nav.classList.remove('scroll_header')
};
window.addEventListener('scroll',scrollHeader)
//scroll auto button
//this number "560" can fixed for more or less text in home
function scrollTop(){
    const scrollTop = document.getElementById('scroll_up');
    if(this.scrollY >= 560) scrollTop.classList.add('show_scroll'); else scrollTop.classList.remove('show_scroll')
};
window.addEventListener('scroll',scrollTop)
//skills dropdown
const skillsContent = document.getElementsByClassName('skills__content');
const skillsheader = document.querySelectorAll('.skills__header');

function toggleSkills(){
    let itemClass = this.parentNode.className

    for(i = 0; i< skillsContent.length; i++){
        skillsContent[i].className = 'skills__content skills__close'
    }
    if(itemClass === 'skills__content skills__close'){
        this.parentNode.className = 'skills__content skills__open'
    }
};
skillsheader.forEach((me) =>{
    me.addEventListener('click',toggleSkills)
});
//dark theme
const themeButton = document.getElementById('theme_button');
const darkTheme = 'dark_theme';
const iconTheme = 'uil-bright';

const selectedTheme = localStorage.getItem('selected_theme');
const selectedIcon = localStorage.getItem('selected_icon');

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark':'ligh';
const getCurrentIcon = () => document.body.classList.contains(iconTheme) ? 'uil-brightness-half':'uil-bright';

if(selectedTheme){
    document.body.classList[selectedTheme === 'dark' ? 'add':'remove'](darkTheme);
    themeButton.classList[selectedIcon === 'uil-brightness-half' ? 'add':'remove'](iconTheme);
};
//On Off theme
themeButton.addEventListener('click',() =>{
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    localStorage.setItem('selected_theme', getCurrentTheme());
    localStorage.setItem('selected_icon', getCurrentIcon());
});
//show and close modal
const modalViews = document.querySelectorAll('.services__modal');
const modalButtons = document.querySelectorAll('.services__button');
const modalCloses = document.querySelectorAll('.services__modal_close');
let modal = function(modalClick){
    modalViews[modalClick].classList.add('active_modal');
};
modalButtons.forEach((modalButton, i) => {
    modalButton.addEventListener('click',() =>{
        modal(i)
    })
});
modalCloses.forEach((modalClose,i) =>{
    modalClose.addEventListener('click',() =>{
        modalViews.forEach((modalView) =>{
            modalView.classList.remove('active_modal')
        })
    })
});
//swaper
let swiper = new Swiper(".portfolio__container", {
    cssMode: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });