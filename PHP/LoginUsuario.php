<?php

session_start();

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");

require("bd.php");


$json = file_get_contents("php://input"); // Esto es un objeto JSON en formato string

$params = json_decode($json);

$con;
$con=conexion();


$resultado = mysqli_query($con, "SELECT * FROM alumnos WHERE nick='$params->nick' AND password='$params->password'");

  class Result {}

  $response = new Result();

  if($resultado->num_rows > 0) {
    $response->response = 'OK';

    $response -> alumno = json_encode(mysqli_fetch_assoc ($resultado));

} else {
    $response->response = 'FAIL';
}

    header('Content-Type: application/json');

    echo json_encode($response);


?>
