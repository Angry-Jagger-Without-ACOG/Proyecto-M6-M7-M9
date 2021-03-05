<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");

$bd = include_once "BD.php";


$postdata = file_get_contents("php://input"); // Esto es un JSON en formato string
$params = json_decode($postdata, true);	// Convertimos el JSON string que nos llega en un objeto de PHP

$password = $params['nombre'];
echo '{ "nombre": "'. $password .'" }'; // Desde el servidor tenemos que devolver siempre la información en forma de JSON

$instruccion = "select count(*) as cuantos from alumnos where nombre = '$nick'";



// echo  ($postdata);
?>
