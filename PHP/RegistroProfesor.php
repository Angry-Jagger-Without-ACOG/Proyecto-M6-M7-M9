<?php



header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");

require("BD.php");

$json = file_get_contents("php://input"); // Esto es un objeto JSON en formato string

$params = json_decode($json);


$con=conexion();



  $resultado = mysqli_query($con,"INSERT into profesores (nick,password,email,nombre,apellido,centro,image) VALUES ('$params->nick','$params->password','$params->correo','$params->nombre','$params->apellido','$params->centro','$params->img')");



 class Result {}

   $response = new Result();

   if($resultado->num_rows > 0 ) {
     $response->response = 'OK';

 } else {
     $response->response = 'FAIL';
 }

     header('Content-Type: application/json');

  echo json_encode($response);


?>
