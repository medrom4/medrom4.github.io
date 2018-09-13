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
	// initContactForm();



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

	/*--- Contact Form --- */

	function initContactForm() {
		var receiver = $('#c-form').attr('data-email-address');

		var invalid_fields = [];

		function validateEmail(email) {
			var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			return regex.test(email.toLowerCase());
		}

		$("#c-form").on('submit', function(e) {
			e.preventDefault();

			$('#c-form-spinner').addClass('active');

			var name = $("#name").val();
			var email = $("#email").val();
			var subject = $("#subject").val();
			var message = $("#message").val();

			if (name.length < 3) {
				invalid_fields.push('#name');
			}
			else {
				var name_index = invalid_fields.indexOf('#name');
				if (name_index > -1) {
					invalid_fields.splice(name_index);
				}
			}
			if (email == '' || validateEmail(email) == false) {
				invalid_fields.push('#email');
			}
			else {
				var email_index = invalid_fields.indexOf('#email');
				if (email_index > -1) {
					invalid_fields.splice(email_index);
				}
			}
			if (subject.length < 3) {
				invalid_fields.push('#subject');
			}
			else {
				var subject_index = invalid_fields.indexOf('#subject');
				if (subject_index > -1) {
					invalid_fields.splice(subject_index);
				}
			}
			if (message.length < 3) {
				invalid_fields.push('#message');
			}
			else {
				var message_index = invalid_fields.indexOf('#message');
				if (message_index > -1) {
					invalid_fields.splice(message_index);
				}
			}

			if (invalid_fields.length > 0) {
				$('.c-form-input').removeClass('invalid-field');
				for (var i = 0; i < invalid_fields.length; i++) {
					$(invalid_fields[i]).addClass('invalid-field');
				}
				$('.c-form-alert').addClass('active');
				$('.alert-attention').addClass('active');
			}
			else {
				$.ajax({
					type: "POST",
					url: "cf-process.php",
					data: {
						'name': name,
						'email': email,
						'message': message,
						'subject': subject,
						'receiver': receiver
					},
					success: function(text) {
						if (text === 'success') {
							$('.c-form-alert').addClass('active');
							$('.alert-success').addClass('active');
							$('#c-form')[0].reset();
							$('.c-form-input').removeClass('invalid-field');
						}
						else {
							$('.c-form-alert').addClass('active');
							$('.alert-error').addClass('active');
						}
					}
				});
			}
		});

		$('.alert-close a').on('click', function() {
			$('.alert-content').removeClass('active');
			$('.c-form-alert').removeClass('active');
			$('#c-form-spinner').removeClass('active');
		});
	}

})(jQuery);
