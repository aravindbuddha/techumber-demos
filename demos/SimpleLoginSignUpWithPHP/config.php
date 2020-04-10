<?php
/*--------------------------------------------------------------------------------------------
|	@desc:		config.php
|	@author:	Aravind Buddha
|	@url:		http://www.techumber.com
|	@date:		15 August 2008
|	@license:	Free! to Share,copy, distribute and transmit , 
|               but i'll be glad if i my name listed in the credits'
---------------------------------------------------------------------------------------------*/
$server = 'localhost';//mysql server name
$user = 'root';       //mysql user name
$pass = '';            //mysql password
$db = 'techumber';     //database name
$tbl_name="User";      //table name
 //Connectin to database
$con = mysql_connect($server, $user, $pass) or die ("Could not connect to server ... \n" . mysql_error ());
 //Selecting db
 mysql_select_db($db) or die ("Could not connect to database ... \n" . mysql_error ());

//crateing table
 mysql_query("CREATE TABLE IF NOT EXISTS`".$tbl_name."` (
`id` int(4) NOT NULL auto_increment,
`username` varchar(65) NOT NULL default '',
`pass` varchar(65) NOT NULL default '',
PRIMARY KEY (`id`)
) TYPE=MyISAM AUTO_INCREMENT=2");

