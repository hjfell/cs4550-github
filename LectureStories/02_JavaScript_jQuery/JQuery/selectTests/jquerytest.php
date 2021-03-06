<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8" />
	<title>jQuery Sample 1</title>
	<link rel="stylesheet" type="text/css" media="screen" href="../css/base.css" />
	 <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script> 
	<script type="text/javascript" src="script.js"></script> 
</head>
<body>
<h1>
	JQuery Sample 1
</h1>
<p>
	Suggested Reading: <em>JQuery: Novice to Ninja</em> by Earle Castledine & Craig Sharkie
</p>

<h3>Basic syntax is: $(selector).action()</h3>
<ul>
<li>A dollar sign to define jQuery</li>
<li>A (selector) to "query (or find)" HTML elements</li>
<li>A jQuery action() to be performed on the element(s)</li>
</ul>
<p>This <a href="">link</a> doesn't go anywhere but it brings up an alert message if you click on it and then reloads this page.</p>
 
<p>
	This text is in a <code>&lt;p&gt;</code>.  If you click on it, all the text in <code>&lt;p&gt;</code>s will turn red.
</p>
<h2>
	List of Fruits: They will change color if you click on any item: alternating green and red, blue for selected.  
</h2>
<ol id="fruits">
	<li>Apples</li>
	<li>Bananas</li>
	<li>Cantaloupes</li>
	<li>Dates</li>
	<li>Elderberries</li>
	<li>Figs</li>
	<li>Grapes</li>
</ol>

<table id="animals" border="1">
	<thead>
		<tr>
			<th>Animals</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>antelope</td>
		</tr>
		<tr>
			<td>bear</td>
		</tr>
		<tr>
			<td>cat</td>
		</tr>
		<tr>
			<td>dog</td>
		</tr>
		<tr>
			<td>elephant</td>
		</tr>
	</tbody>
</table>

<?php
	include '../../../../php/showSource.php';
	showSource($_SERVER["PHP_SELF"]);
?>

<p><a href="source.php" target="_blank">show source</a></p>

<p><a href="script.js" target="_blank">script.js</a></p>
</body>
</html>
