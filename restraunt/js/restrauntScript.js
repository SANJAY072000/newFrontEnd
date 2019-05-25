//navbar jquery
$(()=>{
    $(".navbar-brand").mouseover(()=>{
        $(".navbar-brand").css({"background": "linear-gradient(to right,#ff6a00,#ee0979)",
                "-webkit-background-clip":"text",
                "color": "transparent"});
    });
    $(".navbar-brand").mouseout(()=>{
        $(".navbar-brand").css({"background": "linear-gradient(#ee0979,#ff6a00)",
                "-webkit-background-clip":"text",
                "color": "transparent"});
    });
    
    
//    gallery jquery
    $(".im1").mouseover(()=>{
        $(".im1").css({"opacity":"0.4"});
    });
     $(".im1").mouseout(()=>{
        $(".im1").css({"opacity":"1"});
    });
    $(".im2").mouseover(()=>{
        $(".im2").css({"opacity":"0.4"});
    });
     $(".im2").mouseout(()=>{
        $(".im2").css({"opacity":"1"});
    });
    $(".im3").mouseover(()=>{
        $(".im3").css({"opacity":"0.4"});
    });
     $(".im3").mouseout(()=>{
        $(".im3").css({"opacity":"1"});
    });
    $(".im4").mouseover(()=>{
        $(".im4").css({"opacity":"0.4"});
    });
     $(".im4").mouseout(()=>{
        $(".im4").css({"opacity":"1"});
    });
    $(".im5").mouseover(()=>{
        $(".im5").css({"opacity":"0.4"});
    });
     $(".im5").mouseout(()=>{
        $(".im5").css({"opacity":"1"});
    });
    $(".im6").mouseover(()=>{
        $(".im6").css({"opacity":"0.4"});
    });
     $(".im6").mouseout(()=>{
        $(".im6").css({"opacity":"1"});
    });
    $(".im7").mouseover(()=>{
        $(".im7").css({"opacity":"0.4"});
    });
     $(".im7").mouseout(()=>{
        $(".im7").css({"opacity":"1"});
    });
    $(".im8").mouseover(()=>{
        $(".im8").css({"opacity":"0.4"});
    });
     $(".im8").mouseout(()=>{
        $(".im8").css({"opacity":"1"});
    });
    $(".im9").mouseover(()=>{
        $(".im9").css({"opacity":"0.4"});
    });
     $(".im9").mouseout(()=>{
        $(".im9").css({"opacity":"1"});
    });
    
    
//    switching gallery jquery
    $(".fd").click(()=>{
        $(".fd").addClass("active");
        $(".ap").removeClass("active");
        $(".rn").removeClass("active");
        $(".ds").removeClass("active"); 
    });
    $(".rn").click(()=>{
        $(".rn").addClass("active");
        $(".ap").removeClass("active");
        $(".fd").removeClass("active");
        $(".ds").removeClass("active");
    });
    $(".ap").click(()=>{
        $(".ap").addClass("active");
        $(".rn").removeClass("active");
        $(".fd").removeClass("active");
        $(".ds").removeClass("active");
    });
    $(".ds").click(()=>{
        $(".ds").addClass("active");
        $(".ap").removeClass("active");
        $(".fd").removeClass("active");
        $(".rn").removeClass("active");
    });   
});