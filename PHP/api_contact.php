<?php
require_once 'connection.php';
require_once 'Contact.php';
$contactObj = new Contact($conn);
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
    case 'GET':
        if ($endpoint === '/contacts') {
            
            $contacts = $contactObj->getAllContacts();
            echo json_encode($contacts);
        } elseif (preg_match('/^\/contacts\/(\d+)$/', $endpoint, $matches)) {
          
            $contactId = $matches[1];
            $contact = $contactObj->getContactById($contactId);
            echo json_encode($contact);
        }
        break;
    case 'POST':
        if ($endpoint === '/contacts') {
         
            $data = json_decode(file_get_contents('php://input'), true);
            $result = $contactObj->addContact($data);
            echo json_encode(['success' => $result]);
        }
        break;
    case 'PUT':
        if ($endpoint === '/updatecontact') {
            $data = json_decode(file_get_contents("php://input"), true);
            // if ( isset($data['data'])) {
                // $id = $requestData['id'];
                // $data = $requestData['data'];
                
                $result = $contactObj->updateContact($data);
                if ($result) {
                    echo json_encode(['success' => true]);
                } else {
                    echo json_encode(['error' => 'Failed to update contact']);
                }
            // } else {
            //     echo json_encode(['error' => 'ID or data not provided']);
            // }
        }
    case 'DELETE':
        if ($endpoint === '/contacts') {
            $requestData = json_decode(file_get_contents("php://input"), true);
            if (isset($requestData['id'])) {
                $contactId = $requestData['id'];
                $result = $contactObj->deleteContact($contactId);
                echo json_encode(['success' => $result]);
            } else {
                echo json_encode(['error' => 'ID not provided']);
            }
        }
        break;
    }    
?>