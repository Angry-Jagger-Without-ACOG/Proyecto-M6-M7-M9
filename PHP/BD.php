<?php

global $enlace; //variable de tipo global para llamarla en cualquier parte de la aplicacion donde se llame
function conexion(){

 $enlace = mysqli_connect('localhost', 'root', 'usbw', 'test'); //conexion con la base de datos
   mysqli_set_charset($enlace,"utf8");

   if(!$enlace){
    echo "Error: No se puede conectar a MySQL." . PHP_EOL;
    echo "Errno de depuracion: " . mysqli_connect_errno() . PHP_EOL;
    echo "Error de depuracion: " . mysqli_connect_error() . PHP_EOL;
    exit;
   }
  return $enlace;
}


?>
