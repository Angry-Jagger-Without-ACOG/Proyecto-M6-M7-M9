<?php

  header('Access-Control-Allow-Origin: *');
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
?>
