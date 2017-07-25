import angular from 'angular';
import '@uirouter/angularjs';
import AudioTimeupdateDirective from './audio-timeupdate.directive';

let audioTimeupdateModule = angular.module('audio-timeupdate', [
        'ui.router'
    ])
    .directive('audioTimeupdate', AudioTimeupdateDirective);

export default audioTimeupdateModule;