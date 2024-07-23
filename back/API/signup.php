<?php
session_start();

require("./connection.php");

if ($_SERVER['REQUEST_METHOD'] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];
    $email = $_POST['email'];
    $firstName = $_POST['firstName'];
    $lastName = $_POST['lastName'];

        $stmt = $conn->prepare("INSERT INTO users (username, password, email, firstName, lastName) VALUES (?,?,?,?,?)");
        $stmt->bind_param('sssss',
            $username,
            $password,
            $email,
            $firstName,
            $lastName
        );
        
        $stmt->execute();
        die;
    } else {
        return false;
    }
?>