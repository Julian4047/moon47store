<?php

$servername = "localhost";
$database = "u665537866_m47s";
$username = "u665537866_m47s";
$password = "Moon47store29022020";

$conexion = mysqli_connect($servername, $username, $password, $database)
or die(mysql_error($mysqli));

insertar($conexion);

function insertar($conexion) {

    $Nombre = $_POST['Nombre'];
    $Apellido = $_POST['Apellido'];
    $CorreoElectronico = $_POST['CorreoElectronico'];
    $NumeroDeMovil = $_POST['NumeroDeMovil'];
    $NDeDocumento = $_POST['NDeDocumento'];
    $Calle = $_POST['Calle'];
    $Altura = $_POST['Altura'];
    $Localidad = $_POST['Localidad'];
    $DateS = $_POST['DateS'];
    $MontoAbonado = $_POST['MontoAbonado'];
    $CantidadDePrendas = $_POST['CantidadDePrendas'];
    $NombreDePrendas = $_POST['NombreDePrendas'];
    $AbonoEnvio = $_POST['AbonoEnvio'];
  
    $consulta = "INSERT INTO pendingOrders(Nombre,Apellido,CorreoElectronico,NumeroDeMovil,NDeDocumento,Calle,Altura,Localidad,DateS,MontoAbonado,CantidadDePrendas,NombreDePrendas,AbonoEnvio) 
    VALUES ('$Nombre','$Apellido','$CorreoElectronico','$NumeroDeMovil','$NDeDocumento','$Calle','$Altura','$Localidad','$DateS','$MontoAbonado','$CantidadDePrendas','$NombreDePrendas','$AbonoEnvio')";

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
        Tu pedido se realizo con éxito.<br>Nuestro equipo se comunicara a la brevedad.
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