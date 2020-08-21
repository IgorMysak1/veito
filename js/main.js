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
let arrowBack = document.querySelector('.back-basket__wrapper');
basketBtn.addEventListener('click', function () {
    basketBlock.style.display = "block";
    body.classList.add('active');
});
arrowBack.addEventListener('click', function () {
    basketBlock.style.display = "none";
    body.classList.remove('active');
});


// plus minus
const plus = document.querySelectorAll('.count-card__plus');
const minus = document.querySelectorAll('.count-card__minus');
plus.forEach(function (elem) {
    elem.addEventListener('click', function count() {
        if (document.querySelector('.one-sum')) {
            document.querySelector('.one-sum').classList.remove('one-sum');
        }
        elem.closest('.sum-card').classList.add('one-sum');
        let num = +document.querySelector('.one-sum .num').textContent;
        let val = parseInt(document.querySelector('.one-sum .val').textContent) / num;
        if (num == 1) {
            document.querySelector('.one-sum .count-card__minus').style.display = "flex";
        }
        num++;
        document.querySelector('.one-sum .num').textContent = num;
        document.querySelector('.one-sum .val').textContent = val * num + "₽";
        countLastSum();
    });
});

minus.forEach(function (elem) {
    elem.addEventListener('click', function count() {
        if (document.querySelector('.one-sum')) {
            document.querySelector('.one-sum').classList.remove('one');
        }
        elem.closest('.sum-card').classList.add('one-sum');
        let num = +document.querySelector('.one-sum .num').textContent;
        let val = parseInt(document.querySelector('.one-sum .val').textContent) / num;
        if (num <= 2) {
            document.querySelector('.one-sum .count-card__minus').style.display = "none";
        } else if (num == 1) {
            return;
        }
        num--;
        document.querySelector('.one-sum .num').textContent = num;
        document.querySelector('.one-sum .val').textContent = val * num + "₽";
        countLastSum();
    });
});
function countLastSum() {
    let allSum = document.querySelectorAll('.val');
    let firstSum = 0;
    for (i = 0; i < allSum.length; i++) {
        firstSum += parseInt(allSum[i].innerText);

    };
    let lastSum = document.querySelector('.basket-price__value p');
    lastSum.textContent = firstSum + "₽";
}
//order
let countBasket = document.querySelector('.count-basket');
let countBasketOrder = document.querySelector('.count-basket__order');
let basketRight = document.querySelector('.basket__right');
let backBasketWrapper = document.querySelector('.back-basket__wrapper');
let headerBasketTitle = document.querySelector('.header-basket__title');
countBasketOrder.addEventListener('click', function () {
    countBasketOrder.style.display = "none";
    let div = document.createElement('div');
    div.classList.add('back-basket__wrapper');
    div.classList.add('count-basket__back');
    let img = document.createElement('img');
    let p = document.createElement('p');
    img.setAttribute('src', 'img/icons/arrow .png');
    p.textContent = "Назад";
    div.appendChild(img);
    div.appendChild(p);
    div.style.display = "flex";
    countBasket.insertBefore(div, countBasketOrder);
    basketRight.style.display = "flex";
    backBasketWrapper.style.display = "none";
    headerBasketTitle.classList.add('active');
    div.addEventListener('click', function () {
        div.style.display = "none";
        countBasketOrder.style.display = "flex";
        basketRight.style.display = "none";
        backBasketWrapper.style.display = "flex";
        headerBasketTitle.classList.remove('active');
    });
});

//delete
let crossDelete = document.querySelectorAll('.item-basket__cross img');
crossDelete.forEach(function (elem) {
    elem.addEventListener('click', function () {
        elem.closest('.item-basket').classList.add('one-delete');
        document.querySelector('.body-basket').removeChild(document.querySelector('.one-delete'));
        countLastSum();
    });
});
