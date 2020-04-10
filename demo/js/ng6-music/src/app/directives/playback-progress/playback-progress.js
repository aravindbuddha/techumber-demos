import angular from 'angular';
import '@uirouter/angularjs';
import PlaybackProgressDirective from './playback-progress.directive';

let playbackProgressModule = angular.module('playback-progress', [
        'ui.router'
    ])
    .directive('playbackProgress', PlaybackProgressDirective);

export default playbackProgressModule;