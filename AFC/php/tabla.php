<!DOCTYPE html>
<html>
<head>
    <title>Tablas de Países</title>
</head>
<body>
    <?php
    $paises = array(
        array("Pais" => "Japón", "Habitantes" => "125 mill", "Moneda" => "Yen", "Comida" => "1.png", "Bandera" => "2.jpg"),
        array("Pais" => "Malasia", "Habitantes" => "33.57 mill", "Moneda" => "Ringgit", "Comida" => "3.png", "Bandera" => "4.jpg"),
        array("Pais" => "Singapur", "Habitantes" => "5.454 mill", "Moneda" => "Dolar singapurense", "Comida" => "5.png", "Bandera" => "6.jpg")
    );
    ?>

    <?php foreach ($paises as $pais): ?>
        <h1>Tabla - <?php echo $pais["Pais"]; ?></h1>
        <table border="1">
            <tr>
                <th>Pais</th>
                <th>Número de habitantes</th>
                <th>Moneda</th>
                <th>Comida típica</th>
                <th>Bandera</th>
            </tr>
            <tr>
                <td><?php echo $pais["Pais"]; ?></td>
                <td><?php echo $pais["Habitantes"]; ?></td>
                <td><?php echo $pais["Moneda"]; ?></td>
                <td><img src="<?php echo $pais["Comida"]; ?>" alt="Comida típica de <?php echo $pais["Pais"]; ?>"></td>
                <td><img src="<?php echo $pais["Bandera"]; ?>" alt="Bandera de <?php echo $pais["Pais"]; ?>"></td>
            </tr>
        </table>
    <?php endforeach; ?>

    <a href="../afc/AFC.html">Volver al índice</a>
</body>
</html>