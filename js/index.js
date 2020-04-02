// SEARCH

var menu = document.querySelector('.menu')
var search = document.createElement('input');
search.setAttribute('type', 'search');
search.setAttribute('placeholder', ' Cauta un produs aici ...');
search.classList.add('search');

menu.appendChild(search);


// BURGER MENU - FOR MOBILE

var listBtn = document.querySelector('.burger_menu');

var firstDiv = document.querySelector('.burger_menu div:nth-child(1)');
var secondDiv = document.querySelector('.burger_menu div:nth-child(2)');
var thirdDiv = document.querySelector('.burger_menu div:nth-child(3)');
console.log(firstDiv);
console.log(secondDiv);
console.log(thirdDiv);


var menuList = document.querySelector('.menu_list');
var count = 0;

listBtn.addEventListener('click', function (ev) {
    ev.preventDefault();
    menuList.classList.toggle('active');
    if(count === 0) {
        secondDiv.style.display = 'none';
        firstDiv.style.transformOrigin = '9% 0%';
        firstDiv.style.transform = 'rotate(45deg)';

        thirdDiv.style.transformOrigin = '0% 100%';
        thirdDiv.style.transform = 'rotate(-45deg)';

        count = 1;
        this.style.position = 'absolute';
    } else {
        secondDiv.style.display = 'block';
        firstDiv.style.transformOrigin = '0% 0%';
        firstDiv.style.transform = 'rotate(0)';

        thirdDiv.style.transformOrigin = '0% 0%';
        thirdDiv.style.transform = 'rotate(0)';

        count = 0;
        this.style.position = 'relative';
    }
});



// ABOUT PACKAGE - FOR MORE

var more = document.querySelector('#more');
var p = more.previousElementSibling;
more.addEventListener('click', function (ev) {
    ev.preventDefault();
    p.style.webkitTextFillColor = 'white';
});

// SLIDER DOTS

var dots = document.querySelectorAll('.dot');
var slides = document.querySelectorAll('.slide');
var slide1 = document.querySelector('.slide-1');
var slide2 = document.querySelector('.slide-2');
var slide3 = document.querySelector('.slide-3');
var slide4 = document.querySelector('.slide-4');
var slide5 = document.querySelector('.slide-5');

dots.forEach(function (dot) {
    dot.addEventListener('click', function (ev) {

        dots.forEach(function (myDot) {
            myDot.classList.remove('active');
        });

        slides.forEach(function (slide) {
            slide.classList.remove('visible');
        });
        if(this.classList.contains('dot-1')) {
            this.classList.add('active');
            slide1.classList.add('visible');
        } else if(this.classList.contains('dot-2')) {
            this.classList.add('active');
            slide2.classList.add('visible');
        } else if(this.classList.contains('dot-3')) {
            this.classList.add('active');
            slide3.classList.add('visible');
        } else if(this.classList.contains('dot-4')) {
            this.classList.add('active');
            slide4.classList.add('visible');
        } else if(this.classList.contains('dot-5')) {
            this.classList.add('active');
            slide5.classList.add('visible');
        }
    });

});



// SLIDER ARROWS
// FOOTER FOR MOBILE

var presentations = document.querySelectorAll('.for_mobile .presentation');
var next = document.querySelector('.for_mobile .next');
var prev = document.querySelector('.for_mobile .prev');
var i = 0;

next.addEventListener('click', function (ev) {
    ev.preventDefault();
    presentations[i].classList.remove('visible');

    i ++;

    if(i > presentations.length - 1) {
        i = 0;
    }

    presentations[i].classList.add('visible');
});

prev.addEventListener('click', function (ev) {
    ev.preventDefault();
    presentations[i].classList.remove('visible');

    i --;

    if(i < 0) {
        i = presentations.length - 1;
    }

    presentations[i].classList.add('visible');
});


// SLIDER ARROWS
// FOOTER FOR MOBILE

var presentationsDesktop = document.querySelectorAll('.for_desktop .presentation');
var nextDesktop = document.querySelector('.for_desktop .next');
var prevDesktop = document.querySelector('.for_desktop .prev');
var j = 0;

nextDesktop.addEventListener('click', function (ev) {
    ev.preventDefault();
    presentationsDesktop[j].classList.remove('visible');

    j ++;

    if(j > presentationsDesktop.length - 1) {
        j = 0;
    }

    presentationsDesktop[j].classList.add('visible');
});

prevDesktop.addEventListener('click', function (ev) {
    ev.preventDefault();
    presentationsDesktop[j].classList.remove('visible');

    j --;

    if(j < 0) {
        j = presentationsDesktop.length - 1;
    }

    presentationsDesktop[j].classList.add('visible');
});

