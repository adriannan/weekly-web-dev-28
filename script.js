// $('.carousel').carousel();

function fixNav() {
        if(window.pageYOffset >= 557) {
            $('#navbar').removeClass('navbar-border');
        } else {
        	$('#navbar').addClass('navbar-border');
        };
        if(window.pageYOffset >= 20) {
            $('#navbar').addClass('navbar-md');
        } else {
        	$('#navbar').removeClass('navbar-md');
        };
};

$(window).on('scroll', fixNav);

$('.t-carousel .t-carousel-item').each(function(){
	  var next = $(this).next();
	  if (!next.length) {
	    next = $(this).siblings(':first');
	  }
	  next.children(':first-child').clone().appendTo($(this));
	});

$('#tho-carousel').carousel({
  // interval: 10000
})