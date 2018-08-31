(function($) {
	'use-strict';

	/* ---------------------------------------------
	 Initializing Functions Triggered On Window Load
	 --------------------------------------------- */
	$(window).on('load', function() {
		initPreloaderFade();
	});


	/* ---------------------------------------------
	 Initializing Functions Triggered On Window Resize
	 --------------------------------------------- */
	$(window).on('resize', function() {
		initHeroHeight();
	});


	/* ---------------------------------------------
	 Initializing All Functions
	 --------------------------------------------- */
	initColorScheme();
	initHeroHeight();
	initParallax();
	initSectionHighlight();
	initPreloaderFade();



	/* ---------------------------------------------
	 Color Scheme Select
	 --------------------------------------------- */
	function initColorScheme() {
		$('.color-scheme-select-btn').on('click', function() {
			$('.color-scheme-select').toggleClass('color-scheme-select-visible');
		});

		$('.color-scheme-content').on('click', function() {
			var colorLink = 'css/' + $(this).attr('id') + '.css';
			$('#tile-colorscheme-css').attr('href', colorLink);
		});
	}


	/* ---------------------------------------------
	 Preloader Fadeout
	 --------------------------------------------- */
	function initPreloaderFade() {
		$('.preloader').fadeOut();
	}


	/* ---------------------------------------------
	 Section Highlighting
	 --------------------------------------------- */
	function initSectionHighlight() {
		$('section').each(function() {
			$(this).waypoint(function(direction) {
				if (direction === 'down') {
					var sec_id = $(this).attr('id');
					var current_section_link = '.' + sec_id + '-nav';
					$('.main-nav > ul > li > a').removeClass('active-nav');
					$(current_section_link).addClass('active-nav');
				}
			}, { offset: '130px' });
			$(this).waypoint(function(direction) {
				if (direction === 'up') {
					var sec_id = $(this).attr('id');
					var current_section_link = '.' + sec_id + '-nav';
					$('.main-nav > ul > li > a').removeClass('active-nav');
					$(current_section_link).addClass('active-nav');
				}
			}, { offset: function() { return -$(this).height() + 130; } });
		});
	}


	/* ---------------------------------------------
	 Hero Height
	 --------------------------------------------- */
	function initHeroHeight() {
		$('.hero-height').height($(window).height());
	}


	/* ---------------------------------------------
	 Parallax Background
	 --------------------------------------------- */
	function initParallax() {
		if (!device.tablet() && !device.mobile()) {
			$('.parallax-section').each(function() {
				$('.parallax-section').parallaxScroll("50%", 0.3);
			});
			$('.parallax-layer').parallax();
		}
	}


})(jQuery);
