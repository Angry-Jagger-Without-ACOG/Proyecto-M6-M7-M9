<?php

global $enlace;

function conexion(){

 $enlace = mysqli_connect('localhost', 'root','', 'daw2_gamifikg2');

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
