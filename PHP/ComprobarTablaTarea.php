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



$resultado = mysqli_query($con,"SELECT NombreAlumno,CodigoRanking FROM tarea WHERE NombreAlumno= '$params->nombreAlumno' AND CodigoRanking = '$params->codigoRanking'");

class Result {}


$response = new Result();


if($resultado) {

    $response->response = 'OK';

} else {

    $response->response = 'FAIL';

}


    echo json_encode($response);


?>
