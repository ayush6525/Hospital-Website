const navItems = document.querySelector("#nav_items");
const openNavBtn = document.querySelector("#open_nav-btn");
const closeNavBtn = document.querySelector("#close_nav-btn");


openNavBtn.addEventListener('click', () => {
navItems.style.display = 'flex';
openNavBtn.style.display= 'none';
closeNavBtn.style.display= 'inline-block';
});
const closeNav = () => {
navItems.style.display = 'none';
openNavBtn.style.display= 'inline-block';
closeNavBtn.style.display= 'none';
}
closeNavBtn.addEventListener('click', closeNav);



if(window.innerWidth< 1024) {
    document.querySelectorAll('#nav_items li a').forEach(navItems => {
navItems.addEventListener('click', ()=> {
    closeNav();
})
    });
}
window.addEventListener('scroll', () =>{
    document.querySelector('nav').classlist.toggle('window-scroll', window.scrollY > 0)
});

var Swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    breakpoints: {
        600: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }
    }
});