<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    $data = "Name: $name\nEmail: $email\nMessage: $message\n\n";

    $file = "form_responses.txt";

    if ($handle = fopen($file, 'a')) {
        if (fwrite($handle, $data) === FALSE) {
            echo "Oops! Error writing to file.";
        } else {
            fclose($handle);
            // Redirect using JavaScript
            echo '<script>window.location.href = "index.html";</script>';
        }
    } else {
        echo "Oops! Error opening file.";
    }
} else {
    echo "Invalid request.";
}
?>
