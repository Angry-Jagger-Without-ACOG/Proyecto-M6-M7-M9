<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");

require('BD.php');



  $con = conexion();

  $json = file_get_contents("php://input");

  $params = json_decode($json);


  $resultado = mysqli_query($con, "UPDATE alumnos SET nombre='$params->nombre',apellido='$params->apellido', email='$params->correo' WHERE nick='$params->nombre_Usuario'");


  class Result {}

  $response = new Result();

  if($resultado->num_rows > 0) {
    $response->response = 'OK';
    $response->mensaje = 'Registro exitoso';

} else {
    $response->response = 'FAIL';
    $response->mensaje = 'Registro Fallido';
}

    header('Content-Type: application/json');

 echo json_encode($response);




?>
