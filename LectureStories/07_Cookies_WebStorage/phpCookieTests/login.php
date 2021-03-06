<?php # Ullman Script 12.3 - login.php
// This page processes the login form submission.
// Upon successful login, the user is redirected.
// Two included files are necessary.
// Send NOTHING to the Web browser prior to the setcookie() lines!

$check = false;
// Check if the form has been submitted:
if ($_SERVER['REQUEST_METHOD'] == 'POST') {

	// For processing the login:
	require ('includes/login_functions.inc.php');
	
	// Need the database connection:
	require ('../../../../mysqli_connect.php');
	
	$dbname = 'mysite';
	$q = "USE $dbname";	
	$result = @mysqli_query ($dbc, $q); 
		
	// Check the login:
	list ($check, $data) = check_login($dbc, $_POST['email'], $_POST['pass']);
	
	if ($check) { // OK!
		
		// Set the cookies:
		//setcookie (name, value, expiration, path, host, secure, httponly);
		setcookie ('user_id', $data['user_id']);
		setcookie ('first_name', $data['first_name']);
		//setcookie ('user_id', $data['user_id'], time()+3600, '/', '', 0, 0);
		//setcookie ('first_name', $data['first_name'], time()+3600, '/', '', 0, 0);
		
		// Redirect:
		redirect_user('loggedin.php');
			
	} else { // Unsuccessful!

		// Assign $data to $errors for error reporting
		// in the login_page.inc.php file.
		$errors = $data;

	}
		
	mysqli_close($dbc); // Close the database connection.

} // End of the main submit conditional.

// Create the page:
include ('includes/login_page.inc.php');
?>