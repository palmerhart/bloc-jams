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
      + '   <td class="song-item-number">' + songNumber + '</td>'
      + '   <td class="song-item-title">' + songName + '</td>'
      + '   <td class"song-item-duration">' + songLength + '</td>'
      + '</tr>'
    ;
    
    return template;
};

// new location for #1 below
var albumTitle = document.getElementsByClassName('album-view-title')[0];
var albumArtist = document.getElementsByClassName('album-view-artist')[0];
var albumReleaseInfo = document.getElementsByClassName('album-view-release-info')[0];
var albumImage = document.getElementsByClassName('album-cover-art')[0];
var albumSongList = document.getElementsByClassName('album-view-song-list')[0];

var setCurrentAlbum = function(album) {
    // #1 moved up to global for assignment
    
    // #2
    albumTitle.firstChild.nodeValue = album.title;
    albumArtist.firstChild.nodeValue = album.artist;
    albumReleaseInfo.firstChild.nodeValue = album.year + ' ' + album.label;
    albumImage.setAttribute('src', album.albumArtUrl);
    //#3
    albumSongList.innerHTML = '';
    // #4
    for (var i=0; i <album.songs.length; i++) {
        albumSongList.innerHTML += createSongRow(i + 1, album.songs[i].title, album.songs[i].duration);        
    }
};

window.onload = function() {
    setCurrentAlbum(albumPicasso);
    
    var albums = [albumPicasso, albumMarconi, albumFolsomPrison];
    var index = 1;
    albumImage.addEventListener("click", function(event) {
        setCurrentAlbum(albums[index]);
        index++;
        if (index == albums.length) {
            index = 0;            
        }
    });    
};


