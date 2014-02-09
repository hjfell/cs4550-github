<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8" />
	<title>Koch Snowflake</title>
    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>

    <script src="koch.js"></script>

    <script type="text/javascript" src="radioButtons.js"></script>

</head>

<body>

    <h3>Koch Snowflakes</h3>
    <canvas id="koch_snowflake_id" width="300" height="300" style="border:3px solid gray;"></canvas>
    
<script>

    var canvas = document.getElementById("koch_snowflake_id");

    var c = canvas.getContext('2d');

    // Start a new path

    c.beginPath();



    // Set some properties that control how the graphics will look

    c.fillStyle = "#ccc";    // Light gray interiors

    c.strokeStyle = "#99F";  // outlined with light blue lines

    c.lineWidth = 3;         // five pixels wide.
</script> 

<p>Select a level of snowflake to draw.</p>

    <form action="">

    <div>

        <input type="radio" name="level" value="0">0</input>

        <input type="radio" name="level" value="1">1</input>

        <input type="radio" name="level" value="2">2</input>

        <input type="radio" name="level" value="3">3</input>

        <input type="radio" name="level" value="4">4</input>

        <input type="radio" name="level" value="5">5</input>

    </div>

    </form>

    <button onclick="c.clearRect(0, 0, canvas.width, canvas.height); c.beginPath();">clear</button>

 

<?php
	include '../../../../php/showSource.php';
	showSource($_SERVER["PHP_SELF"]);
?>

<p><a href="source.php" target="_blank">show source</a></p>

<p><a href="radioButtons.js" target="_blank">radioButtons.js</a></p>

<p><a href="koch.js" target="_blank">koch.js</a></p>



</body>

</html>

