<?php # Starship Pinafore Account Registration
echo '<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8" />
	<title>Starship Pinafore Account Registration</title>
	<link rel="stylesheet" href="../css/starship.css"> 
	<script type="text/javascript" src="../js/jquery.min.js"></script>
    <script type="text/javascript" src="../js/jquery.validate.js"></script>
    <script type="text/javascript" src="../js/jquery.form.js"></script>
    <script type="text/javascript" src="../js/reservation.js"></script>
  	<style>
  		span.cal {font-family:Lucida Calligraphy,Comic Sans MS,sans-serif;}
  	</style>
</head>
<body>
<a id="TOP"></a>
<div class="navbar">
<ul class="navbar">
  <li><a href="../index.html">Back to Starship Pinafore Home</a></li>
</ul>
</div>

<!-- Titlebar -->
<div class="titlebar">
<h1><em>Starship Pinafore Account Registration</em></h1> 
</div>

<!-- Main content --> 
<div class="main"> 
<div id="wrap">';

// This script performs an INSERT query to add a record to the users table.

// Connect to MySQL.	
	//require ('../../mysqli_connect.php'); //iPage
	require ('../../../mysqli_connect.php');
	
// Select the database:
	$q = "USE sp_reserve";	
	$r = @mysqli_query ($dbc, $q); 
//echo "<p>connected to sp_reserve</p>";

// Check for form submission:
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
		
	$errors = array(); // Initialize an error array.
	
	// Check for a name:
	if (empty($_POST['name'])) {
		$errors[] = 'You forgot to enter your first name.';
	} else {
		// $fn = trim($_POST['name']);
		$thename = mysqli_real_escape_string($dbc, trim($_POST['name']));
	}
		
	// Check for an email address:
	if (empty($_POST['email'])) {
		$errors[] = 'You forgot to enter your email address.';
	} else {
		$e = mysqli_real_escape_string($dbc, trim($_POST['email']));
		// Check that the email address is not already used:
		$q = "SELECT user_id FROM users WHERE email = '$e'";
		$r = @mysqli_query ($dbc, $q); // Run the query.
		$n = mysqli_num_rows($r);
		if ($n > 0) {
			//echo "<p>The email address $e is already in use.</p>";
			$errors[] = "The email address $e is already in use.";
		}
	}     
	
	// Check for a password and match against the confirmed password:
	if (!empty($_POST['pass1'])) {
		if ($_POST['pass1'] != $_POST['pass2']) {
			$errors[] = 'Your password did not match the confirmed password.';
		} else {
			$p = mysqli_real_escape_string($dbc, trim($_POST['pass1']));
		}
	} else {
		$errors[] = 'You forgot to enter your password.';
	}
	
	if (empty($errors)) { // If everything's OK.
	
		// Register the user in the database...
		// Run the query.
		$q = "INSERT INTO users (name, email, pass, registration_date) VALUES ('$thename', '$e', SHA1('$p'), NOW() )";		
		$r = @mysqli_query ($dbc, $q); 
		if ($r) { // If it ran OK.
		
			// Print a message:
			echo '<h1>Thank you!</h1>
		<p>You are now registered. In Chapter 12 you will actually be able to log in!</p><p><br /></p>';	
		
		} else { // If it did not run OK.
			
			// Public message:
			echo '<h1>System Error</h1>
			<p class="error">You could not be registered due to a system error. We apologize for any inconvenience.</p>'; 
			
			// Debugging message:
			echo '<p>' . mysqli_error($dbc) . '<br /><br />Query: ' . $q . '</p>';
						
		} // End of if ($r) IF.
		
		mysqli_close($dbc); // Close the database connection.

		exit();
		
	} else { // Report the errors.
	
		echo '<h1>Error!</h1>
		<p class="error">The following error(s) occurred:<br />';
		foreach ($errors as $msg) { // Print each error.
			echo " - $msg<br />\n";
		}
		echo '</p><p>Please try again.</p><p><br /></p>';
		
	} // End of if (empty($errors)) IF.
	
	mysqli_close($dbc); // Close the database connection.

} // End of the main Submit conditional.
?>
<h1>Register</h1>
<form action="PinaforeAccountApp.php" method="post">
	<p>Name: <input type="text" name="name" size="30" maxlength="40" value="<?php if (isset($_POST['first_name'])) echo $_POST['name']; ?>" /></p>
	<p>Email Address: <input type="text" name="email" size="20" maxlength="60" value="<?php if (isset($_POST['email'])) echo $_POST['email']; ?>"  /> </p>
	<p>Password: <input type="password" name="pass1" size="10" maxlength="20" value="<?php if (isset($_POST['pass1'])) echo $_POST['pass1']; ?>"  /></p>
	<p>Confirm Password: <input type="password" name="pass2" size="10" maxlength="20" value="<?php if (isset($_POST['pass2'])) echo $_POST['pass2']; ?>"  /></p>
	<p><input type="submit" name="submit" value="Register" /></p>
</form>

<p><a href="credits.html" target="_blank">Credits</a>  ------
		Last Updated:&nbsp; <em>
		<script type="text/javascript">
//<![CDATA[
<!--
document.write(document.lastModified)
// -->
//]]>
		</script>
		</em> 
</p>

</div>
</div>

<script type="text/javascript">
  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-36140223-1']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();
</script>
</body>
</html>