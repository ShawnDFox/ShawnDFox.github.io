$(document).ready(function(){

    $.get('AboutMe.html').done(function(msg){
        $("#content").html(msg);
    });
    $("#links a").click(function(){
        let content = $(this).html();
        console.log(SidenavWidth());
        if(SidenavWidth() > 50)
        {
           $("#links").css("display","none");
        }
        $("#Title").html(content);
        

        //console.log(content);
    });
    $("#links a").click(function(event){
        event.preventDefault();
        
        $("#me").removeClass("current_page");
        $("#education").removeClass("current_page");
        $("#experience").removeClass("current_page");
        $("#aptitude").removeClass("current_page");
        $("#languages").removeClass("current_page");
        $("#portfolio").removeClass("current_page");

        $(this).parent().addClass("current_page");

        let page ="";
        
        switch($(this).parent().attr("id"))
        {
            case "me":page = "AboutMe.html";
            break;
            case "education":page = "Education.html";
            break;
            case "experience":page = "Experience.html";
            break;
            case "aptitude":page = "Aptitude.html";
            break;
            case "languages":page = "Languages.html";
            break;
            case "portfolio":page = "Portfolio.html";
            break;
        }
        

        $("#content").fadeOut("default",function(){
            $.get(page).done(function(msg){
                
                $("#content").html(msg);
                $("#content").fadeIn();
            }); 
        });
        
    });
    
    $("#bars").click(function(){
        $("#links").css("display") == "none" ? $("#links").css("display","block") : $("#links").css("display","none");
    });

    $(window).resize(function(){
        console.log(SidenavWidth());
        //$("#links").css("width") == "100%" 
        SidenavWidth() > 50 ? $("#links").css("display","none") : $("#links").css("display","block");
    });

    function SidenavWidth()
    {
        var W = $(".sidebar").width() / $(".sidebar").parent().width() *100;
        return W;
    }
});