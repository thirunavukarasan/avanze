function aos_init() {
    console.log("test")
    AOS.init({
      duration: 1000,
      once: true
    });
  }
  $(window).on('load', function() {
    aos_init();
  });


$('.nav-link').click(function() {
    $('.navbar-toggler').click()
})