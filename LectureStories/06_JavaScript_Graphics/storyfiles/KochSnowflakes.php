<!DOCTYPE html>

<!--
    File: LectureStories/06_JavaScript_Graphics/storyfiles/KochSnowFlakes.php
    
    Copyright 2013
    Harriet Fell
    College of Computer and Information Science
    Northeastern University, Boston, MA 02115
    
    
    February 21, 2013
-->

<html>
<head>
    <meta charset="utf-8" />
    <title>Koch Snowflakes</title>
    
    <link rel="Stylesheet" type="text/css" href="../../../../story/css/slide.css" />    
    <link rel="Stylesheet" type="text/css" href="../../../../story/css/screen.css"
          media="screen" />    
    <link rel="Stylesheet" type="text/css" href="../../../../story/css/print.css"
          media="print" />
    
    <style type="text/css">
	  .code {
	  	font-weight: bold;
	  	color: #00f;
	  	font-family: "Consolas", "Lucida Console", "Courier New", "Andale Mono", monospace;
	  }
	  .code:hover {
    	background-color: #ffff88;
	  }
	  </style>
</head>
<body>

<div class="pad">

<h1 class="center">Koch Snowflakes</h1>
<p><a href="../JSGraphicsTests/koch.html" target="_blank">koch.html</a></p>
<p>Six Koch snowflakes are shown along a slanted path. The recursive function that draws a single snowflake is in the file koch.js.</p>
<p><a href="../JSGraphicsTests/koch.js" target="_blank">koch.js</a></p>
<p>This function
<pre><code>	
	// Draw a level-n Koch Snowflake fractal on the canvas context c,
	// with lower-left corner at (x,y) and side length len.
	function snowflake(c, n, x, y, len)
</code></pre>
<p>must perform several transformations on the graphics context, e.g rotations between the legs and scaling before recursive calls. It must frequently save the state of the canvas context context and restore the state after some drawing.</p>

<p>koch.html source</p>
<?php
show_source("../JSGraphicsTests/koch.html");
?>

</p>
</div>
</body>
</html>
