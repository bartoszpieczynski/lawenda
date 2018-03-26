$(document).ready(function() {

  $("a").on("click", function(event) {

    if (this.hash !== "") {

      event.preventDefault();

      var hash = this.hash;
      var windowHeight = $(window).height();
      var elHeight = $(hash).height();

      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top - ((windowHeight / 2) - (elHeight / 2))
        },
        1000, 'swing');
    }
  });
});
