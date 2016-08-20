$(document).ready(function() {
	/* Load page to current section 
		(or Home if none) */
	if (sessionStorage.getItem("section")) {
		var section = sessionStorage.getItem("section");
		$(".navbar-link").removeClass("active");
		$("#"+section).addClass("active");		
	} else {
		sessionStorage.setItem("section", $(".active").attr('id'));
	}
	
	/* Change active section when navbar clicked */
	$(".navbar-link").click(function() {
	    $(".navbar-link").removeClass("active");
        $(this).addClass("active");	  
		sessionStorage.setItem("section", $(".active").attr('id'));
    });    
	
	/* Change active section when scrolling */
	/* adapted from https://jsfiddle.net/cse_tushar/Dxtyu/141/ */
	$(document).on("scroll", function() {
		var scrollPos = $(document).scrollTop();
		$('#myNavbar li').each(function() {
			var curr = $(this);
			var currLink = $(this).find('a');
			var refElement = $(currLink.attr("href"));				
			if (refElement.position().top <= (scrollPos+0.5*refElement.height()) && refElement.position().top + 	refElement.height() > scrollPos) {
				$('.navbar-link').removeClass("active");
				curr.addClass("active");
				sessionStorage.setItem("section", $(".active").attr('id'));
			}
		});
	});
	
});




