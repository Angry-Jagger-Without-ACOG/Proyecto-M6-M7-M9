<?php



header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");

require("bd.php");

$json = file_get_contents("php://input"); // Esto es un objeto JSON en formato string

$params = json_decode($json);

$con;
$con=conexion();


$resultado = mysqli_query($con,"insert into alumnos (idusu,nick,password,email,nombre,apellido,image) VALUES ('$params->null','$params->nick','$params->password','$params->correo','$params->nombre','$params->apellido','$params->null')");


 class Result {}

   $response = new Result();

   if($resultado->num_rows > 0 ) {
     $response->response = 'OK';
     $response->mensaje = 'Registro exitoso';

 } else {
     $response->response = 'FAIL';
     $response->mensaje = 'Registro Fallido';
 }

     header('Content-Type: application/json');

  echo json_encode($response);


?>
