$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    } // End if
  });
});

$(window).scroll(function(){
  var wScroll = $(this).scrollTop();
      if( wScroll > $('.work-content').offset().top - 600 ) {
        $('.work-content .thumbnail').each(function(i) {
          setTimeout(function() {
            $('.work-content .thumbnail').eq(i).addClass('muncul');
            $('.work-content .kanan').eq(i).addClass('kanan-go');

          }, 180 * (i+1))

        });
      }
});

$('.jumbotron .text-paralax').each(function(i) {
  setTimeout(function() {
    $('.jumbotron .text-paralax').eq(i).addClass('show');
  }, 180 * (i+1))

});

//ketika di scroll muncul icon scroll ke atas
  $(window).scroll(function () {
        var totalHeight = $(window).scrollTop();
        if (totalHeight > 400) {
            $(".scrolltotop").fadeIn();
        } else {
            $(".scrolltotop").fadeOut();
        }
    });

 //proses scroll
    $('a.scrolltotop').on('click', function (event) {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#home").offset().top
          }, 800);
    });

// VALIDASI FORM WITH ALERTIFY
    $(document).ready(function() {
        $('#contact-form').submit(function(e) {
          var name    = document.getElementById('name')
          var email   = document.getElementById('email')
          var message = document.getElementById('message')
          var terms   = document.getElementById('terms')

          if (!name.value || !email.value || !message.value || !terms) {
            alertify.error("Please check your entries");
            return false;
          } else {
            //
            // e.preventDefault();
            // $(this).get(0).reset();
            alertify.success("Success Submit!");
          }
        });
      });
