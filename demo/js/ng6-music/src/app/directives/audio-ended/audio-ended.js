import angular from 'angular';
import '@uirouter/angularjs';
import AudioEndedDirective from './audio-ended.directive';

let audioEndedModule = angular.module('audio-ended', [
        'ui.router'
    ])
    .directive('audioEnded', AudioEndedDirective);

export default audioEndedModule;