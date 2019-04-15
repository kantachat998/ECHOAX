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

function opentab(evt, status) {
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(status).style.display = "block";
  evt.currentTarget.className += " active";
}