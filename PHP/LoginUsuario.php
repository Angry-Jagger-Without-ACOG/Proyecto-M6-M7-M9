<?php

  header('Access-Control-Allow-Origin: *');
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  header('Content-Type: text/html; charset=UTF-8');


  $mote=$_POST['mote'];
  $mote=$_POST['contrasena'];

  global $datos;


  require("BD.php");

  $conexion = conexion(); // CREA LA CONEXION

  $LogUsuario = mysqli_query($conexion, "SELECT mote, contrasena  FROM alumnos where mote = $mote and contrasena= $contrasena");

  header("Location: /crear-ranking/crear-ranking.html");
?>
