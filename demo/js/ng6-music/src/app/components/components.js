import angular from 'angular';
import PlaybackProgress from './playback-progress/playback-progress';
import UixMusic from './uix-music/uix-music';

let componentModule = angular.module('app.components', [
	PlaybackProgress.name,
	UixMusic.name
]);

export default componentModule;
