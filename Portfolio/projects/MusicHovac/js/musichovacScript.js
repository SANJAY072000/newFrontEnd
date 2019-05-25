$(document).ready(function(){
    $(document).scroll(function(){
        $(".navbar").addClass("fixed-top newnav");$(".navbar-brand").addClass("animated infinite bounce");
      $(".navbar-brand").css({"background": "linear-gradient(#f12711,#f5af19)"});
    });
    $(".navbar-brand").mouseover(function(){
       $(".navbar-brand").css("background","mediumvioletred");  
    });
 });
