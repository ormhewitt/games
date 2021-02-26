Amplitude.init({
  "songs": [
    {
      "name": "Cool in the Cold",
      "artist": "DJ Cadence",
      "album": "Cool in the Cold",
      "url": "songs/01.mp3",
      "cover_art_url": "album-art/01.png"
    },
    {
      "name": "The Town",
      "artist": "Club Penguin",
      "album": "Club Penguin music",
      "url": "songs/03.mp3",
      "cover_art_url": "album-art/cp.jpg"
    },
    {
      "name": "Box Dimension",
      "artist": "Club Penguin",
      "album": "Club Penguin music",
      "url": "songs/02.mp3",
      "cover_art_url": "album-art/cp.jpg"
    },
    {
      "name": "Puffle Rush",
      "artist": "DJ Cadence",
      "album": "We Wish You A Merry Walrus",
      "url": "songs/04.mp3",
      "cover_art_url": "album-art/04.png"
    },
    {
      "name": "Pizzatron 3000",
      "artist": "Club Penguin",
      "album": "Club Penguin music",
      "url": "songs/05.mp3",
      "cover_art_url": "album-art/cp.jpg"
    },
    {
      "name": "Coffee Shop",
      "artist": "Club Penguin",
      "album": "Club Penguin music",
      "url": "songs/06.mp3",
      "cover_art_url": "album-art/cp.jpg"
    },
    {
      "name": "Recycling Plant",
      "artist": "Club Penguin",
      "album": "Club Penguin music",
      "url": "songs/07.mp3",
      "cover_art_url": "album-art/cp.jpg"
    },
    {
      "name": "EPF Command Room",
      "artist": "Club Penguin",
      "album": "Club Penguin music",
      "url": "songs/08.mp3",
      "cover_art_url": "album-art/cp.jpg"
    }
  ]
});


/*
  Shows the playlist
*/
document.getElementsByClassName('show-playlist')[0].addEventListener('click', function(){
  document.getElementById('white-player-playlist-container').classList.remove('slide-out-top');
  document.getElementById('white-player-playlist-container').classList.add('slide-in-top');
  document.getElementById('white-player-playlist-container').style.display = "block";
});

/*
  Hides the playlist
*/
document.getElementsByClassName('close-playlist')[0].addEventListener('click', function(){
  document.getElementById('white-player-playlist-container').classList.remove('slide-in-top');
  document.getElementById('white-player-playlist-container').classList.add('slide-out-top');
  document.getElementById('white-player-playlist-container').style.display = "none";
});

/*
  Gets all of the add to playlist buttons so we can
  add some event listeners to actually add to playlist.
*/
var addToPlaylistButtons = document.getElementsByClassName('add-to-playlist-button');

for( var i = 0; i < addToPlaylistButtons.length; i++ ){
  /*
    Add an event listener to the add to playlist button.
  */
  addToPlaylistButtons[i].addEventListener('click', function(){
    var songToAddIndex = this.getAttribute('song-to-add');

    /*
      Adds the song to Amplitude, appends the song to the display,
      then rebinds all of the AmplitudeJS elements.
    */
    var newIndex = Amplitude.addSong( songsToAdd[ songToAddIndex ] );
    appendToSongDisplay( songsToAdd[ songToAddIndex ], newIndex );
    Amplitude.bindNewElements();

    /*
      Removes the container that contained the add to playlist button.
    */
    var songToAddRemove = document.querySelector('.song-to-add[song-to-add="'+songToAddIndex+'"]');
    songToAddRemove.parentNode.removeChild( songToAddRemove );
  });
}

/*
  Appends the song to the display.
*/
function appendToSongDisplay( song, index ){
  /*
    Grabs the playlist element we will be appending to.
  */
  var playlistElement = document.querySelector('.white-player-playlist');

  /*
    Creates the playlist song element
  */
  var playlistSong = document.createElement('div');
  playlistSong.setAttribute('class', 'white-player-playlist-song amplitude-song-container amplitude-play-pause');
  playlistSong.setAttribute('data-amplitude-song-index', index);

  /*
    Creates the playlist song image element
  */
  var playlistSongImg = document.createElement('img');
  playlistSongImg.setAttribute('src', song.cover_art_url);

  /*
    Creates the playlist song meta element
  */
  var playlistSongMeta = document.createElement('div');
  playlistSongMeta.setAttribute('class', 'playlist-song-meta');

  /*
    Creates the playlist song name element
  */
  var playlistSongName = document.createElement('span');
  playlistSongName.setAttribute('class', 'playlist-song-name');
  playlistSongName.innerHTML = song.name;

  /*
    Creates the playlist song artist album element
  */
  var playlistSongArtistAlbum = document.createElement('span');
  playlistSongArtistAlbum.setAttribute('class', 'playlist-song-artist');
  playlistSongArtistAlbum.innerHTML = song.artist+' &bull; '+song.album;

  /*
    Appends the name and artist album to the playlist song meta.
  */
  playlistSongMeta.appendChild( playlistSongName );
  playlistSongMeta.appendChild( playlistSongArtistAlbum );

  /*
    Appends the song image and meta to the song element
  */
  playlistSong.appendChild( playlistSongImg );
  playlistSong.appendChild( playlistSongMeta );

  /*
    Appends the song element to the playlist
  */
  playlistElement.appendChild( playlistSong );
}
