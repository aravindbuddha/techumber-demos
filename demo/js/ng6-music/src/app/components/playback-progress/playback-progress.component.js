import template from './playback-progress.html';
import controller from './playback-progress.controller';
import './playback-progress.css';

let playbackProgressComponent =  {
		bindings: {
			playbackProgress: '<',
		},
		template,
		controller
};

export default playbackProgressComponent;
