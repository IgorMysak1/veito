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

// basket
const basket = document.querySelector('.header__basket-img');
const basketBack = document.querySelector('.basket__back');
basket.addEventListener('click', function () {
    bodyHidden.classList.add('active-basket');
    document.querySelector('.basket').style.display = "block";
});
basketBack.addEventListener('click', function () {
    bodyHidden.classList.remove('active-basket');
    document.querySelector('.basket').style.display = "none";
});

// plus minus
let addNumber = document.querySelectorAll('.basket__circle-plus');
let minusNumber = document.querySelectorAll('.basket__circle-minus');
let addNumberP = document.querySelectorAll('.basket__item-number1 p');
let costValueP = document.querySelectorAll('.basket__item-cost p');

addNumber.forEach(function (elem, index) {
    addNumber[index].addEventListener('click', function () {
        let num = addNumberP[index].textContent;
        let costX = costValueP[index].textContent;
        costX = parseInt(costX) / num;
        if (num >= 1) {
            num1 = +num + 1;
            addNumberP[index].textContent = num1;
            costValueP[index].textContent = num1 * parseInt(costX) + " P";
            document.querySelectorAll('.basket__circle-minus')[index].style.display = "flex";
        } else if (num == 1) {
            num1 = +num + 1;
            addNumberP[index].textContent = num1;
            document.querySelectorAll('.basket__circle-minus')[index].style.display = "none";
        }

    });
});
minusNumber.forEach(function (elem, index) {
    minusNumber[index].addEventListener('click', function () {
        let num = addNumberP[index].textContent;
        let costX = costValueP[index].textContent;
        costX = parseInt(costX) / num;
        if (num == 2) {
            num1 = +num - 1;
            addNumberP[index].textContent = num1;
            costValueP[index].textContent = num1 * parseInt(costX) + " P";
            document.querySelectorAll('.basket__circle-minus')[index].style.display = "none";
        } else if (num >= 3) {
            num1 = +num - 1;
            addNumberP[index].textContent = num1;
            costValueP[index].textContent = num1 * parseInt(costX) + " P";

        }
    });
});



