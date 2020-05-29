<?php
require 'connect.php';

$token = null;
$headers = apache_request_headers();
$postdata = file_get_contents("php://input");


if(isset($postdata) && !empty($postdata))
{
	$request = json_decode($postdata);
	$username = $request->username;
	$password = $request->password;
	$email = $request->email;

	$sql = "SELECT username,password FROM signin where username='$username' and email='$email' and password='$password' ";
	$result = mysqli_query($con,$sql);
	$rows = mysqli_num_rows($result);
	if($rows>0)
	{
		echo json_encode(array(
			"message" => "Successful Login!",
			"token" => 'Bearer-jsdfnkj223',
			"email" => $username,

		));
		http_response_code(200);
		
		
		
	}
	else{
		//http_response_code(401);
		echo json_encode(array("message" => "Login Failed!"));
	}
}
?>