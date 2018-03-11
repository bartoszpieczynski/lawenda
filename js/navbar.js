$(window).scroll(function(){
   var height = $("#navbar").height();
    if($(this).scrollTop() >= height) {
      $(".navbar").css({'display': 'none'});    
      $(".navbar-fixed").css({'opacity': '1', 'width': '100%'}); 
    } else {
      $(".navbar").css({'display': 'flex'});
      $(".navbar-fixed").css({'opacity': '0', 'width': '0'}); 
    }
});