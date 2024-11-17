<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "yenny";
function executeQuery($query)
{
    global $servername, $username, $password, $dbname;

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
        header("Location: 404.php");
        exit();
    }
}
try {

    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

} catch (PDOException $e) {
    header("Location: 404.php");
    exit();

}