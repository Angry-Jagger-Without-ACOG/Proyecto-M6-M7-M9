<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");

require("BD.php");

$json = file_get_contents("php://input");

$params = json_decode($json);

$con;
$con=conexion();

echo json_encode($params);

$resultado = mysqli_query($con,"INSERT into rankingalumno SET NombreAlumno= '$params->nombreAlumno', NombreProfesor='', NombreRanking=''");

 class Result {}

   $response = new Result();

   if($resultado) {
     $response->response = 'OK';
     $response->mensaje = 'Registro exitoso';

 } else {
     $response->response = 'FAIL';
     $response->mensaje = 'Registro Fallido';
 }

     header('Content-Type: application/json');

  echo json_encode($response);


?>
