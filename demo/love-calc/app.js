/**
* LoveCalc Module
*
* Description
*/
angular.module('LoveCalc', ['ngMessages','n3-pie-chart']).
controller('LoveCalcCtrl', ['$scope','$http', function ($scope,$http) {
	$scope.gauge_data = [
	    {label: "", value: 0, suffix: "%", color: "steelblue"}
	];  
	$scope.gauge_options = {thickness: 5, mode: "gauge", total: 100};
	$scope.getResult=function(data){
		$scope.isProcessing = true;
		$http.get('process.php?fname='+data.fname.replace(/ /g,'')+'&sname='+data.sname.replace(/ /g,''))
		.then(function(res){
			$scope.isProcessing = false;
			$scope.gauge_data[0].value= res.data.percentage;
			$scope.gauge_data[0].label = res.data.result;
		});
	};
}]);

