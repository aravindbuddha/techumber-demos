function audoEndedLink($scope, element) {
    element.bind('ended', function() {
        $scope.playbackNext();
    });
}

export default audoEndedLink;
