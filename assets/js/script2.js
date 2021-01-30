// select concert container
var concertSectionEl = document.querySelector('#concert-display')

var submitFindShows = function(event) {
    event.preventDefault();
    concertSectionEl.innerHTML = '';

    // get value from artistNameEl
    var artistConcerts = artistNameEl.value.trim();
    
}
