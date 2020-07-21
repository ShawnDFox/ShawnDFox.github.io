$(document).ready(function(){

    $.post('AboutMe.html').done(function(msg){
        $("#content").html(msg);
    });

    $("#me").click(function(event){
        event.preventDefault();
        
        $("#me").addClass("current_page");
        $("#education").removeClass("current_page");
        $("#experience").removeClass("current_page");
        $("#aptitude").removeClass("current_page");
        $("#languages").removeClass("current_page");
        $("#portfolio").removeClass("current_page");

        $("#content").fadeOut("default",function(){
            $.post('AboutMe.html').done(function(msg){
                
                $("#content").html(msg);
                $("#content").fadeIn();
            }); 
        });
        
    });
    $("#education").click(function(event){
        event.preventDefault();

        $("#me").removeClass("current_page");
        $("#education").addClass("current_page");
        $("#experience").removeClass("current_page");
        $("#aptitude").removeClass("current_page");
        $("#languages").removeClass("current_page");
        $("#portfolio").removeClass("current_page");

        $("#content").fadeOut("default",function(){
            $.post('Education.html').done(function(msg){
                $("#content").html(msg);
                $("#content").fadeIn();
            });   
        });
        
    });
    $("#experience").click(function(event){
        event.preventDefault();

        $("#me").removeClass("current_page");
        $("#education").removeClass("current_page");
        $("#experience").addClass("current_page");
        $("#aptitude").removeClass("current_page");
        $("#languages").removeClass("current_page");
        $("#portfolio").removeClass("current_page");

        $("#content").fadeOut("default",function(){
            $.post('Experience.html').done(function(msg){
                $("#content").html(msg);
                $("#content").fadeIn();
            });  
        });
        
    });
    $("#aptitude").click(function(event){
        event.preventDefault();

        $("#me").removeClass("current_page");
        $("#education").removeClass("current_page");
        $("#experience").removeClass("current_page");
        $("#aptitude").addClass("current_page");
        $("#languages").removeClass("current_page");
        $("#portfolio").removeClass("current_page");

        $("#content").fadeOut("default",function()
        {
            $.post('Aptitude.html').done(function(msg){
                $("#content").html(msg);
                $("#content").fadeIn();
            }); 
        });
        
    });
    $("#languages").click(function(event){
        event.preventDefault();

        $("#me").removeClass("current_page");
        $("#education").removeClass("current_page");
        $("#experience").removeClass("current_page");
        $("#aptitude").removeClass("current_page");
        $("#languages").addClass("current_page");
        $("#portfolio").removeClass("current_page");

        $("#content").fadeOut("default",function()
        {
            $.post('languages.html').done(function(msg){
                $("#content").html(msg);
                $("#content").fadeIn("fast");
            }); 
        });
        
       
    });
    $("#portfolio").click(function(event){
        event.preventDefault();

        $("#me").removeClass("current_page");
        $("#education").removeClass("current_page");
        $("#experience").removeClass("current_page");
        $("#aptitude").removeClass("current_page");
        $("#languages").removeClass("current_page");
        $("#portfolio").addClass("current_page");

        $("#content").fadeOut("default",function(){
            $.post('Portfolio.html').done(function(msg){
                $("#content").html(msg);
                $("#content").fadeIn();
            });  
        });
        
    });
});