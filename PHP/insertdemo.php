<?php
include 'connection.php';

// Check if the request method is POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Include the database connection file
    include 'connection.php';

    // Check if the endpoint is 'demo'
    $endpoint = basename($_SERVER['PHP_SELF'], ".php");
    if ($endpoint !== 'demo') {
        http_response_code(404);
        echo json_encode(array("message" => "Endpoint not found"));
        exit;
    }

    // Retrieve POST data
    $name = "aljo";
    $email = "aljo@gmail.com";
    $age = 30;

    // SQL query to insert data into the demo table
    $sql = "INSERT INTO demo (name, email, age) VALUES ('$name', '$email', '$age')";

    if ($conn->query($sql) === TRUE) {
        // If insertion is successful, send a success response
        http_response_code(201);
        echo json_encode(array("message" => "User created successfully"));
    } else {
        // If an error occurred during insertion, send an error response
        http_response_code(500);
        echo json_encode(array("message" => "Error: " . $conn->error));
    }

    // Close the database connection
    $conn->close();
} else {
    // If the request method is not POST, send a 405 Method Not Allowed response
    http_response_code(405);
    echo json_encode(array("message" => "Method Not Allowed"));
}
?>
