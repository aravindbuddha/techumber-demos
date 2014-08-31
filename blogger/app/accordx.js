define(['jquery'], function ($) {

  return {
    accordx: function (b) {
      $(b + " .widget-content").hide();
      $(b + " h2:last").addClass("active").next().slideDown("slow");
      $(b + " h2").css("cursor", "pointer").click(function () {
        if ($(this).next().is(":hidden")) {
          $(b + " h2").removeClass("active").next().slideUp("slow");
          $(this).toggleClass("active").next().slideDown("slow")
        }
      });
    }
  };
});