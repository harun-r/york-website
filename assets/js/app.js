// Mobile Nav
$(".show-nav").click(function(){
    $(".header-right").slideToggle(500);
    $(".mobile-icon").text() === 'close'
    ? $(".mobile-icon").text('menu')
    : $(".mobile-icon").text('close')
    return false;
});

// Hero Slider
$('#hero-slider').owlCarousel({
    loop:true,
    nav:false,
    dots:true,
    items:1
});
$(".pick-up-date-time").datetimepicker();
$(".drop-of-date-time").datetimepicker();