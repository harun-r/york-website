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
// feedback-slider
$("#feedback-slider").owlCarousel({
  loop: true,
  nav: true,
  dots: false,
  items: 1,
  animateOut: "fadeOut",
  mouseDrag: false,
  navText: [
    '<span class="material-icons">chevron_left</span>',
    '<span class="material-icons">chevron_right</span>'
  ]
});
// logo-slider
$("#logo-slider").owlCarousel({
  loop: true,
  margin: 30,
  dots: true,
  responsive: {
    0: {
      items: 3,
      margin: 5
    },
    991: {
      items: 4,
      margin: 10
    },
    1000: {
      items: 6
    }
  }
});
// core-slider
$("#core-slider").owlCarousel({
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
// yoksit-slider
$("#yoksit-slider").owlCarousel({
  loop: true,
  nav: true,
  dots: false,
  animateOut: "fadeOut",
  navText: [
    '<span class="material-icons">chevron_left</span>',
    '<span class="material-icons">chevron_right</span>'
  ],
  responsive: {
    0: {
      items: 1
    },
    991: {
      items: 1
    },
    1000: {
      items: 1
    }
  }
});
