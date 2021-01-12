// Ancor scroll function
$(document).ready(function() {

    // Angabe welcher Link mit entsprechender CSS Klasse für die Anker scroll
    // Funktion genutzt werden soll
    $('a.scroll').click(function(event) {
        event.preventDefault();

        var full_url = this.href;

        var parts = full_url.split('#');
        var trgt = parts[1];

        var target_offset = $('#' + trgt).offset();
        var target_top = target_offset.top;

        $('html, body').animate({
            scrollTop: target_top
        }, 1000);

    });
});

// Menu
function myFunction(x) {
    x.classList.toggle("change");
}

document.getElementById("slider2").addEventListener("click", displayDate);

function displayDate() {
    document.getElementById("headerwork2").setAttribute("class", "aktiv");
}

// Menu changing by scrolling
$(document).ready(function(){
  var scrollTop = 0;
  $(window).scroll(function(){
    scrollTop = $(window).scrollTop();
     $('.selektor').html(scrollTop);

    // nav changing color by scrolling
    if (scrollTop >= 1400) {
      $('.nav').addClass('scrolled-nav');
    } else if (scrollTop < 1400) {
      $('.nav').removeClass('scrolled-nav');
    }

    // main-naiv changing color by scrolling
    if (scrollTop >= 1400) {
      $('.main-nav').addClass('scrolled-main-nav');
    } else if (scrollTop < 1400) {
      $('.main-nav').removeClass('scrolled-main-nav');
    }

    // menu changing color by scrolling
    if (scrollTop >= 1400) {
      $('.menu').addClass('scrolled-menu');
    } else if (scrollTop < 1400) {
      $('.menu').removeClass('scrolled-menu');
    }

    // logo changing color by scrolling
    if (scrollTop >= 600) {
      $('.logo').addClass('scrolled h5');
    } else if (scrollTop < 600) {
      $('.logo').removeClass('scrolled h5');
    }

    // background non-transparent by scrolling
    if (scrollTop >= 1150) {
      $('.header').addClass('scrolled-header');
    } else if (scrollTop < 1150) {
      $('.header').removeClass('scrolled-header');
    }


  });

});
