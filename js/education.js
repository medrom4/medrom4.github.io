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

	// ПО ЩЕЛЧКУ- ЗАГРУЖАЕМ ПЛАН МЕРОПРИЯТИЯ
	
	$('#content').on('click', '#event a', function(e) {

		e.preventDefault();
		var loc = this.id.toUpperCase();

		var newContent = ''; // Формируем таблицу с планом мероприятия
		for (var i = 0; i < number[loc].length; i++) { // перебирая мероприятия
			newContent += '<li><span class="num">' + number[loc][i].num + '</span>';
			newContent += '<a href="descriptions.html#';
			newContent += number[loc][i].title.replace(/ /g, '-') + '">';
			newContent += number[loc][i].title + '</a></li>';
		}

		$('#sessions').html('<ul>' + newContent + '</ul>'); // Выводим время на странице

		$('#event a.current').removeClass('current'); // Обновляем выбранный элемент
		$(this).addClass('current');

		$('#details').text(''); // Очищаем третью колонку
	});

	// ПО ЩЕЛЧКУ МЕРОПРИЯТИя - ЗАГРУЖАЕМ ЕГО ПЛАН
	
	$('#content').on('click', '#sessions li a', function(e) {
		e.preventDefault();
		var fragment = this.href;

		fragment = fragment.replace('#', ' #');
		$('#details').load(fragment);

		$('#sessions a.current').removeClass('current');
		$(this).addClass('current');
	});


	// ЩЕЛЧОК - ПЕРВАЯ НАВИГАЦИЯ
	
	$('nav a').on('click', function(e) {
		e.preventDefault();
		var url = this.href;

		$('nav a.current').removeClass('current');
		$(this).addClass('current');

		$('#container').remove("#delet-educ");
		$('#content').load(url + ' #container').appendChild();
	});

});