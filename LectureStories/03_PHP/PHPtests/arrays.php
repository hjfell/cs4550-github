<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8" />
	<title>Multidimensional Arrays</title>
	<style>
		p.serif{font-family:"Times New Roman",Times,serif;}
		p.sansserif{font-family:Arial,Helvetica,sans-serif;}
		p.monospace{font-family:Courier,monospace;}
		span.monospace{font-family:Courier,monospace;}
	</style>
</head>
<body>
<p>Based on Larry Ullman, <i>PHP and MySQL for Dynamic Web Sites, Fourth Edition</i> Chapter 2 on arrays and Script 2.7 - multi.php</p> 
<h3>Some Tests</h3>
<pre>
$names = array('Moe', 'Larry','Curly');
foreach ($names as $k => $v) {
		echo &quot;&lt;li&gt;$k - $v&lt;/li&gt;\n&quot;;
	}
</pre>
<?php
$names = array('Moe', 'Larry','Curly');
foreach ($names as $k => $v) {
		echo "<li>$k - $v</li>\n";
	}
?>
<pre>
sort($names);
</pre>
<?php
sort($names);
foreach ($names as $k => $v) {
		echo "<li>$k - $v</li>\n";
	}
?>
<p>Note that the key-value relationship has changed.</p>

<pre>
$names = array('Moe', 'Larry','Curly');
asort($names);
</pre>
<?php
$names = array('Moe', 'Larry','Curly');
asort($names);
foreach ($names as $k => $v) {
		echo "<li>$k - $v</li>\n";
	}
?>
<p>Here the key-value relationship was maintained and the sort was by value.</p>

<pre>
ksort($names);
</pre>
<?php
ksort($names);
foreach ($names as $k => $v) {
		echo "<li>$k - $v</li>\n";
	}
?>
<p>This time, the sort was by key and they are back in their original order.</p>
<span class="monospace">rsort(), arsort(),</span> and <span class="monospace">krsort()</span> do the corresponding reverse sorts.

<p>An array of Numbers and some sorts</p>
<?php
$numbers = array(343, 52, 71, 2, 107, 99, 24, 62, 117, 42);
foreach ($numbers as $k => $v) {
		echo "<li>$k - $v</li>\n";
	}
?>
<p>Sorted with <span class="monospace">natsort()</span</p>
<?php
natsort($numbers);
foreach ($numbers as $k => $v) {
		echo "<li>$k - $v</li>\n";
	}
?>

<p>Mixed up again with <span class="monospace">shuffle()</span</p>
<?php
shuffle($numbers);
foreach ($numbers as $k => $v) {
		echo "<li>$k - $v</li>\n";
	}
?>
<p>And:  Mixed up again with <span class="monospace">shuffle()</span</p>
<?php
shuffle($numbers);
foreach ($numbers as $k => $v) {
		echo "<li>$k - $v</li>\n";
	}
?>
<h3>----------------<br />Some North American States, Provinces, and Territories:</h3>
<?php # Script 2.7 - multi.php

// Create one array:
$mexico = array(
'YU' => 'Yucatan', 
'BC' => 'Baja California',
'OA' => 'Oaxaca'
);

// Create another array:
$us = array (
'MD' => 'Maryland',
'IL' => 'Illinois',
'PA' => 'Pennsylvania',
'IA' => 'Iowa'
);

// Create a third array:
$canada = array (
'QC' => 'Quebec', 
'AB' => 'Alberta',
'NT' => 'Northwest Territories',
'YT' => 'Yukon',
'PE' => 'Prince Edward Island'
);

// Combine the arrays:
$n_america = array(
'Mexico' => $mexico,
'United States' => $us,
'Canada' => $canada
);

//ksort($n_america);

// Loop through the countries:
foreach ($n_america as $country => $list) {

	// Print a heading:
	echo "<h2>$country</h2><ul>";
	
	// Print each state, province, or territory:
	foreach ($list as $k => $v) {
		echo "<li>$k - $v</li>\n";
	}
	
	// Close the list:
	echo '</ul>';

} // End of main FOREACH.

?>

<?php
	include '../../../php/showSource.php';
	showSource($_SERVER["PHP_SELF"]);
?>

<p><a href="source.php" target="_blank">show source</a></p>
</body>
</html>