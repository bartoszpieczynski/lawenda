(function ready() {
  var interval = setInterval(function() {
    if (document.readyState === "complete") {
      if (document.readyState == "complete") {
        $("#loader").fadeOut(1000);
      }
      clearInterval(interval);
    }
  }, 2000);
})();
