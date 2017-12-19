<?php
$servername = "127.0.0.1";
$username = "root";
$password = "";
$dbname = "test";
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
if($_POST["metodo"] == "select"){
    $sql = "select * from paises where grupo = '" . $_POST["grupo"]."'";
    $paises = array();
    $result = $conn->query($sql);
    if($result->num_rows > 0){
        while($row = mysqli_fetch_assoc($result)){
            array_push($paises, $row);
        }
        echo json_encode($paises);
    }else{
        echo "Error";
    }
}else if($_POST["metodo"] == "selectPais"){
    $sql = "select * from paises where nombre = '" . $_POST["pais"]."'";
    $result = $conn->query($sql);
    if($result->num_rows > 0){
        echo json_encode(mysqli_fetch_assoc($result));
    }else{
        echo "Error";
    }
}else if($_POST["metodo"] == "selectAll"){
    $sql = "select * from paises";
    $paises = array();
    $result = $conn->query($sql);
    if($result->num_rows > 0){
        while($row = mysqli_fetch_assoc($result)){
            array_push($paises, $row);
        }
        echo json_encode($paises);
    }else{
        echo "Error";
    }
}
$conn->close();
?>