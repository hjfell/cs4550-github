<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8" />
	<title>Predefined Variables</title>
</head>
<body>
<?php # Script 1.5 - predefined.php

// Create a variable to credit the source
$source = '"PHP and MySQL for Dynamic Web Sites: Visual QuickPro Guide (4th Edition)" by Larry E. Ullman';

// Create a shorthand version of the variable names:
$host = $_SERVER['HTTP_HOST'];
$file = $_SERVER['SCRIPT_FILENAME'];
$user = $_SERVER['HTTP_USER_AGENT'];
$server = $_SERVER['SERVER_SOFTWARE'];
$page_path = $_SERVER["PHP_SELF"];
$parts = Explode('/', $page_path);
$page_name = $parts[count($parts) - 1]; 

// Print the name the host:
echo "<p>The host is<br /><b>$host</b>.</p>\n";

// Print the name of this script:
echo "<p>You are running the file:<br /><b>$file</b>.</p>\n";

// Print the user's information:
echo "<p>You are viewing this page using:<br /><b>$user</b>.</p>\n";

// Print the server's information:
echo "<p>This server is running:<br /><b>$server</b>.</p>\n";

// Print the version of PHP using predefined constant.
echo "<p>The server is running version <b>" . PHP_VERSION . "</b> of PHP on the <b>" . PHP_OS . "</b> operating system.</p>";

// Print the current file full path
echo "<p>The full path of this page is:<br /><b>$page_path</b>.</p>\n";

// Print the current file name
echo "<p>The file name of this page is:<br /><b>$page_name</b>.</p>\n";

// Print the source reference
echo "<p>based on code in $source</p>";

?>

<?php
	include '../../../php/showSource.php';
	showSource($_SERVER["PHP_SELF"]);
?>

<p><a href="source.php" target="_blank">show source</a></p>
</body>
</html>