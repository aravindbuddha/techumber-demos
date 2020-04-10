function playbackProgressLink($scope, element) {
    element.bind('click', function(e) {
        var player = document.getElementById('player'),
            percent = (e.offsetX / this.clientWidth).toFixed(2) * 100;
        element.find('span').css('width', '20%');
        
        if (!isNaN(player.duration)) {
            player.currentTime = (percent * player.duration) / 100;
        }
    });
}

export default playbackProgressLink;