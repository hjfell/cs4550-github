<?php # Script 9.4 - view_users.php
// With minor changes by Harriet Fell - January 2013
// This script retrieves all the records from the users table.

$page_title = 'View the Current Users';
include ('includes/header.html');

// Page header:
echo '<h1>Registered Users</h1>';

// Connect to MySQL.
	//require ('../../../../mysqli_connect.php'); 	// for iPage
	require ('../../../../../mysqli_connect.php'); 

// Select the database:
	$q = "USE mysite";	
	$r = @mysqli_query ($dbc, $q); 

// Make the query:
$q = "SELECT CONCAT(last_name, ', ', first_name) AS name, DATE_FORMAT(registration_date, '%M %d, %Y') AS dr FROM users ORDER BY registration_date ASC";	
//$sql = 'SELECT * FROM `users` LIMIT 0, 30 ';	
$r = @mysqli_query ($dbc, $q); // Run the query.
// Count the number of returned rows.
$num = mysqli_num_rows($r);

// Print the number of users
echo "<p>There are currently $num users.</p>";

if ($r) { // If it ran OK, display the records.

	// Table header.
	echo '<table align="center" cellspacing="3" cellpadding="3" width="75%">
	<tr><th align="left">Name</th><th align="left">Date Registered</th></tr>
';
	
	// Fetch and print all the records:
	while ($row = mysqli_fetch_array($r, MYSQLI_ASSOC)) {
		echo '<tr><td align="left">' . $row['name'] . '</td><td align="left">' . $row['dr'] . '</td></tr>
		';
	}

	echo '</table>'; // Close the table.
	
	mysqli_free_result ($r); // Free up the resources.	

} else { // If it did not run OK.

	// Public message:
	echo '<p class="error">The current users could not be retrieved. We apologize for any inconvenience.</p>';
	
	// Debugging message:
	echo '<p>' . mysqli_error($dbc) . '<br /><br />Query: ' . $q . '</p>';
	
} // End of if ($r) IF.

mysqli_close($dbc); // Close the database connection.

include ('includes/footer.html');
?>