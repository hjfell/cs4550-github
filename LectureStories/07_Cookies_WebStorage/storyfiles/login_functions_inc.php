﻿<!DOCTYPE html>

<!--
    File: LectureStories/07_Cookies_LocalStorage/storyfiles/login_functions_inc.htm
    
    Copyright 2013
    Harriet Fell
    College of Computer and Information Science
    Northeastern University, Boston, MA 02115
    
    
    February 28, 2013
-->

<html>
<head>
    <meta charset="utf-8" />
    <title>Login Functions - login_functions.inc.php Source</title>
    
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

<h1 class="center">
Login Functions - login_functions.inc.php Source
</h1>

<p>Why is the initial <code>&lt;?php</code> not closed?</p>

<?php
	show_source("../phpCookieTests/includes/login_functions.inc.php");
?>

<p class="center">material from Larry Ullman, <em>PHP and MySQL for Dynamic Web Sites, Fourth Edition</em></p>

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
