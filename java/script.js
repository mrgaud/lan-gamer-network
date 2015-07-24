$(document).ready(function() {
	console.log('test')
	('li').click(function() {
		(this).find('ul > li').slideToggle(200);
	})
});