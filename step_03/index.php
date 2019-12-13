<?php
if(!$_GET['lvl']){
    $_GET['lvl']='guest';
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.3/Chart.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/locale/it.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.3/Chart.min.css"/>
    <link rel="stylesheet" href="main.css"/>
    <script src="script.js"></script>
    <title>Chart</title>
</head>
<body>
    <nav>
        <form action="index.php" method="GET">
            <button class="btnLvl" name='lvl' value='guest'>GUEST</button>
            <button class="btnLvl" name='lvl' value='employee'>EMPLOYEE</button>
            <button class="btnLvl" name='lvl' value='clevel'>CLEVEL</button>
        </form>
    </nav>
    
    
    <canvas id="chartSales"></canvas> 
    <canvas id="chartAgent"></canvas>   
    <canvas id="chartTeam"></canvas>   
</body>
</html>