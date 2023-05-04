<?php

require_once 'index.php';

switch ($_SERVER['REQUEST_METHOD']) {
  case 'GET':
    $result = mysqli_query($conn, 'SELECT * FROM box');
    $items = array();
    while ($row = mysqli_fetch_assoc($result)) {
      $items[] = $row;
    }
    sendResponse(200, $items);
    break;

  case 'POST':
    $data = json_decode(file_get_contents('php://input'), true);
    $name = mysqli_real_escape_string($conn, $data['name']);
    $email = mysqli_real_escape_string($conn, $data['email']);
    $subject = mysqli_real_escape_string($conn, $data['subject']);
    $message = mysqli_real_escape_string($conn, $data['message']);
    $result = mysqli_query($conn, "INSERT INTO `box` (`name`, `email`, `subject`, `message`, `is_read`) VALUES ('$name', '$email', '$subject', '$message', '0')");
    if ($result) {
      sendResponse(201, array('name' => $name, 'email' => $email, 'subject' => $subject, 'message' => $message));
    } else {
      sendResponse(500, array('message' => 'Failed to create item.'));
    }
    break;

  case 'PUT':
    $data = json_decode(file_get_contents('php://input'), true);
    $id = $data['id'];
    $result = mysqli_query($conn, "UPDATE `box` SET is_read='1' WHERE id='$id'");
    if ($result) {
      sendResponse(200, array('id' => $id));
    } else {
      sendResponse(500, array('message' => 'Failed to update item.'));
    }
    break;

  case 'DELETE':
    $id = $_GET['id'];
    $result = mysqli_query($conn, "DELETE FROM `box` WHERE `box`.`id` = '$id'");
    if ($result) {
      sendResponse(
        200,
        array('id' => $id)
      );
    } else {
      sendResponse(500, array('message' => 'Failed to delete item.'));
    }
    break;
}
