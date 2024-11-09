<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

$host = 'localhost';
$dbname = 'geotech';
$username = 'root';
$password = '';

$conn = new mysqli($host, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$data = json_decode(file_get_contents("php://input"));

$id = $conn->real_escape_string($data->id);
$name = $conn->real_escape_string($data->name);
$email = $conn->real_escape_string($data->email);
$number = $conn->real_escape_string($data->number);
$gender = $conn->real_escape_string($data->gender);
$country = $conn->real_escape_string($data->country);

$sql = "UPDATE contacts SET name='$name', email='$email', number='$number', gender='$gender', country='$country' WHERE id = $id";

if ($conn->query($sql) === TRUE) {
    echo json_encode(["message" => "Contact updated successfully!"]);
} else {
    echo json_encode(["message" => "Error: " . $conn->error]);
}

$conn->close();
?>