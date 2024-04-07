    <?php
    class SignUp
    {
        private $conn;
        public function __construct($conn)
        {
            $this->conn = $conn;
        }
        public function SignupUser($email,$name, $password )
        {
            $email = mysqli_real_escape_string($this->conn, $email);
            $password = mysqli_real_escape_string($this->conn, $password);
            $name = mysqli_real_escape_string($this->conn, $name);
            $query_check_email = "SELECT id FROM user WHERE email = '$email'";
            $result_check_email = mysqli_query($this->conn, $query_check_email);
            if ($result_check_email && mysqli_num_rows($result_check_email) > 0) {
                return null;
            } else {
                $query_signup = "INSERT INTO user (email, name, password,createdAt,updatedAt) VALUES ('$email', '$name','$password', NOW(), NOW())";
                $result_signup = mysqli_query($this->conn, $query_signup);
                if ($result_signup) {
                    $user_id = mysqli_insert_id($this->conn);
                    $query_get_user = "SELECT id, email, name FROM user WHERE id = $user_id";
                    $result_get_user = mysqli_query($this->conn, $query_get_user);
                    if ($result_get_user && mysqli_num_rows($result_get_user) == 1) {
                        $user = mysqli_fetch_assoc($result_get_user);
                        return $user;
                    } else {
                        // Error retrieving user data after signup
                        return null;
                    }
                } else {
                    // Error in signup process
                    return null;
                }
            }
        }
        
    }
    ?>
