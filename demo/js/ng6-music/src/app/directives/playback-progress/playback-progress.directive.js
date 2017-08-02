import template from './playback-progress.html';
import controller from './playback-progress.controller';
import link from './playback-progress.link';

import './playback-progress.css';

let playbackProgressDirective = function(){
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

export default playbackProgressDirective;
