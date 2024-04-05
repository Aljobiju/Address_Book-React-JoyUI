<?php
include_once 'connection.php'; 
include_once 'login.php';
require_once 'decodeJWT.php';
require_once 'generateJWT.php';
$endpoint = $_SERVER['PATH_INFO'];
$response = array();

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
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Read the raw request body
    $data = file_get_contents("php://input");
    // Decode JSON data
    $requestData = json_decode($data, true);

    if ($endpoint === '/login') {
        if (isset($requestData['email']) && isset($requestData['password'])) {
            $email = mysqli_real_escape_string($conn, $requestData['email']);
            $password = mysqli_real_escape_string($conn, $requestData['password']);

            $userLogin = new UserLogin($conn);
            $user = $userLogin->loginUser($email, $password);

            if ($user) {

                $secretKey = 'Dsfhbjnd&zxcvb123';
                $token = generateJwtToken(['user_id' => $user['id']], $secretKey,30000);

                $response['success'] = true;
                $response['message'] = "Login successful";
                $response['user'] = $user;
                $response['token'] = $token;



            } else {
                $response['success'] = false;
                $response['message'] = "Invalid email or password";
            }
        } else {
            $response['success'] = false;
            $response['message'] = "Email and password are required";
        }
    }
} else {
    $response['success'] = false;
    $response['message'] = "Invalid request method";
}

header('Content-Type: application/json');
echo json_encode($response);

?>
