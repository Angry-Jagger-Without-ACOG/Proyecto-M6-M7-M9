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

$vec = [];


$nombreRanking = strtolower($params);

$resultado = mysqli_query($con,"SELECT Nombre,Apellido,Tarea1 AS Puntuacion FROM $nombreRanking ORDER BY Apellido ASC");

    while ($reg = mysqli_fetch_assoc($resultado)){

      $vec[]=$reg;

    }
    echo json_encode($vec);



?>
