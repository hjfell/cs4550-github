<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8" />
	<title>Delete Mouse from users</title>
</head>
<body>
<p>Delete Mouse from users</p>
	
<?php
// Connect to MySQL
	//require ('../../../mysqli_connect.php'); // for iPage
	require ('../../../../mysqli_connect.php'); 

$dbname = 'mysite';

// Select the database:
	$q = "USE $dbname";	
	$r = @mysqli_query ($dbc, $q); 

if ($r) {
	echo "<p>using $dbname</p>";
}

// Delete rows with last name "Mouse"
$q = "DELETE from users WHERE last_name='Mouse'";
$r = @mysqli_query ($dbc, $q); // Run the query.

if ($r) {
	echo "DELETED all instances of Mickey, Mouse from users..";
}

?>

</body>
</html>