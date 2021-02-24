<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");
  require('BD.php');


$mote=$_POST['mote'];
$correo=$_POST['correo'];
$contrasena=$_POST['contrasena'];
$apellido=$_POST['apellido'];
$centro=$_POST['centro'];
$img=$_POST['img'];


  global $datos;


  require("BD.php");

  $conexion = conexion(); // CREA LA CONEXION

  $registrosUsuario = mysqli_query($conexion, "UPDATE usuarios SET mote='$mote', correo='$correo',contrasena='$contrasena',apellido='$apellido', centro='$centro'");

?>
