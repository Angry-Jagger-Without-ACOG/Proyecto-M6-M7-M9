<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");


  $mote=$_POST['mote'];
  $mote=$_POST['contrasena'];

  global $datos;


  require("BD.php");

  $conexion = conexion(); // CREA LA CONEXION

  $LogUsuario = mysqli_query($conexion, "SELECT mote, contrasena  FROM alumnos where mote = $mote and contrasena= $contrasena");

  header("Location: /crear-ranking/crear-ranking.html");
?>
