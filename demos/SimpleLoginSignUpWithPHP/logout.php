<?php
/*--------------------------------------------------------------------------------------------
|	@desc:		logout.php
|	@author:	Aravind Buddha
|	@url:		http://www.techumber.com
|	@date:		29 August 2008
|	@license:	Free!, to Share,copy, distribute and transmit , 
|               but i'll be glad if i my name listed in the credits'
---------------------------------------------------------------------------------------------*/
session_start();
session_destroy();
header("location:index.php");