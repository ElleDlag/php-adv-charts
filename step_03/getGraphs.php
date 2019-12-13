<?php
header('Content-Type: application/json');
include 'database.php';

    if($_GET['lvl'] == 'guest'){
        $graphs= array_slice($graphs, 0,1);
        echo json_encode($graphs);
    } elseif ($_GET['lvl'] == 'employee') {
        $graphs= array_slice($graphs, 0,2);
        echo json_encode($graphs);
    } elseif ($_GET['lvl'] == 'clevel') {
        echo json_encode($graphs);
    }
?>