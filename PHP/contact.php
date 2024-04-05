<?php
class Contact
{
    private $conn;
    public function __construct($conn)
    {
        $this->conn = $conn;
    }
    public function getAllContacts()
    {
        $query = "SELECT * from contact";
        $result = mysqli_query($this->conn, $query);
        $contacts = [];
        while ($row = mysqli_fetch_assoc($result)) {
            $contacts[] = $row;
        }
        return $contacts;
    }
    public function getContactById($id)
    {
        $query = "SELECT * FROM contact WHERE id = $id";
        $result = mysqli_query($this->conn, $query);
        $contact = mysqli_fetch_assoc($result);
        return $contact;
    }
    public function addContact($data)
{
    // Extract data from the request
    $userId = $data['userId'];
    $firstName = $data['firstName'];
    $lastName = $data['lastName'];
    $email = $data['email'];
    $phoneNumber = $data['phone'];
    $address = $data['address'];
    $country_name = $data['selectedCountry'];
    $image = $data['image'];

    $query = "INSERT INTO contact (userId, firstName, lastName, email, phoneNumber, address, country_name, image, createdAt, updatedAt) 
              VALUES ('$userId', '$firstName', '$lastName', '$email', '$phoneNumber', '$address', '$country_name', '$image', NOW(), NOW())";

 
    $result = mysqli_query($this->conn, $query);

   
    if (!$result) {
       
        error_log("Error: " . mysqli_error($this->conn));
        return false;
    }

    return true;
}

    public function updateContact($data)
    {
        $id=$data['id'];
        $userId = $data['userId'];
        $firstName = $data['firstName'];
        $lastName = $data['lastName'];
        $email = $data['email'];
        $phoneNumber = $data['phone'];
        $address = $data['address'];
        $country_name = $data['selectedCountry'];
        $image = $data['image'];
        
        $query = "UPDATE contact SET userId = '$userId', firstName = '$firstName', lastName = '$lastName', email = '$email', phoneNumber = '$phoneNumber', address = '$address', country_name = '$country_name',image='$image',createdAt=NOW(),updatedAt=NOW() WHERE id = $id";
        $result = mysqli_query($this->conn, $query);
        if ($result) {
            return true;
        } else {
            return false;
        }
    }
    public function deleteContact($id)
    {
        $query = "DELETE FROM contact WHERE id = $id";
        $result = mysqli_query($this->conn, $query);
        if ($result) {
            return true;
        } else {
            return false;
        }
    }
}
?>