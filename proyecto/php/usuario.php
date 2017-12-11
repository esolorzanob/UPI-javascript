<?php
$servername = "127.0.0.1";
$username = "root";
$password = "";
$dbname = "test";
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
if($_POST["metodo"] == "login" || $_POST["metodo"] == "listar"){
    echo "test";
}else{
    if($_POST["metodo"] == "registro"){
        $sql = "insert into usuarios (nombre, apellidos, correo, telefono, 
        provincia, genero, username, password, rol) values('"
        .$_POST["nombre"]."','"
        .$_POST["apellidos"]."','"
        .$_POST["correo"]."','"
        .$_POST["telefono"]."','"
        .$_POST["provincia"]."','"
        .$_POST["genero"]."','"
        .$_POST["username"]."','"
        .$_POST["password"]."','1')";
    }else if($_POST["metodo"] == "editar"){
        echo "test";
    }
   // var_dump($sql);
    if($conn->query($sql) === TRUE){
        echo "Exito";
    }else{
        echo "Error";
    }
    
}
$conn->close();
?>