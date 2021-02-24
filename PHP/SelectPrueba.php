<?php

  header('Access-Control-Allow-Origin: *');
<<<<<<< HEAD
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  header('Content-Type: text/html; charset=UTF-8');
  require('BD.php');


  global $datos;

  require("db.php");

  $conexion = conexion(); // CREA LA CONEXION

  $registros = mysqli_query($conexion, "SELECT * FROM usuario");

=======
	header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
	header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
	header("Allow: GET, POST, OPTIONS, PUT, DELETE");

  require('BD.php');


  $conexion = conexion();

  $registros = mysqli_query($conexion, "SELECT * FROM alumnos");

  $datos=[];
  while ($resultado = mysqli_fetch_assoc($registros))
  {
    $datos[] = $resultado;
  }

  $json = json_encode($datos);

  echo $json;
>>>>>>> master
?>
