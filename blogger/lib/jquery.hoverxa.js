hoverxa:function() {
  $(".post").hover(function () {
    $(".jump-link", this).animate({
      opacity: 1,
      bottom: 0
    }, 500)
  }, function () {
    $(".jump-link", this).animate({
      opacity: 0,
      bottom: -25
    }, 700)
  });
  $("a").hover(function () {
    $("img", this).animate({
      opacity: 0.5
    }, 500)
  }, function () {
    $("img", this).animate({
      opacity: 1
    }, 300)
  })
}