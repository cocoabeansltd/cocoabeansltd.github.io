$(document).ready(function() {
	var n = '#nav', no = 'nav_menu_open';
	$('#nav_button').click(function() {
		if ($(n).hasClass(no)) {
			$(n).animate({height:0}, 300);
			setTimeout(function() {
				$(n).removeClass(no).removeAttr('style');
			}, 320);
		}
		else {
			var newH = $(n).css('height','auto').height();
			$(n).height(0).animate({height: newH}, 300);
			setTimeout(function() {
				$(n).addClass(no).removeAttr('style');
			}, 320);
		}
	});
	
	$('a[href^="#"]').on('click', function(e) {
	    e.preventDefault();
	    var target = this.hash;
	    $target = $(target);
	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});