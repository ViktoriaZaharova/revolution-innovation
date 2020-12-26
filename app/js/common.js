$('.btn-burger').click(function () {
  $('.mobile-menu').fadeToggle();
});

$('.btn-close').click(function () {
  $('.mobile-menu').fadeOut();
});

// активная ссылка меню
$('.menu li a').each(function () {
  var location = window.location.href;
  var link = this.href;
  if (location == link) {
      $(this).addClass('active');
  }
});
// end