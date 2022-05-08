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

var elem = document.querySelector('.gallery--container');
imagesLoaded( elem, () =>{
    var msnry = new Masonry( elem, {
        // options
        itemSelector: '.gallery--item',
        columnWidth: 248,
        gutter: 16,
        isFitWidth: true
      });
});
