import template from './player-volume.html';
import controller from './player-volume.controller';
import link from './player-volume.link';
import './player-volume.css';

let playerVolumeDirective = function(){
	return {
		template,
		controller,
		link,
		restrict: 'A',
		controllerAs: 'vm',
		scope: {},
		bindToController: true
	};
};

export default playerVolumeDirective;
