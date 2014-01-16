<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8" />
	<title>PHP Strings</title>
</head>
<body>
<?php # variables.php -->
	// Create some string variables
	$firstName = 'Harriet';
	$lastName = 'Fell';
	$university = 'Northeastern University';
	$bigString ="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in eros vulputate mi convallis pretium pretium ut nibh. Sed quis facilisis nisl. Cras congue cursus facilisis. Duis cursus purus ac arcu ullamcorper hendrerit posuere urna fringilla. Suspendisse feugiat porta diam, quis convallis lectus cursus quis. Nam odio sem, convallis quis mattis vel, egestas sed dolor. Sed dapibus tempus nulla vel mollis. Proin odio tortor, blandit at porta non, elementum et nisi.

Etiam at urna nisi. Etiam rutrum pellentesque purus, bibendum feugiat ligula semper a. Phasellus ullamcorper euismod sapien, id placerat lorem varius eu. Ut eleifend pulvinar dui vel blandit. Donec quis odio sed tellus accumsan fringilla in eu lectus. In hac habitasse platea dictumst. Curabitur iaculis lorem eu lectus tristique viverra. Nam dictum elit in tellus varius placerat. Nullam euismod aliquet ligula eu aliquet. Duis quis ipsum arcu.

Proin porttitor blandit erat, gravida viverra risus condimentum ut. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed pulvinar magna dictum nulla luctus eu consectetur risus congue. Integer pulvinar egestas odio, sed suscipit massa vestibulum et. Proin sed tortor ligula. Sed aliquet vestibulum condimentum. Donec eu dui mi, at blandit est. Sed nec leo nisi, laoreet ultrices mi. Aliquam erat volutpat. Integer vehicula nisl id elit porttitor nec consectetur nunc porta. In hac habitasse platea dictumst. Sed quis mauris massa. Nulla eget velit ac mauris tincidunt sodales a vel risus. Ut ultrices dolor non dui molestie et consequat massa commodo. Duis et lorem vitae nunc blandit tempor. Proin rutrum, orci malesuada faucibus viverra, felis sapien facilisis ligula, a tempor diam nisl id mi.

Proin dui nunc, tempus sit amet tincidunt quis, viverra at urna. Nulla condimentum erat nec neque mattis dignissim. Vivamus nec felis nulla, ut posuere erat. Aliquam a vulputate est. Curabitur vel arcu urna, consequat venenatis risus. Nulla pharetra nisi eget libero feugiat sit amet porttitor risus pellentesque. Vestibulum vehicula dictum sodales. Cras accumsan tellus eget nibh dignissim sed ullamcorper lorem malesuada. Donec placerat odio sit amet dolor tristique suscipit. Proin elit turpis, sollicitudin eu molestie at, euismod eget neque. Sed id nisi vel neque tristique scelerisque. Nullam nulla elit, viverra eu sollicitudin nec, imperdiet sit amet enim.

Fusce iaculis volutpat tortor, vel ullamcorper ante pulvinar ac. Aenean commodo auctor eros ac volutpat. Donec ut orci vel nibh commodo venenatis id vel quam. Pellentesque et felis eget nisl suscipit vulputate vitae eget ligula. Fusce non elit vitae enim sagittis ullamcorper iaculis quis erat. Pellentesque ut purus dolor, nec malesuada dolor. Vivamus feugiat iaculis odio, non faucibus tortor adipiscing non. Suspendisse quis quam arcu, ut imperdiet magna. In feugiat cursus malesuada. Maecenas a mi eget dolor iaculis aliquet. In convallis laoreet nulla ut viverra. Aliquam varius congue justo, vitae gravida purus dictum eu. Duis a turpis arcu. Aliquam vitae urna nec ipsum vestibulum interdum sed ut purus.";
	
	// Print a header and the values
	echo "<h3>PHP String Variables</h3>
	<p>$firstName $lastName is a professor at <strong>$university</strong></p>";
	
	echo "<p>This is one long string - in principal, there are no limits.</p>
	$bigString";
	
	//concatenate my first and last names
	$myName = $firstName . ' ' . $lastName;
	echo "<h3>Concatenation</h3>
	\$myName = \$firstName . ' ' . \$lastName
	<br />echo \$myName;
	<br />results in: $myName";	
	
	echo "<h3>Some String Functions</h3>";
	echo 'strlen($myName) = ';
	echo strlen($myName);
	
	echo '<br />crypt($myName) = ';
	echo crypt($myName);
	echo '<br />crypt($myName,"salt") = ';
	echo crypt($myName,'salt');
	echo '<br />crypt($myName,"sugar") = ';
	echo crypt($myName,'sugar');
	echo '<br />crypt($myName) = ';
	echo crypt($myName);
	echo '<br />crypt($myName,"salt") = ';
	echo crypt($myName,'salt');
	echo '<br />\$myName[3] = ';
	echo $myName[5];
	
	echo "<p><strong>There is a difference between \" and \'.</strong></p>";
	$var = 703;
	echo "\": var is equal to $var<br />";
	echo '\': var is equal to $var<br />';
?>

<h3>Reference:</h3>
<ul>
<li><a href="http://php.net/manual/en/ref.strings.php">PHP Manual - strings</a> for string functions.</li>
</ul>
	
<?php
	include '../../../php/showSource.php';
	showSource($_SERVER["PHP_SELF"]);
?>

<p><a href="source.php" target=_blank">show source</a></p>
</body>
</html>