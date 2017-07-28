import template from './playback-control.html';
import controller from './playback-control.controller';
import './playback-control.css';

let playbackControlComponent = {
    bindings: {
        playbackPrev: '&',
        playbackNext: '&',
        playbackPlayPause: '&'
    },
    template,
	controller
};

export default playbackControlComponent;
