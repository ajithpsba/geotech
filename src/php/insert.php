<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: POST');
header("Access-Control-Allow-Headers: Content-Type");

$host = 'localhost';
$dbname = 'geotech';
$username = 'root';
$password = '';

$conn = new mysqli($host, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$data = json_decode(file_get_contents("php://input"));

$name = $conn->real_escape_string($data->name);
$email = $conn->real_escape_string($data->email);
$number = $conn->real_escape_string($data->number);
$gender = $conn->real_escape_string($data->gender);
$country = $conn->real_escape_string($data->country);

$sql = "INSERT INTO contact (name, email, number, gender, country) VALUES ('$name', '$email', '$number', '$gender', '$country')";

if ($conn->query($sql) === TRUE) {
    echo json_encode(["message" => "Your information has been saved successfully!"]);
} else {
    echo json_encode(["message" => "Error: " . $conn->error]);
}

$conn->close();
?>