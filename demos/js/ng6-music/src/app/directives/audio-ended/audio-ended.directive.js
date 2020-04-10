import template from './audio-ended.html';
import controller from './audio-ended.controller';
import link from './audio-ended.link';
import './audio-ended.css';

let audioEndedDirective = function(){
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

export default audioEndedDirective;
