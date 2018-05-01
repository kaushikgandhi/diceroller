<?php 

session_id('1234567');
session_start();
if(!isset($_SESSION['data1'])){
	$_SESSION['data1'] = [0,0,0,0,0,0];
	$_SESSION['data2']  = [0,0,0,0,0,0];
	$_SESSION['rolls1'] = [0,0,0,0,0,0];
	$_SESSION['rolls2']  = [0,0,0,0,0,0];
}

?>