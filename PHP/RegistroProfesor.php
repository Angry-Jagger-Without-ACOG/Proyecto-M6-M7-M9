<?php
  header('Access-Control-Allow-Origin: *');
  header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
  header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
  header("Allow: GET, POST, OPTIONS, PUT, DELETE");
  require('BD.php');

  $Profesor=$_POST['profesor'];

  global $datos;

  $conexion = conexion();

  $registroProfe = mysqli_query($conexion, "INSERT INTO profesores(nickname,pasword,email,firstname,lastname,centro) VALUES ('','','','','','')");

?>
