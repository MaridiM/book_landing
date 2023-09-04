const supportsAudio = !!document.createElement('audio').canPlayType

if (supportsAudio) {
    // Initialize audio player
    const audio = document.getElementById('audio')
    const player = new Plyr(audio, {
        controls: [
            'restart',
            'play',
            'progress',
            'current-time',
            'duration',
            'mute',
            'volume',
            'download'
        ]
    });


    // Inition playlist and controls
    let index = 0
    let playing = false
    let extension = ''
    const mediaPath = 'assets/audio/'
    const tracks = [
        {
            track: 0,
            name: "Audio Name 1",
            duration: "2:46",
            file: "JLS_ATI"
        },
        {
            track: 1,
            name: "Audio Name 2",
            duration: "2:48",
            file: "AC_ATI"
        },
        {
            track: 2,
            name: "Audio Name 3",
            duration: "5:05",
            file: "SSB12_28_03_ME"
        },
        {
            track: 3,
            name: "Audio Name 3",
            duration: "5:05",
            file: "SSB12_28_03_ME"
        },
        {
            track: 4,
            name: "Audio Name 3",
            duration: "5:05",
            file: "SSB12_28_03_ME"
        },
        {
            track: 5,
            name: "Audio Name 3",
            duration: "5:05",
            file: "SSB12_28_03_ME"
        },
        {
            track: 6,
            name: "Audio Name 3",
            duration: "5:05",
            file: "SSB12_28_03_ME"
        },
        {
            track: 7,
            name: "Audio Name 3",
            duration: "5:05",
            file: "SSB12_28_03_ME"
        },
        {
            track: 8,
            name: "Audio Name 3",
            duration: "5:05",
            file: "SSB12_28_03_ME"
        },
        {
            track: 9,
            name: "Audio Name 3",
            duration: "5:05",
            file: "SSB12_28_03_ME"
        },
        {
            track: 10,
            name: "Audio Name 3",
            duration: "5:05",
            file: "SSB12_28_03_ME"
        },
        {
            track: 11,
            name: "Audio Name 3",
            duration: "5:05",
            file: "SSB12_28_03_ME"
        },
        {
            track: 12,
            name: "Audio Name 3",
            duration: "5:05",
            file: "SSB12_28_03_ME"
        },
        {
            track: 13,
            name: "Audio Name 3",
            duration: "5:05",
            file: "SSB12_28_03_ME"
        },
        {
            track: 14,
            name: "Audio Name 3",
            duration: "5:05",
            file: "SSB12_28_03_ME"
        },
        {
            track: 15,
            name: "Audio Name 3",
            duration: "5:05",
            file: "SSB12_28_03_ME"
        },
        {
            track: 16,
            name: "Audio Name 3",
            duration: "5:05",
            file: "SSB12_28_03_ME"
        },
        {
            track: 17,
            name: "Audio Name 3",
            duration: "5:05",
            file: "SSB12_28_03_ME"
        },
        // ... (remaining track objects)
    ]

    // Build playlist
    const playlist = document.getElementById('playlist')
    tracks.forEach((track, key) => {
        let trackNumber = track.track;
        const trackName = track.name;
        const trackDuration = track.duration;

        if (trackNumber.toString().length === 1) {
            trackNumber = '0' + trackNumber;
        }

        const li = document.createElement('li');
        li.innerHTML = '<div class="playlist-item"> \
            <span class="playlist-number">' + trackNumber + '.</span> \
            <span class="playlist-title">' + trackName + '</span> \
            <span class="playlist-length">' + trackDuration + '</span> \
        </div>';
        li.setAttribute('data-index', trackNumber)
        playlist.appendChild(li);
    })


    const trackCount = tracks.length;
    const nowPlayAction = document.getElementById('now-play-action')
    const nowPlayTitle = document.getElementById('now-play-title')


    // Audio event listeners
    audio.addEventListener('play', function () {
        playing = true;
        nowPlayAction.textContent = 'Now Playing...';
    });

    audio.addEventListener('pause', function () {
        playing = false;
        nowPlayAction.textContent = 'Paused...';
    });

    audio.addEventListener('ended', function () {
        nowPlayAction.textContent = 'Paused...';
        if ((index + 1) < trackCount) {
            index++;
            loadTrack(index);
            audio.play();
        } else {
            audio.pause();
            index = 0;
            loadTrack(index);
        }
    });

    
    // Previous and Next buttons event listeners
    // const btnPrev = document.getElementById('btn-prev');
    // btnPrev.addEventListener('click', function () {
    //     if ((index - 1) > -1) {
    //         index--;
    //         loadTrack(index);
    //         if (playing) {
    //             audio.play();
    //         }
    //     } else {
    //         audio.pause();
    //         index = 0;
    //         loadTrack(index);
    //     }
    // });

    // const btnNext = document.getElementById('btn-next');
    // btnNext.addEventListener('click', function () {
    //     if ((index + 1) < trackCount) {
    //         index++;
    //         loadTrack(index);
    //         if (playing) {
    //             audio.play();
    //         }
    //     } else {
    //         audio.pause();
    //         index = 0;
    //         loadTrack(index);
    //     }
    // });


    // Playlist item click event listener
    const playlistItems = document.querySelectorAll('#playlist li');
    playlistItems.forEach(function (li) {
        li.addEventListener('click', function () {
            const id = parseInt(li.getAttribute('data-index'));
            if (id !== index) {
                playTrack(id);
            }
        });
    });


    // Load and play a track
    function loadTrack(id) {
        const playlistItems = document.querySelectorAll('#playlist li');
        playlistItems.forEach(function (li, i) {
            if (i === id) {
                li.classList.add('playlist-selected');
            } else {
                li.classList.remove('playlist-selected');
            }
        });

        nowPlayTitle.textContent = tracks[id].name;
        index = id;
        audio.src = mediaPath + tracks[id].file + extension;
        updateDownload(id, audio.src);
    }


    // Update download link
    function updateDownload(id, source) {
        player.once('loadedmetadata', function () {
            const downloadLink = document.querySelector('a[data-plyr="download"]');
            downloadLink.href = source;
        });
    }

    // Get total track time
    function getTotalTrackTime(id, source) {
        let durationInSeconds
        player.on('ready', function () {
            durationInSeconds = player.duration;
        })
        return durationInSeconds
    }

    // Play a track
    function playTrack(id) {
        loadTrack(id);
        audio.play();
    }

    // Determine the audio file extension
    extension = audio.canPlayType('audio/mpeg') ? '.mp3' : audio.canPlayType('audio/ogg') ? '.ogg' : '';
    loadTrack(index);

} else {
    // No audio support
    const column = document.querySelector('.column');
    column.classList.add('hidden');
    const noSupport = document.getElementById('audio').textContent;
    const container = document.querySelector('.container');
    const noSupportP = document.createElement('p');
    noSupportP.classList.add('no-support');
    noSupportP.textContent = noSupport;
    container.appendChild(noSupportP);
}