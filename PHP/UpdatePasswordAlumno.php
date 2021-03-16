<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");

require('BD.php');

  $con = conexion();

  $json = file_get_contents("php://input");

  $params = json_decode($json);


  $response = mysqli_query($con, "UPDATE alumnos SET password='$params->password3' WHERE nick='$params->nombre_Usuario'");


  header('Content-Type: application/json');

  echo json_encode($response);


?>
