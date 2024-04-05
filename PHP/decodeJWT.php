<?php
require_once 'vendor/autoload.php';
use Firebase\JWT\JWT;
use Firebase\JWT\Key;
 
// $secret_key = 'Asdfg&zxcvb123';
 
function decodeJWT($headers, $secret_key)
{
    // $headers = apache_request_headers();
 
    if (isset($headers['Authorization'])){
      $auth_header = $headers['Authorization'];
      $headerValue = explode(' ', $auth_header);
      $jwt_token = $headerValue[1];
     
      try {
        $decodedToken = JWT::decode($jwt_token, new Key($secret_key, 'HS256'));
        $response = ["success" => true, "decodedToken" => $decodedToken, "message" => "Token decoded successfully"];
 
    }
    catch(Exception $error) {
        header("HTTP/1.1 500 Internal Server Error");
        $response = ["success" => false, "message" => $error->getMessage()] ;
 
    }
}
else {
    header("HTTP/1.1 400 Bad Request");
    $response = ["success" => false, "message" => "No token provided"] ;
 
}
return $response;
}
?>