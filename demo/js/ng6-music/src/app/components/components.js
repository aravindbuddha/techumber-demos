import angular from 'angular';
import PlaybackProgress from './playback-progress/playback-progress';
import VolumeControl from './volume-control/volume-control';

import UixMusic from './uix-music/uix-music';


let componentModule = angular.module('app.components', [
	PlaybackProgress.name,
	UixMusic.name,
    VolumeControl.name
]);

export default componentModule;
