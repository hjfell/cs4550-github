<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8" />
	<title>Calendar</title>
	<script type="text/javascript" src="../../jQuery/jquery-1.7.1.min.js"></script>
	<script type="text/javascript" src="../../jQuery/modernizr.js"></script>
	<script type="text/javascript" src="js/calendar.js" charset="utf-8"></script>
</head>
<body>


<form action="calendar.php" method="post">

<?php # Script 2.6 - calendar.php

// This script makes three pull-down menus
// for an HTML form: months, days, years.

// Make the months array:
$months = array (1 => 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');
$m = 'January';

// Make the days and years arrays:
$days = range (1, 31);
$years = range (2011, 2021);

// Make the months pull-down menu:
echo '<select name="month">';
foreach ($months as $key => $value) {
	echo "<option value=\"$key\">$value</option>\n";
}
echo '</select>';

// Make the days pull-down menu:
echo '<select name="day">';
foreach ($days as $value) {
	echo "<option value=\"$value\">$value</option>\n";
}
echo '</select>';

// Make the years pull-down menu:
echo '<select name="year">';
foreach ($years as $value) {
	echo "<option value=\"$value\">$value</option>\n";
}
echo '</select>';
?>
<br>
<input type="submit" name="formSubmit" value="Submit" >
</form>

<?php
	if(isset($_POST['formSubmit'])) 
	{
		$mnth = $_POST['month'];
		$dy = $_POST['day'];
		$yr = $_POST['year'];
		//echo "$mnth -- $dy -- $yr";
		echo "<p>The last selected date was $months[$mnth], $dy, $yr.</p>";		
	}
?>

<p id="results"></p>
</body>
</html>