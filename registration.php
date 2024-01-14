<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Database connection information
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "registration";

    // Create a database connection
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Retrieve form data
    $name = $_POST["name"];
    $username = $_POST["username"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $password = $_POST["password"];

    // Insert user data into the database
    $sql = "INSERT INTO registration (name, username, email, phone, password)
            VALUES ('$name', '$username', '$email', '$phone', '$password')";

    if ($conn->query($sql) === TRUE) {
        echo "Registration successful!!!!!";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    // Close the database connection
    $conn->close();
}
?>
