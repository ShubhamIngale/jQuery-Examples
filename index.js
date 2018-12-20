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
        $("#panel").slideDown();
    });
    $("#flip").click(function(){
        $("#panel").slideUp();
      });

});