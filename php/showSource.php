<?php 
function showSource($url){
	$currentFile = $url; //$_SERVER["PHP_SELF"];
	$parts = Explode('/', $currentFile);
	$currentFile  = $parts[count($parts) - 1]; // just the local name
	$html_file_name = "source.php";  // when this is a function, have it return a file name
	//if (file_exists($html_file_name))
		$fp = fopen($html_file_name, "w+"); 
	//else
	//	$fp = fopen($html_file_name, "x+");
	$src = highlight_file($currentFile, true);
	fwrite($fp, $src); 
	fclose($fp);
}
?>
