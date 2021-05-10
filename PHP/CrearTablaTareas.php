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

$resultado = mysqli_query($con,"CREATE TABLE $params->nombre_ranking(
                                idAlumno VARCHAR (255) NOT NULL PRIMARY KEY,
                                idProfessor VARCHAR(255) NOT NULL, 
                                idRanking VARCHAR(255) NOT NULL ,
                                Tarea1 VARCHAR(255) NOT NULL,
                                Tarea2 VARCHAR(255) NOT NULL,
                                Tarea3 VARCHAR(255) NOT NULL,
                                Tarea4 VARCHAR(255) NOT NULL,
                                Tarea5 VARCHAR(255) NOT NULL,
                                Tarea6 VARCHAR(255) NOT NULL,
                                Tarea7 VARCHAR(255) NOT NULL,
                                Tarea8 VARCHAR(255) NOT NULL,
                                Tarea9 VARCHAR(255) NOT NULL,
                                Tarea10 VARCHAR(255) NOT NULL)");

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