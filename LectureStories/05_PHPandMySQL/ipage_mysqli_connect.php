<?php 
$link = @mysql_connect('../../cs4550com.ipagemysql.com', 'fell', 'mypassword'); 
if (!$link) { 
    die('Could not connect: ' . mysql_error()); 
} 
echo 'Connected successfully'; 
mysql_select_db(mysite); 
?>