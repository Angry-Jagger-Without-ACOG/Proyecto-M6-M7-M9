<?php

  header('Access-Control-Allow-Origin: *');
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  header('Content-Type: text/html; charset=UTF-8');

  require('../../../PHP/BD.php');


  global $datos;

  $conexion = conexion(); // CREA LA CONEXION

  $registros = mysqli_query($conexion, "SELECT * FROM alumnos");

  if ($resultado = mysqli_fetch_array($registros))
  {
    $datos[] = $resultado;
  }

  $json = json_encode($datos); // GENERA EL JSON CON LOS DATOS OBTENIDOS

  echo $json;
?>
