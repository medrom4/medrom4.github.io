// <?php 
// /*
// Форма обратной связи может получать сообщения с любых почтовых ящиков.
// Исправлена проблема кодировки при получении писем почтовым клиентом Outlook.
// Вы скачали её с сайта Epic Blog https://epicblog.net Заходите на сайт снова!
// ВНИМАНИЕ! Лучше всего в переменную myemail прописать почту домена, который использует сайт. А не mail.ru, gmail и тд.
// */
// if(isset($_POST['submit'])){
// /* Устанавливаем e-mail Кому и от Кого будут приходить письма */    
// 	$to = "medikroma@gmail.com"; // Здесь нужно написать e-mail, куда будут приходить письма	
//     $from = "alekseiramanovich@gmail.com"; // Здесь нужно написать e-mail, от кого будут приходить письма, например no-reply@epicblog.net

// /* Указываем переменные, в которые будет записываться информация с формы */
// 	$first_name = $_POST['name'];
// 	$email = $_POST['email'];
// 	$subject = $_POST['subject'];
// 	$message = $_POST['message'];
	
// /* Проверка правильного написания e-mail адреса */
// if (!preg_match("/([\w\-]+\@[\w\-]+\.[\w\-]+)/", $email))
// {
// show_error("<br /> Е-mail адрес не существует");
// }
	
// /* Переменная, которая будет отправлена на почту со значениями, вводимых в поля */
// $mail_to_myemail = "Здравствуйте! 
// Было отправлено сообщение с сайта! 
// Имя отправителя: $first_name 
// E-mail: $email 
// Номер телефона: $subject 
// Текст сообщения: $message 
// Чтобы ответить на письмо, создайте новое сообщение, скопируйте электронный адрес и вставьте в поле Кому.";	
	
// $headers = "From: $from \r\n";
	
// /* Отправка сообщения, с помощью функции mail() */
//     mail($to, $subject, $mail_to_myemail, $headers . 'Content-type: text/plain; charset=utf-8');
//     echo "Сообщение отправлено. Спасибо Вам " . $first_name . ", мы скоро свяжемся с Вами.";
// 	echo "<br /><br /><a href='https://medrom4.github.io/'>Вернуться на сайт.</a>";
// }
// ?>
// <!--Переадресация на главную страницу сайта, через 3 секунды-->
// <script language="JavaScript" type="text/javascript">
// function changeurl(){eval(self.location="https://medrom4.github.io/");}
// window.setTimeout("changeurl();",3000);
// </script>


<?php
//проверяем, существуют ли переменные в массиве POST
if(!isset($_POST['name']) and !isset($_POST['email'])){
?>
<?php
} else {
//показываем форму
$name = $_POST['name'];
$email = $_POST['email'];
$name = htmlspecialchars(name);
$email = htmlspecialchars($email);
$name = urldecode(name);
$email = urldecode($email);
$name = trim(name);
$email = trim($email);
if (mail("medikroma@gmail.com", "Заявка с сайта", "ФИО:".$name.". E-mail: ".$email ,"From: alekseiramanovich@gmail.com \r\n")){ 
	echo "Сообщение успешно отправлено"; 
} else { 
	echo "При отправке сообщения возникли ошибки";
	}
}
?>