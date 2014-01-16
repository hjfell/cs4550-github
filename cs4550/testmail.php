<?php
$efrom = "From: Harriet Fell <fell@cs4550.com>\r\n";
mail(
'', // your email address
'E-Mail Subject', // email subject
'This is an email sent from MAMP', // email body
$efrom . "\r\n"// additional headers
);
?>