<?php
require_once 'connection.php';
require_once 'signup.php';
$signupObj = new SignUp($conn);
$method = $_SERVER['REQUEST_METHOD'];
$endpoint = $_SERVER['PATH_INFO'];
header('Content-Type: application/json');
if (isset($_SERVER['HTTP_ORIGIN'])) {
    header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Max-Age: 86400');    
}
 
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
        header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
 
    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
        header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");
 
    exit(0);
}
switch ($method) {
    case 'POST':
        if ($endpoint === '/signup') {
         
            $data = json_decode(file_get_contents('php://input'), true);
            $email = $data['email'];
            $name = $data['name'];
            $password = $data['password'];
            $result = $signupObj->SignupUser($email, $name, $password);
           
            if ($result !== null) {
                 echo json_encode(['success' => $result]);
            } else {
                http_response_code(400);
                echo json_encode(["error" => "Email already exists"]);
            }
        }
        break;

}
