$(function() {

	var number;
	$.ajax({
		beforeSend: function(xhr) {
			if (xhr.overrideMimeType) {
				xhr.overrideMimeType("application/json");
			}
		}
	});

	//СОБИРАЕМ ДАННЫЕ ИЗ JSON-ФАЙЛА
	function loadTimetable() {
		$.getJSON('data/example.json')
			.done(function(data) {
				number = data;
			}).fail(function() {
				$('#event').html('Can not load information about education');
			});
	}

	loadTimetable();

	// КЛИК - ЗАГРУЖАЕМ ПЛАН МЕРОПРИЯТИЯ

	$('#content').on('click', '#event a', function(e) {

		e.preventDefault();
		var loc = this.id.toUpperCase();

		var newContent = '';
		for (var i = 0; i < number[loc].length; i++) {
			newContent += '<li><span class="num">' + number[loc][i].num + '</span>';
			newContent += '<a href="descriptions.html#';
			newContent += number[loc][i].title.replace(/ /g, '-').replace(/'/g, '') + '">';
			newContent += number[loc][i].title + '</a></li>';
		}

		$('#sessions').html('<ul>' + newContent + '</ul>');

		$('#event a.current').removeClass('current');
		$(this).addClass('current');

		$('#details').text('');
	});

	// КЛИК МЕРОПРИЯТИЕ - ЗАГРУЖАЕМ ЕГО ПЛАН

	$('#content').on('click', '#sessions li a', function(e) {
		e.preventDefault();
		var fragment = this.href;
		
		fragment = fragment.replace('#', ' #');
		$('#details').load(fragment);

		$('#sessions a.current').removeClass('current');
		$(this).addClass('current');
	});


	// КЛИК - ПЕРВАЯ НАВИГАЦИЯ

	$('nav a').on('click', function(e) {
		e.preventDefault();
		var url = this.href;

		$('nav a.current').removeClass('current');
		$(this).addClass('current');

		$('#container').remove("#delet-educ");
		$('#content').load(url + ' #container').appendChild();
	});

});
