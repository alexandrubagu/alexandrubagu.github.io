$(document).ready(function () {
  $('body').scrollspy({
    target: '.navbar-custom',
    offset: 60
  });

  $(document).on('click', '.navbar-collapse.in', function (e) {
    if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
      $(this).collapse('hide');
    }
  });

  $('a[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

  var navbar = $('.navbar');
  var navHeight = navbar.height();
  $(window).scroll(function () {
    if ($(this).scrollTop() >= navHeight) {
      navbar.addClass('navbar-color');
    }
    else {
      navbar.removeClass('navbar-color');
    }
  });

  if ($(window).width() <= 767) {
    navbar.addClass('custom-collapse');
  }

  $(window).resize(function () {
    if ($(this).width() <= 767) {
      navbar.addClass('custom-collapse');
    }
    else {
      navbar.removeClass('custom-collapse');
    }
  });

  wow = new WOW({
    mobile: false
  });
  wow.init();

  $(function () {
    $('.chart').easyPieChart({
      easing: 'easeOutBounce',
      onStep: function (from, to, percent) {
        $(this.el).find('.percent').text(Math.round(percent));
      }
    });
    var chart = window.chart = $('.chart').data('easyPieChart');
    $('.js_update').on('click', function () {
      chart.update(Math.random() * 200 - 100);
    });
  });

  var $back_to_top = $('.back-to-top');
  if ($back_to_top.length) {
    var offset = 100;
    var speed = 250;
    var duration = 500;
    if ($(window).scrollTop() < offset) {
      $back_to_top.removeClass("active");
    } else {
      $back_to_top.addClass("active");
    }
    $(window).scroll(function () {
      if ($(this).scrollTop() < offset) {
        $back_to_top.removeClass("active");
      } else {
        $back_to_top.addClass("active");
      }
    });
    $back_to_top.on('click', function () {
      $('html, body').animate({ scrollTop: 0 }, speed);
      return false;
    });
  }
});
