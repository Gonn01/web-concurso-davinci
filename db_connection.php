<?php
$servername = "localhost";
$username = "root";
$password = ""; // En este caso, asumimos que no hay contraseña para el usuario root
$dbname = "mydb"; // Reemplaza "tu_base_de_datos" con el nombre de tu base de datos
function executeQuery($query)
{
    global $servername, $username, $password, $dbname; // Acceder a las variables globales

    try {
        $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        $stmt = $conn->prepare($query);

        $stmt->execute();

        // Si es una consulta SELECT, retorna los resultados
        if (strpos($query, 'SELECT') !== false) {
            return $stmt->fetchAll(PDO::FETCH_ASSOC);
        } else {
            // Si es una consulta INSERT, UPDATE o DELETE, retorna el número de filas afectadas
            return $stmt->rowCount();
        }
    } catch (PDOException $e) {
        echo "Error en la consulta: " . $e->getMessage();
        return false;
    }
}
try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

} catch (PDOException $e) {
    echo "Conexión fallida: " . $e->getMessage();

}