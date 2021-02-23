<?php

  header('Access-Control-Allow-Origin: *');
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  header('Content-Type: text/html; charset=UTF-8');
  require('BD.php');


  global $datos;

  $conexion = conexion(); // CREA LA CONEXION

  $registros = mysqli_query($conexion, "SELECT * FROM usuario");

    echo $registros;

?>
