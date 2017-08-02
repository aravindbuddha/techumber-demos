import angular from 'angular';
import AudioEnded from './audio-ended/audio-ended';
import AudioTimeupdate from './audio-timeupdate/audio-timeupdate';
// import PlaybackProgress from './playback-progress/playback-progress';
import PlayerVolume from './player-volume/player-volume';

let directiveModule = angular.module('app.directives', [
    AudioEnded.name,
    AudioTimeupdate.name,
  
    PlayerVolume.name
]);

export default directiveModule;