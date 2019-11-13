<?php
    include 'conn.php';
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Credentials: true");
    header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
    header('Access-Control-Max-Age: 1000');
    header('Access-Control-Allow-Headers: Content-Type, Content-Range, Content-Disposition, Content-Description');

    $_POST = json_decode(file_get_contents("php://input"), true);

    $id = $_POST['id'];
    $name = $_POST['name'];
    $price = $_POST['price'];

    $sql = $conn->query("INSERT INTO product (id, name, price) VALUE ('$id', '$name', '$price')");

    if($sql == TRUE){
        $result = "berhasil";
    }
    else{
        $result="Eror:" . $sql . "<br/>" . $conn->error;
    }

    echo json_encode($result);

    mysqli_close($conn);
?>