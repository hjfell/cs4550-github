<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8" />
	<title>Form Feedback</title>
</head>
<body>

<?php # Script 2.5 - handle_form.php #4

// Print the submitted information:
if ( !empty($_POST['name']) && !empty($_POST['comments']) && !empty($_POST['email']) ) {
	if ( isset($_REQUEST['gender'])) {
		$gender = $_REQUEST['gender'];
	} else {
		$gender = NULL;
	}
	if ($gender == 'M')
		$title = "Mr. ";
	elseif ($gender == 'F')
		$title = "Ms. ";
	else 
		$title = "";
	
		
	echo "<p>Thank you, <b>$title {$_POST['name']}</b>, for the following comments:<br />
	<tt>{$_POST['comments']}</tt></p>
	<p>We will reply to you at <i>{$_POST['email']}</i>.</p>\n";
	
} else { // Missing form value.
	echo '<p>Please go back and fill out the form again.</p>';
}
?>

</body>
</html>