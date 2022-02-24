// Mobile Nav
$(".show-nav").click(function () {
  $(".header-right").slideToggle(500);
  $(".mobile-icon").text() === "close"
    ? $(".mobile-icon").text("menu")
    : $(".mobile-icon").text("close");
  return false;
});

// Date Picker
$(".pick-up-date-time").datetimepicker();
$(".drop-of-date-time").datetimepicker();

// Hero Slider
$("#hero-slider").owlCarousel({
  loop: true,
  nav: false,
  dots: true,
  items: 1
});
// Hero Slider
$("#our-fleet-slider").owlCarousel({
  loop: true,
  margin: 30,
  nav: true,
  dots: false,
  navText: [
    '<span class="material-icons">chevron_left</span>',
    '<span class="material-icons">chevron_right</span>'
  ],
  responsive: {
    0: {
      items: 1,
      margin: 10
    },
    991: {
      items: 1,
      margin: 10
    },
    1000: {
      items: 3
    }
  }
});
// suggets-slider
$("#suggets-slider").owlCarousel({
  loop: true,
  margin: 15,
  nav: true,
  dots: false,
  navText: [
    '<span class="material-icons">chevron_left</span>',
    '<span class="material-icons">chevron_right</span>'
  ],
  responsive: {
    0: {
      items: 1,
      margin: 10
    },
    991: {
      items: 1,
      margin: 10
    },
    1000: {
      items: 4
    }
  }
});
// how-slider
$("#how-slider").owlCarousel({
  loop: true,
  margin: 15,
  nav: false,
  dots: true,
  items: 1
});
