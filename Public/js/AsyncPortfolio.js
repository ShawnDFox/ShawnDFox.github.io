$(document).ready(function(){

    
    $.post("Animedia.html").done(function(msg){
       
        $("#p_content").html(msg);
        $("#link-01").focus();
    });

    $("[id^=link-]").click(function(event){
        event.preventDefault();
       
        $.post(this.href).done(function(msg){
            $("#p_content").html(msg);
        });
    });

});