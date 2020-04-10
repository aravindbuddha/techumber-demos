import angular from 'angular';
import VolumeControlComponent from './volume-control.component';

let volumeControlModule = angular.module('volume-control', [
    ])
   .component('volumeControl', VolumeControlComponent);

export default volumeControlModule;
