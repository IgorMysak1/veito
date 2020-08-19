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
// basketBtn.addEventListener('click', function () {
//     basketBlock.style.display = "block";
//     body.classList.add('active');
// });
// arrowBack.addEventListener('click', function () {
//     basketBlock.style.display = "none";
//     body.classList.remove('active');
// });
// add minus
const plus = document.querySelectorAll('.count-card__plus');
const minus = document.querySelectorAll('.count-card__minus');
plus.forEach(function (elem) {
    elem.addEventListener('click', function count() {
        if (document.querySelector('.one')) {
            document.querySelector('.one').classList.remove('one');
        }
        elem.closest('.sum-card').classList.add('one');
        let num = +document.querySelector('.one .num').textContent;
        let val = parseInt(document.querySelector('.one .val').textContent) / num;
        if (num == 1) {
            document.querySelector('.one .count-card__minus').style.display = "flex";
            document.querySelector('.one .count-card__plus').style.marginTop = 0;
        }
        num++;
        document.querySelector('.one .num').textContent = num;
        document.querySelector('.one .val').textContent = val * num + "₽";
        console.log(num);
        console.log(val);
    });
});

minus.forEach(function (elem) {
    elem.addEventListener('click', function count() {
        if (document.querySelector('.one')) {
            document.querySelector('.one').classList.remove('one');
        }
        elem.closest('.sum-card').classList.add('one');
        let num = +document.querySelector('.one .num').textContent;
        let val = parseInt(document.querySelector('.one .val').textContent) / num;
        if (num <= 2) {
            document.querySelector('.one .count-card__minus').style.display = "none";
            document.querySelector('.one .count-card__plus').style.marginTop = "19px";
        } else if (num == 1) {
            return;
        }
        num--;
        document.querySelector('.one .num').textContent = num;
        document.querySelector('.one .val').textContent = val * num + "₽";
        console.log(num);
        console.log(val);
    });
});


