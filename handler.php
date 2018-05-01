<?php

session_id('1234567');
session_start();

if(!is_null($_POST['data'])){
	$_SESSION['data1'] = $_POST['data']['data1'];
	$_SESSION['data2']  = $_POST['data']['data2'];
	$_SESSION['rolls1'] = $_POST['data']['rolls1'];
	$_SESSION['rolls2']  = $_POST['data']['rolls2'];
}else{
	
}
header('Content-type:application/json;charset=utf-8');
$json =  json_encode(array("data1"=>$_SESSION['data1'] ,"data2"=>$_SESSION['data2'] ,"rolls1"=>$_SESSION['rolls1'] ,"rolls2"=>$_SESSION['rolls2'] ));
echo $json;

?>