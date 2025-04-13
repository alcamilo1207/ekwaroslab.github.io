$(function() {
 /* $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		if(this.hash.slice(1) == "top") {
			target = $("body");
		}
	  if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - 200
        }, 1000);
        return false;
      }
    }
  });
  if(location.hash) {
	var target = location.hash;  
	  target = target.toString().replace(/\./g, '\\.'); // added support for periods (.) in hash
	  target = $(target);
	 if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - 200
        }, 1000);
        return false;
      }
  } */
//	$('.l-main-pagecontent').on('click','a[href*="#"]:not([href="#"])',function() {
	$('a[href*="#"]:not([href="#"])').on('click',function() {
		target = $('[name=' + $(this).attr('href').slice(1) +']');
		target = target.length > 0 ? target : $('[id=' + $(this).attr('href').slice(1) +']');
		//console.log("hash click9");
		if (target.length) {
			$('html, body').animate({
				scrollTop: target.offset().top - 200
			}, 1000);
			target.attr("tabindex","0");
			target.focus();

			return false;
		}
	});
	
	
	
});
