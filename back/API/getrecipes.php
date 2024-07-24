<?php
session_start();

require("./connection.php");

if ($_SERVER['REQUEST_METHOD'] == "GET") {

    $stmt = $conn->prepare("SELECT recipe_id, title, ingrediants, steps, image FROM recipes"); 
    $stmt->execute();
    $result = $stmt->get_result();
    $recipes = [];
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $recipes[] = $row;
        }
        echo json_encode($recipes);
    }
}else{
    return false;
}
?>