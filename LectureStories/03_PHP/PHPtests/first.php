<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8" />
	<title>Basic PHP Page</title>
</head>
<body>
	<!-- Script 1.2 - first.php -->
	<p>This is standard HTML.</p>
	
<?php
echo 'This is PHP.';
# "\n" is supposed to cause a new-line
echo "\n";
echo 'So is this.';
// another COMMENT
/* and a comment on
two lines */
?>
<br />grr!
<!--<p>and this is the source of this page</p>-->

<?php
	include '../../../php/showSource.php';
	showSource($_SERVER["PHP_SELF"]);
?>

<p><a href="source.php" target="_blank">show source</a></p>

</body>
</html>