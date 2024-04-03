    <?php
    class UserLogin
    {
        private $conn;
        public function __construct($conn)
        {
            $this->conn = $conn;
        }
        public function loginUser($email, $password)
        {
            $email = mysqli_real_escape_string($this->conn, $email);
            $password = mysqli_real_escape_string($this->conn, $password);
            $hashed_password = $password;
            error_log("Received email: " . $email);
            error_log("Received password: " . $password);
            $query = "SELECT id, email, name FROM user WHERE email = '$email' AND password = '$hashed_password'";
            $result = mysqli_query($this->conn, $query);
            if ($result && mysqli_num_rows($result) == 1) {
                $user = mysqli_fetch_assoc($result);
                return $user;
            } else {
                return null;
            }
        }
    }
    ?>
