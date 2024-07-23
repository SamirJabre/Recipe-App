<?php

$dbhost = "localhost";
$dbuser = "root";
$dbpass = "";
$dbname = "recipe";

if(!$conn = mysqli_connect($dbhost,$dbuser,$dbpass,$dbname))
{

	die("failed to connect!");
}
else {
    echo "Connected succesfuly";
}
?>