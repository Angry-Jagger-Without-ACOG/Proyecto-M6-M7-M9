<?php

  header('Access-Control-Allow-Origin: *');
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  header('Content-Type: text/html; charset=UTF-8');
  require('BD.php');


$mote=$_POST['mote'];
$correo=$_POST['correo'];
$contrasena=$_POST['contrasena'];
$apellido=$_POST['apellido'];
$curso=$_POST['curso'];
$img=$_POST['img'];


  global $datos;


  require("BD.php");

  $conexion = conexion(); // CREA LA CONEXION

  $registrosUsuario = mysqli_query($conexion, "INSERT INTO usuarios( mote, correo, contrasena, apellido, curso) VALUES ('$mote','$correo','$contrasena','$apellido','$curso'");


?>
