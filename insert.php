<?php
require 'connect.php';

$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
	{	
	$request = json_decode($postdata);
	$userName = mysqli_real_escape_string($con, trim($request->userName));
	$password = mysqli_real_escape_string($con, trim($request->password));
	$firstName = mysqli_real_escape_string($con, trim($request->firstName));
	$lastName = mysqli_real_escape_string($con, trim($request->lastName));
	$email = mysqli_real_escape_string($con, trim($request->email));
	$sql = "INSERT INTO signin (
			username,
			password,
			firstname,
			lastname,
			email
			) VALUES 
			(
				'{$userName}',
				'{$password}',
				'{$firstName}',
				'{$lastName}',
				'{$email}'

			)";

	if(mysqli_query($con,$sql)){
		http_response_code(201);
	}

	else{
		http_response_code(422);
	}
			
}

?>
