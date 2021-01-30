// select concert container
var concertSectionEl = document.querySelector('#concert-display')


var submitFindShows = function(event) {
    event.preventDefault();
    concertSectionEl.innerHTML = '';

    // get value from artistNameEl
    var artistConcerts = artistNameEl.value.trim();

    if (artistConcerts) {
        fetchBandsData(artistConcerts);
    } 
}

var fetchBandsData = function(artistConcerts) {
    fetch(
        'https://rest.bandsintown.com/v4/artists/{{'
        + artistConcerts
        + '}}events?app_id='
        + 'e6da6370c9375949d1ebfe0713ff02c8'
    )
    .then(function(repsonse) {
        return Response.json();
    })
    .then(function(data) {
        displayConcertDates(data)
    })
}

// function to display concert dates
var displayConcertDates = function(data) {


}







app id: e6da6370c9375949d1ebfe0713ff02c8