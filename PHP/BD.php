<?php

global $enlace;

function conexion(){

 $enlace = mysqli_connect('localhost', 'root', 'usbw', 'daw2_gamifikg2');
 //$enlace = mysqli_connect('192.168.3.26', 'DAW2_GamifikG2', 'aGamifikG21', 'daw2_gamifikg2');
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
