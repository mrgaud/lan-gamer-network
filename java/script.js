$(document).ready(function(){
    $("li").hover(function(){
        $(this).find('li').stop().slideToggle(400);
    });
});