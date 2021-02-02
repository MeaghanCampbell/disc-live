// select concert container
var concertSectionEl = document.querySelector('#concert-display')


var submitFindShows = function() {

    var queryString = document.location.search
    var artistName = queryString.split('=')[1];
    var artistName2 = artistName.toLowerCase()

    if (artistName2) {
        fetchBandsData(artistName2)
    }

} 

var fetchBandsData = function(artistName2) {
    
    fetch(
        'https://rest.bandsintown.com/v4/artists/' + artistName2 + '/events?app_id=e6da6370c9375949d1ebfe0713ff02c8'
    )
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        if (data.length === 0) {
            alert('Artist has no upcoming shows')
        } else {
            displayConcertDates(data)
        }
    })
}

// function to display concert dates
var displayConcertDates = function(data) {

    var similarArtistName = document.querySelector('#similar-artist')
    similarArtistName.textContent = ''
    similarArtistName.textContent = data[0].artist.name + ' Upcoming Shows'


    for (let i = 0; i < data.length; i++) {

    var concertBackgroundEl = document.createElement('li')
    concertBackgroundEl.className = 'artist-background'


    var concertCityEl = document.createElement('p')
    concertCityEl.classList.add('song-details')
    concertCityEl.textContent = 'in ' + data[i].venue.city 
    + ' on ' + data[i].datetime 
    //+ ' at ' + data[i].venue.name


    var infoBtnEl = document.createElement('a')
    infoBtnEl.classList.add('shows')
    infoBtnEl.textContent = 'See more info & get tickets'
    infoBtnEl.setAttribute("href", data[i].url);
    infoBtnEl.setAttribute("target", "_blank");
    console.log(data[i].url)

    concertSectionEl.appendChild(concertBackgroundEl)
    concertBackgroundEl.appendChild(concertCityEl)
    concertBackgroundEl.appendChild(infoBtnEl)
    
    }

}

submitFindShows();














