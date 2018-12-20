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
        $("#boxAni").animate({left:'250px'})
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


});