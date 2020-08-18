//burger menu
const headerMenu = document.querySelector('.header__menu');
const heroMenu = document.querySelector('.hero__menu');
const heroCross = document.querySelector('.hero__cross');
const heroWrapper = document.querySelector('.hero__wrapper');
const bodyHidden = document.querySelector('body');
headerMenu.addEventListener('click', function () {
    heroMenu.classList.add('active');
    heroWrapper.classList.add('active');
    bodyHidden.classList.add('active');
});
heroCross.addEventListener('click', function () {
    heroMenu.classList.remove('active');
    heroWrapper.classList.remove('active');
    bodyHidden.classList.remove('active');
});
//retreat header
const header = document.querySelector('.header');

window.addEventListener('scroll', function () {
    let retreat = window.scrollY;

    if (retreat > 150) {
        header.classList.add('active');
    } else if (retreat < 150) {
        header.classList.remove('active');
    }
});

//basket
const basketBtn = document.querySelector('.header__basket-img');
const basketBlock = document.querySelector('.basket');
const body = document.querySelector('body');
const arrowBack = document.querySelector('.header-basket__back img');
basketBtn.addEventListener('click', function () {
    basketBlock.style.display = "block";
    body.classList.add('active');
});
arrowBack.addEventListener('click', function () {
    basketBlock.style.display = "none";
    body.classList.remove('active');
});



