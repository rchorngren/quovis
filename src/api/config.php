<<<<<<< HEAD
<?php
header('Access-Control-Allow-Origin: http://localhost:3000');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
header('Content-Type: application/json');

$db = mysqli_connect('localhost', 'root', 'root', 'quovis');
=======
<?php
header('Access-Control-Allow-Origin: http://localhost:3000');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
header('Content-Type: application/json');

$db = mysqli_connect('localhost', 'root', 'root', 'quovis');
>>>>>>> 6f3a7eb7b3010c12833528c3b8b3b8cd1646b78f
mysqli_query($db, "SET NAMES utf8");