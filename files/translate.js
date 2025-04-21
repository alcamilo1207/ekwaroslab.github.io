	$(function() {
		$(".university--head__nav").append('<a href="#translate" class="ttu-translate-trigger">Translate</a>');
		$(".ttu-header-buttons").append('<li><a href="#translate" class="ttu-translate-trigger mobile-translate">Translate</a></li>');
		$("body").prepend('<div id="translateWrapper" data-silktide="ignore"><div id="google_translate_element"></div><a href="https://www.ttu.edu/policy/translation.php">Disclaimer &raquo;</a><a id="wrapClose" href="#">[close]</a></div>');
		
		$(".ttu-translate-trigger").on("click tap touch",function(e){
			e.preventDefault();
			$("#translateWrapper").fadeIn();
		});
		$('body').on('change', '#google_translate_element select', hideWrapper);
		$('body').on('click tap touch', '#wrapClose', hideWrapper);
	});
	function hideWrapper(e) {
		e.preventDefault();
		$("#translateWrapper").fadeOut();
	}