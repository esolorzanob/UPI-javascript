<?php
$servername = "127.0.0.1";
$username = "root";
$password = "";
$dbname = "test";
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
if($_POST["metodo"] == "select"){
  $sql = "select * from usuarios where username='".$_POST["username"]."'";
    $result = $conn->query($sql);
    if ($result->num_rows > 0 ) {	
    	$user = mysqli_fetch_assoc($result);
        echo json_encode($user);
    } else {
        echo "Error";
    }
}else if($_POST["metodo"] == "selectAll"){
    $users = array();
    $sql = "select * from usuarios";
    $result = $conn->query($sql);
    if ($result->num_rows > 0 ) {
        while($row = mysqli_fetch_assoc($result)) { 
            array_push($users, $row); 
        } 	
       
        echo json_encode($users);
    } else {
        echo "Error";
    }
}else{
   if($_POST["metodo"] == "insert"){
       $sql = "insert into usuarios (nombre, apellidos, provincia, telefono, correo, username, password, genero, rol)
        values('".$_POST["nombre"]."','".
        $_POST["apellidos"]."','".
        $_POST["provincia"]."','".
        $_POST["telefono"]."','".
        $_POST["correo"]."','".
        $_POST["username"]."','".
        $_POST["pass"]."','".
        $_POST["genero"]."','".
        $_POST["rol"]."')";
    }

   if ($conn->query($sql) === TRUE ) {
         echo "Exito";
    } else {
        echo "Error";
    }
}
$conn->close();
?>