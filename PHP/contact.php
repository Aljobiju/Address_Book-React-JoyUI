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
        $query = "SELECT * FROM contact";
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
        $userId = $data['userId'];
        $firstName = $data['firstName'];
        $lastName = $data['lastName'];
        $email = $data['email'];
        $phoneNumber = $data['phoneNumber'];
        $address = $data['address'];
        $countryId = $data['countryId'];
        $image = $data['image'];

        $query = "INSERT INTO contact (userId,firstName, lastName, email, phoneNumber, address, countryId, image,createdAt,updatedAt) 
                  VALUES ('$userId','$firstName', '$lastName', '$email', '$phoneNumber', '$address', '$countryId', '$image',NOW(),NOW())";
        $result = mysqli_query($this->conn, $query);
        if ($result) {
            return true;
        } else {
            return false;
        }
    }
    // public function updateContact($id, $data)
    // {
    //     $emp_name = $data['emp_name'];
    //     $emp_code = $data['emp_code'];
    //     $emp_email = $data['emp_email'];
    //     $emp_phone = $data['emp_phone'];
    //     $emp_address = $data['emp_address'];
    //     $emp_designation = $data['emp_designation'];
    //     $emp_joining_date = $data['emp_joining_date'];
    //     $query = "UPDATE employee SET emp_name = '$emp_name', emp_code = '$emp_code', emp_email = '$emp_email', emp_phone = '$emp_phone', emp_address = '$emp_address', emp_designation = '$emp_designation', emp_joining_date = '$emp_joining_date' WHERE id = $id";
    //     $result = mysqli_query($this->conn, $query);
    //     if ($result) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }
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