/**
 * Created by Asus on 25/07/2016.
 */

$(document).ready(function(){
    if($(document).width() < 768) {
        document.getElementById("logo").style.width = "100%";
        document.getElementById("content").style.width = "100%";
        document.getElementById("main").style.width = "100%";
        $("nav").removeClass("navbar navbar-fixed-top");
        $(window).on("scroll", function() {

        });
    }
    else{
        document.getElementById("content").style.marginTop = "20%";
        document.getElementById("content").style.width = "70%";
        document.getElementById("main").style.width = "50%";
        $("nav").addClass("navbar-fixed-top");
        $(window).on("scroll", function() {
        var s = 100 - Math.min(50, $(document).scrollTop());
        $("img").height(s);
        var n = 100 - Math.min(50, $(document).scrollTop());
        $("nav").height(n);
        });
    }
});



