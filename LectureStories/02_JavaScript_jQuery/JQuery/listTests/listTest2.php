<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8" />
	<title>JQUERY List Test 2</title>
	<link rel="stylesheet" href="../css/base.css" type="text/css" media="screen" />
	<link rel="stylesheet" href="style.css" type="text/css" media="screen" />
	<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
	<script src="../lib/jquery-ui-1.8.17.custom.min.js" type="text/javascript"></script>	
	<script src="script.js" type="text/javascript"></script>
</head>
<body>
<div id="container">
	<div id="header">
		<h1>
			JQUERY List Test 2
		</h1>
		<p>Similar to samples found in <em>JQuery: Novice to Ninja</em> by Earle Castledine &amp; Craig Sharkie</p>
	</div>
	<div id="content">
		<h2>
			Fruits
		</h2>
		<p>Now the JQuery, shown below, is in <a href="script.js" target="_blank">script.js</a>.</p>
<pre>
$(document).ready(function() {
	$('#fruits').selectable({
		stop: function() {
		// The user stopped selecting!
		var names = $.map($('.ui-selected, this'), function(element, i) {
			return $(element).text();
		});
  
		$('li', this)
		.filter(function() {
		  return ($.inArray($(this).text(), names) != -1);
		})
		.addClass('ui-selected');
		}
	});
});
</pre>
		<p>Try clicking on "Grapes."</p>
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

<p><a href="source.php" target="_blank">show source</a></p>

</body>
</html>
