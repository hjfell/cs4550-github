<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8" />
	<title>Untitled</title>
</head>
<body>
<?php
	$email='"fel!(")l@ccs.neu.edu';
	$atIndex = strrpos($email, "@");
	echo "is_bool ".is_bool($atIndex)."<br />";
	echo "!atIndex ".!$atIndex."<br />";
	
	$domain = substr($email, $atIndex+1);
    $local = substr($email, 0, $atIndex);
    echo "domain ".$domain."<br />";
    echo "local ".$local."<br />";
    
    if(!preg_match('/^(\\\\.|[A-Za-z0-9!#%&`_=\\/$\'*+?^{}|~.-])+$/',
                 str_replace("\\\\","",$local)))
      {
         // character not valid in local part unless
         // local part is quoted
         if (!preg_match('/^"(\\\\"|[^"])+"$/',
             str_replace("\\\\","",$local)))
             	echo "local after quoted  ".$local."<br />";
        echo "local after replace ".$local."<br />";
      }
    
?>
</body>
</html>
