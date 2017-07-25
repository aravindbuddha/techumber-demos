import angular from 'angular';
import About from './about/about';
import PlaybackProgress from './playback-progress/playback-progress';

let componentModule = angular.module('app.components', [
	PlaybackProgress.name
]);

export default componentModule;