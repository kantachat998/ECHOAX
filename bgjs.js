$(document).ready(function(){
	$('#search').click(function(){
		$('.nav-link').toggleClass('hide-item')
		$('.search-form').toggleClass('active')
	})

	$('#searchbtn').click(function(){
		$('.topic').addClass('hide-item')
		$('.search-topic').addClass('active')
	})

$("input:text").blur(function(e) {
        e.stopPropagation();
        $('.search-topic').removeClass('active');
        $('.topic').removeClass('hide-item');
    });
})