
<?php
header('Content-Type: application/json');
    include 'database.php';
    foreach ($graphs as $key => $value) {
        if($key == "fatturato_by_agent"){
            echo json_encode($value);
         }
    };
   
?>