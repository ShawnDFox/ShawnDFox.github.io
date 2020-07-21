$(document).ready(function(){

    $.get('AboutMe.html').done(function(msg){
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
            $.get('AboutMe.html').done(function(msg){
                
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
            $.get('Education.html').done(function(msg){
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
            $.get('Experience.html').done(function(msg){
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
            $.get('Aptitude.html').done(function(msg){
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
            $.get('Languages.html').done(function(msg){
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
            $.get('Portfolio.html').done(function(msg){
                $("#content").html(msg);
                $("#content").fadeIn();
            });  
        });
        
    });
});