import template from './audio-timeupdate.html';
import controller from './audio-timeupdate.controller';
import './audio-timeupdate.css';

let audioTimeupdateDirective = function(){
	return {
		template,
		controller,
		restrict: 'E',
		controllerAs: 'vm',
		scope: {},
		bindToController: true
	};
};

export default audioTimeupdateDirective;
