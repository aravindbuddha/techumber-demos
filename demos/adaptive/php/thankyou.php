<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<script type="text/javascript">
	<?php
	$arr=array(
		"status"=>"success",
		"response"=>"Succesful paypal transaction"
		);
	?>
		parent.paypal.procssResponse(<?php print_r(json_encode($arr)); ?>);
	</script>
</body>
</html>