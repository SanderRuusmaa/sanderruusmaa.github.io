$( document ).ready(function(){
    $(".preload").removeClass("fade");
    $('.preload').delay(1000).queue(function (next) { 
    $(this).hide(); 
    next(); 
  });
  })