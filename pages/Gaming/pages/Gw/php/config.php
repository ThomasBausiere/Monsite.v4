
<?php

// Connexion à la base de données
$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "page_login";

// Création de la connexion

$conn = new mysqli($servername, $username, $password, $dbname);

// Vérification de la connexion
if ($conn->connect_error) {
    die("Échec de la connexion: " . $conn->connect_error);
}
?>
