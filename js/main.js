$(document).ready(function(){
      $('#contactPgLink').click(function(e){
            e.preventDefault();
            $('html, body').animate({
                scrollTop: $("#fourthPage").offset().top
            }, 1000);
      });
});
