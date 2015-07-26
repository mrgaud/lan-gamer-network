$(document).ready(function(){
    $("li").hover(function(){
        $(this).find('li').stop().slideToggle(400);
    });
});
$(document).ready(function() {
	$('.submit').click(function() {
		window.location.href='http://www.google.com'
	});
});

