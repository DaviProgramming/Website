$(document).ready(() =>{

$('#hamburguer-menu').click(() =>{
    $('#hamburguer-menu').toggleClass('active');
})


let navText = ["<i class='bx bx-chevron-left'></i>" , "<i class='bx bx-chevron-right'></i>"];

$('#hero-carousel').owlCarousel({
    items:1,
    dots:false,
    loop:true,
    nav:true,
    navText: navText,
    autoPlayHoverPause: true,

})

$('#top-movies-slide').owlCarousel({
    items:6,
    dots:false,
    loop:true,
    autoPlay:false,
    autoPlayHoverPause: true,
})
})