// title expand and opacity animation
$(function () {
  $(window).scroll(function () {
    $(".fading").css("opacity", 1 - $(window).scrollTop() / 350);

    if ($(window).width() >= 768) {
      let mass = Math.min(20, 1 + 0.02 * $(this).scrollTop());

      $(".expandable").css("transform", "scale(" + mass + ")");
    }
  });
});
