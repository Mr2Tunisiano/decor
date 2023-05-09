<?php

require_once 'index.php';

switch ($_SERVER['REQUEST_METHOD']) {

  case 'POST':
    $name = $_POST['name'];
    $category = $_POST['category'];
    $desc = $_POST['description'];
    $location = $_POST['location'];
    $client = $_POST['client'];
    $files = $_FILES['files'];

    // get product id
    $result0 = mysqli_query($conn, "SELECT * FROM `projects`");
    while ($res = mysqli_fetch_assoc($result0)) {
      $num = $res['id'] + 1;
    }
    $product_id = $num;

    // Check for img errors
    $size_error = array();
    $ext_error = array();
    $allowed_extentions = array("jpg", "jpeg", "png", "gif");
    $count = count($files['name']);
    for ($i = 0; $i < $count; $i++) {
      $file_tmp = $files['tmp_name'][$i];
      $file_name = $files['name'][$i];
      $file_size = $files['size'][$i];
      $imgExtArr = explode('.', $file_name);
      $imgExt = strtolower(array_pop($imgExtArr));
      if ($file_size > 500000) {
        $size_error[] = $file_name;
      } else if (!in_array($imgExt, $allowed_extentions)) {
        $ext_error[] = $file_name;
      }
    }
    $result = false;

    // insert to projects table
    $allImages = array();
    if (empty($size_error) && empty($ext_error)) {
      for ($i = 0; $i < $count; $i++) {
        $file_tmp = $files['tmp_name'][$i];
        $file_name = $files['name'][$i];
        $rand = rand(0, 9999999999999999);
        $imgExtArr = explode('.', $file_name);
        $imgExt = strtolower(array_pop($imgExtArr));
        $file_name = $rand . "." . $imgExt;
        $allImages[] = $file_name;
        move_uploaded_file($file_tmp, "../public/assets/img/Projects/" . $file_name);
      }
      $img_field = implode(",", $allImages);
      $result = mysqli_query($conn, "INSERT INTO `projects` (`id`,`name`, `client`, `location`, `description`, `category`, `img`) VALUES ('$product_id','$name', '$client', '$location', '$desc', '$category', '$img_field')");
    }

    if ($result) {
      sendResponse(201, array("message" => "Success"));
    } else {
      sendResponse(200, array('sizeError' => $size_error, "extError" => $ext_error));
    }
    break;

  case "GET":
    $result = mysqli_query($conn, 'SELECT * FROM projects');
    $items = array();
    while ($row = mysqli_fetch_assoc($result)) {
      $items[] = $row;
    }
    sendResponse(200, $items);
    break;

  case 'PUT':
    $data = json_decode(file_get_contents('php://input'), true);
    $id = $data['id'];
    $name = $data['name'];
    $category = $data['category'];
    $client = $data['client'];
    $location = $data['location'];
    $description = $data['description'];
    $result = mysqli_query($conn, "UPDATE `projects` SET `name`='$name',`client`='$client',`location`='$location',`description`='$location',`category`='$category' WHERE `id`='$id'");
    $result1 = mysqli_query($conn, 'SELECT * FROM projects');
    $items = array();
    while ($row = mysqli_fetch_assoc($result1)) {
      $items[] = $row;
    }
    if ($result) {
      sendResponse(200, $items);
    } else {
      sendResponse(500, array('message' => 'Failed to update item.'));
    }
    break;

  case 'DELETE':
    $id = $_GET['id'];
    $result = mysqli_query($conn, "DELETE FROM `projects` WHERE `projects`.`id` = '$id'");
    $result1 = mysqli_query($conn, 'SELECT * FROM `projects`');
    $items = array();
    while ($row = mysqli_fetch_assoc($result1)) {
      $items[] = $row;
    }
    if ($result) {
      sendResponse(200, $items);
    } else {
      sendResponse(500, array('message' => 'Failed to delete item.'));
    }
    break;
}
