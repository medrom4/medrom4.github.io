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

	initHeroHeight();
	initParallax();
	initSectionHighlight();
	initSearchArea();
	initPreloaderFade();
	initAnimateScroll();
	initNavMenu();
	initMagnificPopup();
	initWowAnimation();
	initMiscellaneous();
	initContactForm();
	initCarousel();
	initPortfolio();


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
			}, { offset: function() { return -$(this).height() + 230; } });
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

	/*  Magnific Popup Plugin --- */

	function initMagnificPopup() {
		$('.portrait-mfp').magnificPopup({
			type: 'image',
			gallery: {
				enabled: true
			}
		});

		$('.portfolio-mfp').magnificPopup({
			type: 'image',
			gallery: {
				enabled: true
			}
		});

		$(".video-mfp").magnificPopup({
			type: 'iframe',
			gallery: {
				enabled: true
			}
		});
	}


	/* --- Portfolio --- */

	function initPortfolio() {
		$('.portfolio-items').imagesLoaded(function() {
			$('.portfolio-items').show();
			$('.portfolio-items').isotope({
				filter: '*',
				layoutMode: 'masonry',
				animationOptions: {
					duration: 750,
					easing: 'easeOutBounce'
				}
			});
		});

		$('.filter').find('a').on('click', function() {
			$('.portfolio-items').isotope({
				filter: $(this).attr('data-filter'),
				animationOptions: {
					duration: 750,
					queue: false
				}
			});
			return false;
		});

		$('.filter a').on('click', function() {
			if (!$(this).hasClass('active')) {
				$('.filter a').removeClass('active');
				$(this).addClass('active');
			}
		});
	}


	/* --- Portfolio Resize --- */

	function initPortfolioResize() {
		$('.portfolio-items').isotope({
			filter: $('.filter').find('a.active').attr('data-filter'),
			animationOptions: {
				duration: 750,
				queue: false
			}
		});
		return false;
	}



	/* --- All Carousels --- */

	function initCarousel() {
		$('.skill-carousel').owlCarousel({
			pagination: false,
			navigation: false,
			autoPlay: true,
			slideSpeed: 500,
			items: 5,
			itemsDesktop: [991, 3],
			itemsDesktopSmall: [768, 3]
		});

		$('.reference-carousel').owlCarousel({
			pagination: true,
			navigation: false,
			autoPlay: true,
			slideSpeed: 500,
			items: 1
		});
	}


	/* --- Wow Animation --- */

	function initWowAnimation() {
		var wow = new WOW({
			boxClass: 'wow',
			animateClass: 'animated',
			offset: 150,
			mobile: false,
			live: true
		});
		wow.init();
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
