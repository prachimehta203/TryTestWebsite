<?php
require 'connect.php';

$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
	{
		
	$request = json_decode($postdata);


	
	$name = mysqli_real_escape_string($con, trim($request->name));
	$email = mysqli_real_escape_string($con, trim($request->email));
	$phone = mysqli_real_escape_string($con, trim($request->phone));
	$message = mysqli_real_escape_string($con, trim($request->message));
	


	$sql = "INSERT INTO `feedback` (
			`Name`,
			`Email`,
			`Phone`,
			`Message`
			
			) VALUES 
			(
				'{$name}',
				'{$email}',
				'{$phone}',
				'{$message}'
				
			)";

	if(mysqli_query($con,$sql)){
		http_response_code(201);
	}

	else{
		http_response_code(422);
	}
			
}

?>
