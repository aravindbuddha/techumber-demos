import angular from 'angular';
import '@uirouter/angularjs';
import PlayerVolumeDirective from './player-volume.directive';

let playerVolumeModule = angular.module('player-volume', [
        'ui.router'
    ])
    .directive('playerVolume', PlayerVolumeDirective);

export default playerVolumeModule;