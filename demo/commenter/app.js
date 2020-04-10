/**
* Commenter Module
*
* Description
*/
angular.module('Commenter', ['ngMessages']).
controller('CommentManageCtrl', ['$scope', function ($scope) {
	$scope.comments = [];
	$scope.addComment = function(cmt){
		cmt.avatar = md5(cmt.email.trim().toLowerCase());
		$scope.comments.push(angular.copy(cmt));
	};
}]);