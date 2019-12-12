<?php
header('Content-Type: application/json');
    include 'database.php';
    foreach ($graphs as $key => $value) {
       if($key == "fatturato"){
            echo json_encode($value);
        };
    };
?>