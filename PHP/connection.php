<?php
$servername = "localhost";
$username = "root";
$password = "Visualisation@123";
$database = "address_book";

$conn = new mysqli($servername, $username, $password, $database);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
