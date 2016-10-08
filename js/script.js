

$(function() {

  //Start Carousel

  $('.carousel').carousel({
  interval: 3000
})

  //Navbar Dropdown

  $('.navbar-dropdown i').click(function() {

    $('.dropdown-content').toggle();

  });

  //Navbar

  $(window).scroll(function() {

    $('header .color .scroll').css('display', 'block');
    $('header .color nav:first-of-type').css('display', 'none');

    if ($(this).scrollTop() === 0) {
      $('header .color .scroll').css('display', 'none');
      $('header .color nav:first-of-type').css('display', 'block');
    } else {
      $('header .color .scroll').css('display', 'block');
      $('header .color nav:first-of-type').css('display', 'none');
    }

  });

  //Sign Up Popup

  $('.model').click(function() {

    $('.popup').css("display", "block");

    $('.popup .overlay i').click(function() {

      $('.popup').css("display", "none");

    });

  });



  //Smooth scrolling to Div

  $('header .color nav ul li a, header .color .scroll ul li a, .dropdown-content ul li a').click(function() {

    $('html, body').animate({

      scrollTop: $('#' + $(this).data('value')).offset().top

    }, 1000);

  });


});
