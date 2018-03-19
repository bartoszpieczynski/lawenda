$( document ).ready(function(){
$(".fade-img").on("click", function() {
  var mainSrc = $("#big-img").attr("src");
  var smallSrc = $(this).attr("src");
  var smallId = $(this).attr("id");

  $("#big-img").fadeOut(1000);
  $(this).fadeOut(1000);
  setTimeout(function() {
    $("#big-img")
      .attr("src", smallSrc)
      .fadeIn(1000);
    $("#" + smallId)
      .attr("src", mainSrc)
      .fadeIn(1000);
  }, 1000);
});
});
