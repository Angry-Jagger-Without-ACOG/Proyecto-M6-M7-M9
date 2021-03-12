<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");

require("bd.php");


$json = file_get_contents("php://input"); // Esto es un objeto JSON en formato string

$params = json_decode($json);

$con;
$con=conexion();

  // REALIZA LA QUERY A LA DB
  $resultado = mysqli_query($con,"SELECT * FROM alumnos WHERE nick ='$params->firstName'");


  class Result {}

  $response = new Result();


    if($reg = mysqli_fetch_assoc($resultado)){
      $vec[]=$reg;
    }

    header('Content-Type: application/json');

    echo json_encode($vec);

?>
