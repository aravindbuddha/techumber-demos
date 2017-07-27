class PlaybackProgressController {
	constructor(){
	}
	
	$onInit() {
		this.playbackProgress = '0';		
	}

	onSeek(e) {
		var 
        clientWidth = e.target.offsetWidth,
        player = document.getElementById('player'),
        percent = (e.offsetX / clientWidth).toFixed(2) * 100;
        this.playbackProgress = percent;

        if (!isNaN(player.duration)) {
            player.currentTime = (percent * player.duration) / 100;
        }
	}
	
}


export default PlaybackProgressController;
