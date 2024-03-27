<?php
$servername = "localhost";
$username = "root";
$password = "Visualisation@123";
$database = "address_book";

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

echo "Connected successfully";
?>
