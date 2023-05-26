// $(document).ready(function(){
// 	$('.header__burger').click(function(event){
// 		$('.header__burger, .menu').toggleClass('active');
// 		$('body').toggleClass('lock');
// 		$('.menu').toggleClass('open');
// 	});
// 	$('.menu__link').click(function(event){
// 		$('.header__burger, .menu').removeClass('active');
// 		$('body').removeClass('lock');
// 	});

// 	$(document).ready(function(){
// 		$('.home__slider').slick({
// 			arrows:false,
// 			dots:true,
// 			slidesToShow:1,
// 		});
// 	});

// 	$(document).ready(function(){
// 		$('.our-menu__slider').slick({
// 			arrows:false,
// 			dots:true,
// 			slidesToShow:1,
// 			initialSlide:1,
// 			infinite: false
// 		});
// 	});
// });

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.header__burger').addEventListener('click', function(event) {
        document.querySelector('.header__burger').classList.toggle('active');
        document.querySelector('.menu').classList.toggle('active');
        document.querySelector('body').classList.toggle('lock');
        document.querySelector('.menu').classList.toggle('open');
    });

    var menuLinks = document.querySelectorAll('.menu__link');
    menuLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            document.querySelector('.header__burger').classList.remove('active');
            document.querySelector('.menu').classList.remove('active');
            document.querySelector('body').classList.remove('lock');
        });
    });

    document.addEventListener('DOMContentLoaded', function() {
        var homeSlider = document.querySelector('.home__slider');
        new window.slick(homeSlider, {
            arrows: false,
            dots: true,
            slidesToShow: 1
        });
    });

    document.addEventListener('DOMContentLoaded', function() {
        var ourMenuSlider = document.querySelector('.our-menu__slider');
        new window.slick(ourMenuSlider, {
            arrows: false,
            dots: true,
            slidesToShow: 1,
            initialSlide: 1,
            infinite: false
        });
    });
});


