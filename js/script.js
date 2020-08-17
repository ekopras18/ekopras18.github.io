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
