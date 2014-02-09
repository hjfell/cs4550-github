<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8" />
	<title>PHP Numbers</title>
</head>
<body>
<?php # variables.php -->
	// Create some number variables
	$three = 3;
	$x = 7.1857026;
	$sum = $three + $x;
	$product = $three * $x;
	$bigNum = 1000000*$x*$x;
	$bigNumFormated = number_format ($bigNum,2);
	
	
	// Print a header and the values
	echo "<h3>PHP Number Variables</h3>
	<p>\$three = $three and \$x = $x</p>";
	
	echo "\$three + \$x = $sum <br >";
	echo "\$three * \$x = $product <br >";
	
	echo "<p>$bigNum  formatted to 2 decimal places:  $bigNumFormated";
	
?>

<h3>References:</h3>
<ul>
<li><a href="http://php.net/manual/en/language.types.integer.php">PHP Manual - integers</a></li>
<li><a href="http://php.net/manual/en/language.types.float.php">PHP Manual - floats</a></li>	
</ul>

<!--<p>and this is the source of this page</p>-->

<?php
	include '../../../php/showSource.php';
	showSource($_SERVER["PHP_SELF"]);
?>

<p><a href="source.php" target="_blank">show source</a></p>
</body>
</html>