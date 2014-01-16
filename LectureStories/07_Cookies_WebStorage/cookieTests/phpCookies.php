<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8" />
	<title>Untitled</title>
</head>
<body>
<?php
if (isset($_COOKIE["user"]))
  echo "Welcome " . $_COOKIE["user"] . "!<br>";
else
echo '<form action="handle_form.php" method="get">
	<fieldset><legend>Enter name below:</legend>	
	<p><label>Name: <input type="text" name="name" size="20" maxlength="40" /></label></p>	
	</fieldset>	
	<p style="text-align:center;"><input type="submit" name="submit" value="Submit" /></p>
</form>'

?>

</body>
</html>

<html>