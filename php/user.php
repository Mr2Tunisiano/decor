<?php

require_once 'index.php';

switch ($_SERVER['REQUEST_METHOD']) {

  case 'POST':
    $data = json_decode(file_get_contents('php://input'), true);
    $name = mysqli_real_escape_string($conn, $data['username']);
    $password = mysqli_real_escape_string($conn, $data['password']);
    $result = mysqli_query($conn, "SELECT * FROM `users` WHERE `username` = '$name' AND `password`='$password'");
    $res = mysqli_fetch_assoc($result);
    if (!empty($res)) {
      sendResponse(200, $res);
    } else {
      sendResponse(201, array('message' => 'Invalid Username or Password !'));
    }
    break;
}
