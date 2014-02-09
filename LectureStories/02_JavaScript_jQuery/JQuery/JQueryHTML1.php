<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8" />
	<title>JQuery Test 3</title>
	<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
	<script type="text/javascript">
		$(document).ready(function(){
  			$("button").click(function(){

  			    $("animal").html("hippo");

  			    $("fruit").html("apple");
  			});
		});
	</script>
</head>
<body>
<h2>This is a heading</h2>
<p>This is a <animal>giraffe</animal>.</p>
<p>This is a <animal>rabbit</animal>.</p>
<p>The <animal>dog</animal> ate an <fruit>orange</fruit>.</p>
<button>Click me</button>

<?php
	include '../../../php/showSource.php';
	showSource($_SERVER["PHP_SELF"]);
?>

<p><a href="source.php" target="_blank">show source</a></p>

</body>
</html>