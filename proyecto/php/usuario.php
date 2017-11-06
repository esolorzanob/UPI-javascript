<?php
$servername = "172.16.11.129";
$username = "root";
$password = "";
$dbname = "test";
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

$conn->close();
?>