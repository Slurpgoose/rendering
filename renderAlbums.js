const PLAY_ICON =`<img class="play-icon" src="https://img.icons8.com/metro/420/play.png"></img>`

function renderAlbums(albums) {
    var artist_name;
    var album_title;
    albums.map(element =>{
        artist_name = getTitle(element.artist);
        album_title = getAlbumn(element.albums);});
    return `
        <div class="main">
        ${artist_name}
        ${album_title}
        </div>
    `
}

function getTitle(title) {
    return `<h1>${title}</h1>
            <hr>`
}

function getAlbumn(artist) {
    var albums = artist.map(element => {
        songs = getSongs(element.songs);
        return `<div><span><img src="${element.albumCover}"></img></span><span><h3>${element.title}</h3></span>${songs}</span></div>`}).join("");
    return albums
};

function getSongs(album) {
    songs = album.map(element =>{
        return `<tr>
        <td class="song-title"><span>${PLAY_ICON}</span>${element.title}</td>
        <td class="song-length">${element.length}</td> 
      </tr>`;
    }).join("");
    return  `<table><tr></tr>${songs}</table>`

}

function albums() {
    var content = document.getElementById('content');

    var albumsAbstraction = [
        {
            artist: "Creed",
            albums: [
                {
                    title: "My Own Prison",
                    albumCover: "https://images-na.ssl-images-amazon.com/images/I/51Y5ZCMV2QL.jpg",
                    songs: [
                        {
                            title: "Torn",
                            length: "6:25"
                        },
                        {
                            title: "Ode",
                            length: "4:58"
                        },
                        {
                            title: "My Own Prison",
                            length: "5:00"
                        },
                        {
                            title: "Pity for a Dime",
                            length: "4:37"
                        },
                        {
                            title: "In America",
                            length: "3:38"
                        },
                        {
                            title: "Illusion",
                            length: "5:29"
                        }
                    ]

                },
                {
                    title: "Weathered",
                    albumCover: "https://is5-ssl.mzstatic.com/image/thumb/Music22/v4/b1/a4/a9/b1a4a9dd-ecda-6233-07da-f53848d37bdf/mzm.qakvcpwo.jpg/1200x630bb.jpg",
                    songs: [
                        {
                            title: "Bullets",
                            length: "6:25"
                        },
                        {
                            title: "Freedom Fighter",
                            length: "4:58"
                        },
                        {
                            title: "Who's Got My Back?",
                            length: "5:00"
                        },
                        {
                            title: "Signs",
                            length: "4:37"
                        },
                        {
                            title: "One Last Breath",
                            length: "3:38"
                        },
                        {
                            title: "My Sacrifice",
                            length: "5:29"
                        }
                    ]
                }
            ]
        }
    ]

    content.innerHTML = renderAlbums(albumsAbstraction);

}