<?php
$servername = "127.0.0.1";
$username = "root";
$password = "";
$dbname = "test";
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
if($_POST["metodo"] == "login" || $_POST["metodo"] == "listar" || $_POST["metodo"] == "traerUsuario"){
    if($_POST["metodo"] == "login"){
        $sql = "select * from usuarios where username = '".$_POST["username"]."'";
        $result = $conn->query($sql);
        if($result->num_rows > 0){
            echo json_encode(mysqli_fetch_assoc($result));
        }else{
            echo "Error";
        }
    }else if($_POST["metodo"] == "listar"){
        $sql = "select * from usuarios";
        $usuarios = array();
        $result = $conn->query($sql);
        if($result->num_rows > 0){
            while($row = mysqli_fetch_assoc($result)){
                array_push($usuarios, $row);
            }
            echo json_encode($usuarios);
        }else{
            echo "Error";
        }
    }else if($_POST["metodo"] == "traerUsuario"){
        $sql = "select * from usuarios where idusuarios = ".$_POST["id"];
        $result = $conn->query($sql);
        if($result->num_rows > 0){
            echo json_encode(mysqli_fetch_assoc($result));
        }else{
            echo "Error";
        }
    }
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
    }else if($_POST["metodo"] == "borrar"){
        $sql = "delete from usuarios where idusuarios=".$_POST["id"];
    }else if($_POST["metodo"] == "editar"){
        $sql = "update usuarios set 
        nombre = '".$_POST["nombre"]."',
        apellidos = '".$_POST["apellidos"]."',
        provincia = '".$_POST["provincia"]."',
        telefono = '".$_POST["telefono"]."',
        correo = '".$_POST["correo"]."',
        username = '".$_POST["username"]."',
        password = '".$_POST["password"]."',
        genero = '".$_POST["genero"]."'
        where idusuarios = ".$_POST["id"];
    }
   //var_dump($sql);
    if($conn->query($sql) === TRUE){
        echo "Exito";
    }else{
        echo "Error";
    }
    
}
$conn->close();
?>