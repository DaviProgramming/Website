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
    items:2,
    dots:false,
    loop:true,
    autoPlay:false,
    autoPlayHoverPause: true,
    responsive:{
        500:{
            items:3
        },
        1280:{
            items:4
        },
        1366:{
            items:6
        }
    }
})

$('.movies-slide').owlCarousel({
    items:2,
    dots:false,
    nav:true,   
    navText: navText,
    margin:15,
    responsive:{
        500:{
            items:3
        },
        1280:{
            items:4
        },
        1366:{
            items:6
        }
    }

})

})