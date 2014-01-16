<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8" />
	<title>JQuery Toggles</title>

    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.5/jquery.min.js"></script>

<script type="text/javascript">

    $(document).ready(function () {

        $(".flip").click(function () {

            $(this).next().slideToggle("slow");

        });

    });

</script>

 

<style type="text/css"> 

div.panel,p.flip

{

margin:0px;

padding:5px;

text-align:center;

background:#e5eecc;

border:solid 1px #c3c3c3;

}

div.panel

{

height:120px;

display:none;

}

</style>

</head>

 

<body>

<p class="flip">Show Panel</p>

<div class="panel">

<p>This is a little test of jQuery <code>slideToggle</code>.</p>

<p>.........................................................</p>

</div>



<p class="flip">Show Panel</p>

 <div class="panel">

<p>Click below to see the source for these panels.</p>



<?php
	include '../../../php/showSource.php';
	showSource($_SERVER["PHP_SELF"]);
?>

<p><a href="source.php" target=_blank">show source</a></p>

</div>

</body>

</html>





