import angular from 'angular';
import PlaybackProgressComponent from './playback-progress.component';

let playbackProgressModule = angular.module('playback-progress', [])
.component('playbackProgress', PlaybackProgressComponent);

export default playbackProgressModule;
