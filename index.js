$(document).ready(function(){

    $("#hide").click(function(){
        $("p").hide(1000);
    });
    $("#show").click(function(){
        $("p").show(500);
    });
    $("#toggle").click(function(){
        $("p").toggle(500);
    })

    // fade example

    $("#fadein").click(function(){
        $("#fadeDiv").fadeIn(1000); //can use 'slow' instead of time(1000)
    });
    $("#fadeout").click(function(){
        $("#fadeDiv").fadeOut();
    });
    $("#fadeToggle").click(function(){
        $("#fadeDiv").fadeToggle('slow');
    });
    $("#fadeto").click(function(){
        $("#fadeDiv").fadeTo('slow',0.5);
    })

    // Slide Example

    $("#flip").click(function(){
        $("#panel").slideToggle(1000);    //slideUp() and SlideDown() are two other functions
    });
    // $("#flip").click(function(){
    //     $("#panel").slideUp();
    //   });

    // ANimation Example

    $("#startAnimation").click(function(){
        $("#boxAni").animate({left:'1200px'})
    });

    $("#multipleAnimation").click(function(){
        $("#boxAni2").animate({
            left:'250px',
            opacity:'0.5',
            height:'150px',
            width:'150px'
        })
    });

    $("#relativeAnimation").click(function(){
        $("#boxAni3").animate({
            left:'+=20px',
            height:'toggle'
        })
    });

    $("#queueAnimation").click(function(){
        var div = $("#boxAni4");
        div.animate({height: '300px', opacity: '0.4'}, "slow");
        div.animate({width: '300px', opacity: '0.8'}, "fast");
        div.animate({height: '100px', opacity: '0.4'}, "fast");
        div.animate({width: '100px', opacity: '0.8'}, "slow");
      });

    $(".stopAnimation").click(function(){
        $("div").stop();
    });


    // jQuery HTML

    $("#btn1").click(function(){
        alert('Text:'+$(".p1").text()) ; 
    });

    $("#btn2").click(function(){
        alert('Text:'+$(".p1").html()) ; 
    });

    $("#btn3").click(function(){
        alert('Text:'+$("#input").val()) ; 
    });


    // set

    $("#setTxtBtn").click(function(){
        $("#setP1").text("Text Changed");
    });

    $("#setHtmlBtn").click(function(){
        $("#setP2").html("<b>HTML Changed<b/>");
    });
    $("#setValBtn").click(function(){
        $("#setInput").val("Shubham Ingale");
    });
});