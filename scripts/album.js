// example album
var albumPicasso = {
    title: 'The Colors',
    artist: 'Pablo Picasso',
    label: 'Cubism',
    year: '1881',
    albumArtUrl: 'assets/images/album_covers/01.png',
    songs: [
        { title: 'Blue', duration: '4:26' },
        { title: 'Green', duration: '3:14' },
        { title: 'Red', duration: '5:01' },
        { title: 'Pink', duration: '3:21' },
        { title: 'Magenta', duration: '2:15' }        
    ]
};

// Another Ex. Album
var albumMarconi = {
    title: 'The Telephone',
    artist: 'Guglielmo Marconi',
    label: 'EM',
    year: '1909',
    albumArtUrl: 'assets/images/album_covers/20.png',
    songs: [
        { title: 'Hello, Operator?', duration: '1:01' },
        { title: 'Ring, ring, ring', duration: '5:01' },
        { title: 'Fits in your pocket', duration: '3:21' },
        { title: 'Can you hear me now?', duration: '3:14' },
        { title: 'Wrong phone number', duration: '2:15' }
    ]
};

//PH assignment "3rd object"
var albumFolsomPrison = {
    title: 'At Folsom Prison',
    artist: 'Johnny Cash',
    label: 'Columbia',
    year: '1968',
    albumArtUrl: 'assets/images/album_covers/cash.png',
    songs: [
        { title: 'Folsom Prison Blues', duration: '2:42' },
        { title: 'Dark as a Dungeon', duration: '3:05' },
        { title: 'I Still Miss Someone', duration: '1:38' },
        { title: 'Cocaine Blues', duration: '3:01' },
        { title: '25 Minutes to Go', duration: '3:31' }
    ]
};

var createSongRow = function (songNumber, songName, songLength) {
    var template = 
        '<tr class="album-view-song-item">'
      + '   <td class="song-item-number" data-song-number="' + songNumber + '">' + songNumber + '</td>'
      + '   <td class="song-item-title">' + songName + '</td>'
      + '   <td class"song-item-duration">' + songLength + '</td>'
      + '</tr>'
    ;
    
    var $row = $(template);
    
    var clickHandler = function() {
        // clickHandler logic
        var songNumber = $(this).attr('data-song-number');
        
        //If any song is playing
        if (currentlyPlayingSong !== null) {
            var currentlyPlayingCell = $('.song-item-number[data-song-number="' + currentlyPlayingSong + '"]');
            currentlyPlayingCell.html(currentlyPlayingSong);                             
        }
        //If it's not the song playing, start playing song, then make it the pause button
        if (currentlyPlayingSong !== songNumber) {
            $(this).html(pauseButtonTemplate);
            currentlyPlayingSong = songNumber;
        } else if (currentlyPlayingSong === songNumber) {
        //If it is the song playing, Pause it then make it the play button
            $(this).html(playButtonTemplate);
            currentlyPlayingSong = null;
        }
    };
    
    var onHover = function(event) {
        //placeholder for function logic
        var songNumberCell = $(this).find('.song-item-number');
        var songNumber = songNumberCell.attr('data-song-number');
        
        if (songNumber !== currentlyPlayingSong) {
            songNumberCell.html(playButtonTemplate);
        }
    };
    
    var offHover = function(event) {
        //placeholder for function logic
        var songNumberCell = $(this).find('.song-item-number');
        var songNumber = songNumberCell.attr('data-song-number');
        
        if (songNumber !== currentlyPlayingSong) {
            songNumberCell.html(songNumber);
        }
    };
    
    $row.find('.song-item-number').click(clickHandler);    
    $row.hover(onHover, offHover);   
    return $row;
};


var setCurrentAlbum = function(album) {
    // #1 
    var $albumTitle = $('.album-view-title');
    var $albumArtist = $('album-view-artist');
    var $albumReleaseInfo = $('album-view-release-info');
    var $albumImage = $('.album-cover-art');
    var $albumSongList = $('.album-view-song-list');
    // #2
    $albumTitle.text(album.title);
    $albumArtist.text(album.artist);
    $albumReleaseInfo.text(album.year + ' ' + album.label);
    $albumImage.attr('src', album.albumArtUrl);
    //#3
    $albumSongList.empty();
    // #4
    for (var i=0; i <album.songs.length; i++) {
        var $newRow = createSongRow(i + 1, album.songs[i].title, album.songs[i].duration);
        $albumSongList.append($newRow);
    }
};

//Album button templates
var playButtonTemplate = '<a class="album-song-button"><span class="ion-play"></span></a>';
var pauseButtonTemplate = '<a class="album-song-button"><span class="ion-pause"></span></a>';

//Store state of playing songs
var currentlyPlayingSong = null;

$(document).ready(function() {
    setCurrentAlbum(albumPicasso);
    
 });