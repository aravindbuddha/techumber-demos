function audioTimeupdateLink($scope, element) {
  var playerelement = element[0];

  element.bind('timeupdate', function() {
      var currentSeconds = (Math.floor(playerelement.currentTime % 60) < 10 ? '0' : '') + Math.floor(playerelement.currentTime % 60),
          currentMinutes = Math.floor(playerelement.currentTime / 60),
          totalSeconds = (Math.floor(playerelement.duration % 60) < 10 ? '0' : '') + Math.floor(playerelement.duration % 60),
          totalMinutes = Math.floor(playerelement.duration / 60),
          percentageOfSong = ((playerelement.currentTime * 100) / playerelement.duration).toFixed(1);

      $scope.playbackTimeCurrent = currentMinutes + ':' + currentSeconds;
      $scope.playbackTimeTotal = totalMinutes + ':' + totalSeconds;
      $scope.playbackProgress = percentageOfSong;
      $scope.$apply();
  });
}

export default audioTimeupdateLink;
