import angular from 'angular';
import '@uirouter/angularjs';
import PlaybackControlComponent from './playback-control.component';

let playbackControlModule = angular.module('playback-control', [
        'ui.router'
    ])
    /* // uncomment this foor rute
    .config(($stateProvider, $urlRouterProvider)=>{
    	$urlRouterProvider.otherwise('/');

    	$stateProvider
    		.state('playback-control', {
    			url: '/',
    			template: '<playback-control></playback-control>'
    		});
    })
    */
    .component('playbackControl', PlaybackControlComponent);

export default playbackControlModule;