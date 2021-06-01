const showNav = document.querySelector('.fa-bars');
const navigation = document.querySelector('.navbar');
const navbar = document.querySelector('.navbar-nav');
const closeNav = document.querySelector('.fa-times');
const navLink = document.querySelectorAll('.link');
const navLink2 = document.querySelectorAll('.link2');
const body = document.querySelector('body');
const navbarCollapse = document.querySelector('.navbar-collapse');

showNav.addEventListener('click', () => {
    navbar.classList.add('active');
    body.classList.add('disabledscroll');
});

closeNav.addEventListener('click', () => {
    navbar.classList.remove('active');
    body.classList.remove('disabledscroll');
});


for(let i=0;i>=0;i++) {
navLink[i].addEventListener('click', () => {
    navLink[i].classList.add('active');
    navLink2[i].classList.add('active');
    for(let j= 0 ; j>=0;j++) {
        navLink[j].addEventListener('click', () => {
            navLink[i].classList.remove('active');
            navLink2[i].classList.remove('active');
            navLink[j].classList.add('active');
            navLink2[j].classList.add('active');
        });
    }
});
}

