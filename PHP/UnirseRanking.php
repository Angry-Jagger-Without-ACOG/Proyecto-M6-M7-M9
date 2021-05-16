<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");

require("BD.php");

$json = file_get_contents("php://input"); // Esto es un objeto JSON en formato string

$params = json_decode($json);

$con;
$con=conexion();


$nombreRanking = strtolower($params->nombre);

$resultado = mysqli_query($con,"INSERT INTO $nombreRanking SET Nombre = '$params->nombreAlumno', Apellido='$params->apellidoAlumno', Tarea1= 0, Tarea2=0 , Tarea3= 0 ,
                                Tarea4= 0 , Tarea5= 0 , Tarea6= 0, Tarea7= 0 , Tarea8 = 0, Tarea9 = 0, Tarea10 =0 ");


class Result {}

$response = new Result();


if($resultado) {
    $response->response = 'OK';

} else {
    $response->response = 'FAIL';
}

     header('Content-Type: application/json');

  echo json_encode($response);






?>