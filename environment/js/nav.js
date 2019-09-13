$('.mobile-toggle').click(function(){
  if($('#main-header').hasClass('open-nav')){
     $('#main-header').removeClass('open-nav');
  }else{
    $('#main-header').addClass('open-nav');
  }
});

/*******************************************NAV SCROLL*******************************************/
$('nav a').click(function(event) {
    var id = $(this).attr("href");
    var offset = 70;
    var target = $(id).offset().top - offset;
    $('html, body').animate({
        scrollTop: target
    }, 1000);
    event.preventDefault();
});