<?php

$servername = "localhost";
$database = "u665537866_m47s";
$username = "u665537866_m47s";
$password = "Moon47store29022020";

$conexion = mysqli_connect($servername, $username, $password, $database)
or die(mysql_error($mysqli));

insertar($conexion);

function insertar($conexion) {

    $nombre = $_POST['nombre'];
    $apellido = $_POST['apellido'];
    $email = $_POST['email'];
    $msj = $_POST['msj'];
  
    $consulta = "INSERT INTO chat(nombre,apellido,email,msj) VALUES ('$nombre','$apellido','$email','$msj')";

    mysqli_query($conexion,$consulta);
    mysqli_close($conexion); 
}

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <div>
        Tu mensaje se envió con éxito.<br>Nuestro equipo se comunicara a la brevedad.
    </div>
</body>
<style>
    @font-face {
        font-family: "sf";
        src: url(./font/San\ Francisco\ Font.otf);
    }
    
    body {
        background-color: #00CC96;
        display: grid;
        align-items: center;
        justify-content: center;
        width: 100vw;
        height: 100vh;
    }
    
    div {
        display: grid;
        align-items: center;
        justify-content: center;
        font-family: "sf";
        color: white;
        font-size: 14px;
        text-align: center;
    }
</style>

</html>