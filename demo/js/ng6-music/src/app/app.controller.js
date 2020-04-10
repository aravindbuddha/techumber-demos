import id3 from 'id3js';

class AppController {
    constructor($scope, $http, $interval, $timeout) {
        this.$http = $http;
        this.$scope = $scope;
        this.showLibraryModal = true;
        this.showLoading = false;
        this.libraryFiles = {};
        this.musicLibrary = [];
        this.playlistSongs = [];
        this.volumeLevel = 70;
        this.playerPaused = true;
        this.playbackSong = 'Please select track';
        this.playbackTimeTotal = '00:00';
        this.playbackTimeCurrent = '00:00';
        this.playbackProgress = 0;
    }
    $onInit() {
        this.loadFromServer();
    }

    parseFile(file) {
        id3(file, (err, tags) => {
            var space = "\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000",
                libraryItem;
            
            // if (tags.title == space) {
            //     tags.title = null;
            // }
            // if (tags.artist == space) {
            //     tags.artist = null;
            // }
            // if (tags.album == space) {
            //     tags.album = null;
            // }

            var relFile = file.replace(/^.*(\\|\/|\:)/, '');

            libraryItem = {
                "file": tags.fileName || file,
                "song": tags.title || tags.fileName || relFile,
                "artist": tags.artist || 'Unknown Artist',
                "album": tags.album || 'Unknown Album'
            };

            this.playlistSongs.push(libraryItem);
            this.$scope.$apply();
        });

    }


    loadFromServer(files) {

        var tracks = null;
        this.$http.get('./src/app/tracks.json').then((data) => {
            tracks = data;
            tracks.data.data.forEach((track)=>{
              this.parseFile(track.song);
            });
        });

    };


    playSongOnClick(event) {
        var player = document.getElementById('player'),
            playing = document.querySelector('#playlist-list li.playing'),
            songEl = event.target.parentNode;

        playing && playing.classList.remove('playing');
        songEl.classList.add('playing');
        player.src = songEl.getAttribute('data-filename');
        player.play();

        this.updatePlaybackSongInfo(songEl, songEl.getAttribute('data-requestid'));
    };

    volumeDown() {
        this.volumeLevel = Math.max(this.volumeLevel - 10, 0);
        document.getElementById('player').volume = this.volumeLevel / 100;
    };

    volumeUp() {
        this.volumeLevel = Math.min(this.volumeLevel + 10, 100);
        document.getElementById('player').volume = this.volumeLevel / 100;
    };

    playbackPlayPause() {
        var player = document.getElementById('player');

        if (this.playerPaused === true) {
            this.playerPaused = false;
            player.play();
        } else {
            this.playerPaused = true;
            player.pause();
        }
    };

    playbackPrev() {
        var player = document.getElementById('player'),
            playing = document.querySelector('#playlist-list li.playing'),
            playingPrev = playing && playing.previousElementSibling,
            playlistLast = document.getElementById('playlist-list').lastElementChild;

        if (playingPrev) {
            playing.classList.remove('playing');
            playingPrev.classList.add('playing');
            //playingPrev.scrollIntoView();
            player.src = playingPrev.getAttribute('data-filename');
            player.play();

            this.updatePlaybackSongInfo(playingPrev, playingPrev.getAttribute('data-requestid'));
        } else {
            playing && playing.classList.remove('playing');
            playlistLast.classList.add('playing');
            //playlistLast.scrollIntoView();
            player.src = playlistLast.getAttribute('data-filename');
            player.play();

            this.updatePlaybackSongInfo(playlistLast, playlistLast.getAttribute('data-requestid'));
        }
    };

    playbackNext() {
        var player = document.getElementById('player'),
            playing = document.querySelector('#playlist-list li.playing'),
            playingNext = playing && playing.nextElementSibling,
            playlistFirst = document.getElementById('playlist-list').firstElementChild;

        if (playingNext) {
            playing.classList.remove('playing');
            playingNext.classList.add('playing');
            //playingNext.scrollIntoView();
            player.src = playingNext.getAttribute('data-filename');
            player.play();

            this.updatePlaybackSongInfo(playingNext, playingNext.getAttribute('data-requestid'));
        } else {
            playing && playing.classList.remove('playing');
            playlistFirst.classList.add('playing');
            //playlistFirst.scrollIntoView();
            player.src = playlistFirst.getAttribute('data-filename');
            player.play();
            this.updatePlaybackSongInfo(playlistFirst, playlistFirst.getAttribute('data-requestid'));

        }
    };

    updatePlaybackSongInfo(song, requestId) {
        if (typeof song === 'string') {
            this.playbackSong = song;
        } else {
            this.playbackSong = song.querySelector('.song').innerText;
        }



        this.playerPaused = false;
    };

    _random(min, max) {
        if (max == null) {
            max = min;
            min = 0;
        }
        return min + Math.floor(Math.random() * (max - min + 1));
    };




}

export default AppController;
