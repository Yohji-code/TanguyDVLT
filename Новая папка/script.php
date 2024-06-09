<?php
$servername = "localhost";
$username = "username";
$password = "password";
$dbname = "myDB";

// Создаем соединение
$conn = new mysqli($servername, $username, $password, $dbname);

// Проверяем соединение
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Получаем данные из запроса
$data = $_POST['data'];

// Подготавливаем и выполняем запрос к базе данных
$stmt = $conn->prepare("INSERT INTO MyTable (data_column) VALUES (?)");
$stmt->bind_param("s", $data);
$stmt->execute();

echo "New record created successfully";

$stmt->close();
$conn->close();
?>