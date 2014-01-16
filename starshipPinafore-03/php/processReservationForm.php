<?php
 
// Clean up the input values
foreach($_POST as $key => $value) {
  if(ini_get('magic_quotes_gpc'))
    $_POST[$key] = stripslashes($_POST[$key]);
 
  $_POST[$key] = htmlspecialchars(strip_tags($_POST[$key]));
}
 
// Assign the input values to variables for easy reference
$name = $_POST["name"];
$email = $_POST["email"];
//$pid = $_POST["pid"];
$startdt = $_POST["startdt"];
$enddt = $_POST["enddt"];
$room = $_POST["room"];
 
// Test input values for errors
$errors = array();
if(strlen($name) < 2) {
  if(!$name) {
    $errors[] = "You must enter a name.";
  } else {
    $errors[] = "Name must be at least 2 characters.";
  }
}
if(!$email) {
  $errors[] = "You must enter an email.";
} else if(!validEmail($email)) {
  $errors[] = "You must enter a valid email.";
}
if($pid != "guest42") {
    $errors[] = "Just enter 'guest32'.";
}

if (478000 >= $startdt) {
	$errors[] = "Start date must be stardate 478000 or later.";
} else if($startdt > $enddt) {
	$errors[] = "End date must be after after Start date.";
}
 
if($errors) {
  // Output errors and die with a failure message
  $errortext = "";
  foreach($errors as $error) {
    $errortext .= "<li>".$error."</li>";
  }
  die("<span class='failure'>The following errors occured:<ul>". $errortext ."</ul></span>");
}

// Get for room id

// Check availability
// email if already booked

// else
// Check for known client
// if not known, add to client Database

// add to reservation database


 
// Send the email
$theRoom = "Quark's Bar";
if ($room == "HD") {
	$theRoom = "the Holodeck";
}
else if ($room == "BT") {
	$theRoom = "the Bajoran Temple";
}
$myemail = "fell@ccs.neu.edu";
$to = "$email";
$subject = "Contact Form: $name";
$message = "You have requested a reservation for $theRoom from stardate $startdt to stardate $enddt.";
$headers = "From: $myemail"; //"From: fell@ccs.neu.edu"; //"From: $email";
 
mail($to, $subject, $message, $headers);
 
// Die with a success message
die("<span class='success'>Success! Your reservation request has been submitted.<br />
You will receive an email confirming your request.</span>");
 
// A function that checks to see if
// an email is valid
function validEmail($email)
{
   $isValid = true;
   $atIndex = strrpos($email, "@");
   if (is_bool($atIndex) && !$atIndex)
   {
      $isValid = false;
   }
   else
   {
      $domain = substr($email, $atIndex+1);
      $local = substr($email, 0, $atIndex);
      $localLen = strlen($local);
      $domainLen = strlen($domain);
      if ($localLen < 1 || $localLen > 64)
      {
         // local part length exceeded
         $isValid = false;
      }
      else if ($domainLen < 1 || $domainLen > 255)
      {
         // domain part length exceeded
         $isValid = false;
      }
      else if ($local[0] == '.' || $local[$localLen-1] == '.')
      {
         // local part starts or ends with '.'
         $isValid = false;
      }
      else if (preg_match('/\\.\\./', $local))
      {
         // local part has two consecutive dots
         $isValid = false;
      }
      else if (!preg_match('/^[A-Za-z0-9\\-\\.]+$/', $domain))
      {
         // character not valid in domain part
         $isValid = false;
      }
      else if (preg_match('/\\.\\./', $domain))
      {
         // domain part has two consecutive dots
         $isValid = false;
      }
      else if(!preg_match('/^(\\\\.|[A-Za-z0-9!#%&`_=\\/$\'*+?^{}|~.-])+$/',
                 str_replace("\\\\","",$local)))
      {
         // character not valid in local part unless
         // local part is quoted
         if (!preg_match('/^"(\\\\"|[^"])+"$/',
             str_replace("\\\\","",$local)))
         {
            $isValid = false;
         }
      }
      if ($isValid && !(checkdnsrr($domain,"MX") || checkdnsrr($domain,"A")))
      {
         // domain not found in DNS
         $isValid = false;
      }
   }
   return $isValid;
}
 
?>