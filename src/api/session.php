<?php

$user_check = $_SESSION['login_user'];
$session_sql = mysqli_query($db,
"SELECT user_name
FROM users
WHERE user_name = '$user_check'");

$row = mysqli_fetch_assoc($session_sql);
$login_session = $row['user_name'];

/*if(!isset($login_session)) {
mysqli_close($db);
header('Location: login.resource.php');
}*/
?>