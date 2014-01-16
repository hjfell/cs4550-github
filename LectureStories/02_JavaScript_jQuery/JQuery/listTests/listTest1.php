<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8" />
	<title>JQUERY List Test 1</title>
	<link rel="stylesheet" href="../css/base.css" type="text/css" media="screen" />
	<link rel="stylesheet" href="style.css" type="text/css" media="screen" />
	<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
	<script src="../lib/jquery-ui-1.8.17.custom.min.js" type="text/javascript"></script> 	
	<script>
		$(document).ready(function() {
  			$('#fruits').selectable();
		});
	</script>
</head>
<body>
<div id="container">
	<div id="header">
		<h1>
			JQUERY List Test 1
		</h1>
		<p>Similar to samples found in <em>JQuery: Novice to Ninja</em> by Earle Castledine &amp; Craig Sharkie</p>
	</div>
	<div id="content">
		<h2>
			Fruits
		</h2>
		<p>This really is a list, not a table.</p>
		<pre>
		&lt;ul id="fruits"&gt;
		</pre>
		The css for this class is in <a href="style.css" target="_blank">style.css</a>
		<p>Click on an item and watch what happens when you have the mouse down and when you release it. You can select contiguous items by lassoing them.  You can select non-contiguous items by using holding the control key down when you click.
		<p>This Jquery command made the list items selectable.</p>
		<pre>
		$(document).ready(function() {
  			$('#fruits').selectable();
		});
		</pre>
		<ul id="fruits">
			<li>Apples</li>
			<li>Bananas</li>
			<li>Dates</li>
			<li>Grapes</li>
			<li>Cantaloupes</li>
			<li>Dates</li>
			<li>Elderberries</li>
			<li>Figs</li>
			<li>Bananas</li>
			<li>Cantaloupes</li>
			<li>Dates</li>
			<li>Grapes</li>
			<li>Grapes</li>
			<li>Cantaloupes</li>
			<li>Dates</li>
		</ul>
	</div>
</div>

<?php
	include '../../../../php/showSource.php';
	showSource($_SERVER["PHP_SELF"]);
?>

<p><a href="source.php" target=_blank">show source</a></p>

<p><a href="style.css">style.css</a></p>
<p><a href="script.js">script.js</a></p>

</body>
</html>
