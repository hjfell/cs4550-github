<!DOCTYPE html>

<!--
    File: LectureStories/07_Cookies_LocalStorage/storyfiles/cookies_vs_sessions.htm
    
    Copyright 2013
    Harriet Fell
    College of Computer and Information Science
    Northeastern University, Boston, MA 02115
    
    
    February 28, 2013
-->

<html>
<head>
    <meta charset="utf-8" />
    <title>PHP Cookies vs Sessions</title>
    
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

<h1 class="center">PHP Cookies vs. Sessions
</h1>
<ul>
<li>Both care available in PHP</li>
<li>Both can store data across pages on your site.</li>
<li>Differences</li>
<li>Cookies can be set to a long lifespan, months if not years.</li> 
<li>Cookies have their data stored on the client and work smoothly when you have a cluster of web servers.</li>
<li>Sessions are stored on the server, meaning in one of your web servers handles the first request, the other web servers in your cluster will not have the stored information.</li>
<li>Sessions are stored on the server, which means clients do not have access to the information you store about them and they can't edit the information by hand.</li>
<li>Session data, being stored on your server, does not need to be transmitted with each page; clients just need to send an ID and the data is loaded from the local file.</li>
<li>Sessions can be any size you want because they are held on your server.</li>
<li>Many web browsers have a limit on how big cookies can be to stop rogue web sites chewing up gigabytes on your machine.</li>
</ul>

<p>Do you want your data to work as soon as your visitor as comes back the next day? <br />
	If "yes" then <b>cookies</b> are your choice.<br />	
	<p>
<p>Do you have any  sensitive information?<br /> 
	If "yes" then use a <b>database</b> and a <b>cookie</b> to store an ID number to reference the data.</p>
<p>Do you need semi-permanent data?<br />
	If "no" then <b>sessions</b> are generally preferred.
	<ul>
	<li>They are a little easier to use.</li>
	<li>They do not require their data to be sent in entirety with each page.</li>
	<li>They are  cleaned up as soon as your visitor closes their web browser.</li>
	</ul>
</p>



<p class="center">reference, <a href="http://www.tuxradar.com/practicalphp/10/1/0">TuxRadar Cookies vs. Sessions</a></p>

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
