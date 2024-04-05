<?php
 
require 'vendor/autoload.php';
use ReallySimpleJWT\Token;
 
function generateJwtToken($payloadCustomClaims,$secretKey,$expiration = 3600)
{
    $payload = [
        'iat' => time(),
        'exp' => time() + $expiration,
        'iss' => 'localhost'
    ];
 
    if (!empty($payload)) {
        $payload = array_merge($payload, $payloadCustomClaims);
    }
 
    $token = Token::customPayload($payload, $secretKey);
   
    return $token;
}
 
?>
 