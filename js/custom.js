(function($) {
	'use-strict';

	/* --- Initializing Functions Triggered On Window Load --- */

	$(window).on('load', function() {
		initPreloaderFade();
	});


	/* --- Initializing Functions Triggered On Window Resize --- */

	$(window).on('resize', function() {
		initHeroHeight();
	});

	/* --- Initializing Functions Triggered On Window Scroll --- */
	$(window).on('scroll', function() {
		initHeaderAnimation();
		initSearchAreaHide();
	});


	/* --- Initializing All Functions --- */

	initColorScheme();
	initHeroHeight();
	initParallax();
	initSectionHighlight();
	initSearchArea();
	initPreloaderFade();
	initAnimateScroll();
	initNavMenu();
	initSectionHighlight();
	initMiscellaneous();



	/* --- Color Scheme Select --- */

	function initColorScheme() {
		$('.color-scheme-select-btn').on('click', function() {
			$('.color-scheme-select').toggleClass('color-scheme-select-visible');
		});

		$('.color-scheme-content').on('click', function() {
			var colorLink = 'css/' + $(this).attr('id') + '.css';
			$('#tile-colorscheme-css').attr('href', colorLink);
		});
	}


	/* --- Preloader Fadeout --- */

	function initPreloaderFade() {
		$('.preloader').fadeOut();
	}


	/* --- Section Highlighting --- */

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


	/* --- Hero Height --- */

	function initHeroHeight() {
		$('.hero-height').height($(window).height());
	}


	/* --- Parallax Background --- */

	function initParallax() {
		if (!device.tablet() && !device.mobile()) {
			$('.parallax-section').each(function() {
				$('.parallax-section').parallaxScroll("50%", 0.3);
			});
			$('.parallax-layer').parallax();
		}
	}

	/* --- Search Area --- */

	function initSearchArea() {
		$('.search-open').on('click', function() {
			if ($('.search-area').hasClass('search-area-hidden')) {
				$('.search-area').removeClass('search-area-hidden');
				$('.search-area').addClass('search-area-visible');
			}
		});

		$('html').on('click', function() {
			if ($('.search-area').hasClass('search-area-visible')) {
				$('.search-area').removeClass('search-area-visible');
				$('.search-area').addClass('search-area-hidden');
			}
		});

		$('.search-area, .search-open').on('click', function(e) {
			e.stopPropagation();
		});
	}


	/* --- Search Area Hide On Scroll --- */

	function initSearchAreaHide() {
		if ($(window).scrollTop() < 100) {
			if ($('.search-area').hasClass('search-area-visible')) {
				$('.search-area').removeClass('search-area-visible');
				$('.search-area').addClass('search-area-hidden');
			}
		}
	}


	/* --- Animate Scroll --- */

	function initAnimateScroll() {
		$('.animatescroll-link').on('click', function(e) {
			e.preventDefault();
		});
	}


	/* --- Navigation Menu --- */

	function initNavMenu() {
		$('.menu-bar').on('click', function() {
			if ($('.main-nav').hasClass('hidden')) {
				$('.main-nav').removeClass('hidden');
				$('.main-nav').addClass('active');
			}
		});

		$('.menu-close').on('click', function() {
			if ($('.main-nav').hasClass('active')) {
				$('.main-nav').removeClass('active');
				$('.main-nav').addClass('hidden');
			}
		});
	}

	/* --- Header Animation --- */

	function initHeaderAnimation() {
		var scroll_top = $(document).scrollTop();
		if (scroll_top >= 100) {
			$('.header').removeClass('header-hidden');
			$('.header').addClass('header-visible');
		}
		else {
			$('.header').removeClass('header-visible');
			$('.header').addClass('header-hidden');
		}
	}

	/* --- Section Highlighting --- */

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

	/* --- Miscellaneous --- */

	function initMiscellaneous() {
		$('.single-blog-navigation').children('a').addClass('btn-custom waves-effect');
		$('#wp-calendar').children('a').addClass('waves-effect waves-light');
		$('.pagination').children('.page-numbers').addClass('btn-circle waves-effect waves-light');
	}


})(jQuery);
