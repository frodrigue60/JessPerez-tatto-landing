let menuBtn = document.querySelector('#menu-btn');
let menuLinks = document.querySelector('#menu-links');

menuBtn.addEventListener('click', function () {
    menuLinks.classList.toggle('mobile');
})