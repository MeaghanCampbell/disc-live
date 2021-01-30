// select search button
var searchBtnEl = document.querySelector('#search-btn')

// select search input
var searchInputEl = document.querySelector('#search-input')

// select artist container
var artistContainerEl = document.querySelector('#similar-artist-container')

// find shows button
var showsBtnEl = document.createElement('button')

// select concert container
var concertSectionEl = document.querySelector('#concert-display')



var submitSearch = function(event) {
    event.preventDefault();
    artistContainerEl.innerHTML = '';
    
    // get value from artist name input
    var artistName = searchInputEl.value.trim();

    if (artistName) {
        fetchTasteData(artistName);
        searchInputEl.value = "";
    } else {
        alert('Please enter a valid artist name.')
    }  
}

var fetchTasteData = function(artistName) {
  fetch(
    'https://cors-anywhere.herokuapp.com/https://tastedive.com/api/similar?q='
    + artistName 
    + '&k=400870-concertf-X0IO40ZG'
  )
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    displaySongPlayer(data)
   
  })
}

// function to display artist
var displaySongPlayer = function(data) {

    var artistNameDisplay = document.querySelector('#searched-artist')
    artistNameDisplay.textContent = ''
    artistNameDisplay.textContent = data.Similar.Info[0].Name

    for (let i = 0; i < 5; i++) {

    // create artist background (li)
    var artistBackgroundEl = document.createElement('li')
    artistBackgroundEl.className = 'artist-background'
    artistBackgroundEl.setAttribute('id', 'container-' + i)

    // create p element and give it value of songTitle (searched term)
    var artistNameEl = document.createElement('p')
    artistNameEl.classList.add('song-details')
    artistNameEl.textContent = data.Similar.Results[i].Name 

    // create container for buttons
    var btnContainerEl = document.createElement('div')
    btnContainerEl.classList.add('button-container')

    // create find shows button
    var showsBtnEl = document.createElement('button')
    showsBtnEl.classList.add('shows')
    showsBtnEl.textContent = 'Find Shows'

    // create trash button and icon
    var trashBtnEl = document.createElement('button')
    trashBtnEl.classList.add('trash')
    trashBtnEl.classList.add('far')
    trashBtnEl.classList.add('fa-trash-alt')
    // id for trash button so we can target to remove item
    trashBtnEl.setAttribute('id', 'button-' + i)
    trashBtnEl.addEventListener('click', function(e) {
      removeArtist(e, i)
    })

    // append elements to page
    artistContainerEl.appendChild(artistBackgroundEl)
    artistBackgroundEl.appendChild(artistNameEl)
    artistBackgroundEl.appendChild(btnContainerEl)
    btnContainerEl.appendChild(showsBtnEl)
    btnContainerEl.appendChild(trashBtnEl)

    }

}

var removeArtist = function(event, i) {

event.stopPropagation()
var element = document.getElementById('container-' + i)
var button = document.getElementById('button-' + i)

if (event.target === button) {
  element.remove()
}

}





// SECOND PAGE
var submitFindShows = function(event) {
  event.preventDefault();
  concertSectionEl.innerHTML = '';

  // get value from artistNameEl
  var artistConcerts = artistNameEl.value.trim();

  if (artistConcerts) {
      fetchBandsData(artistConcerts);
      artistNameEl.value = "";
  } 
}

var fetchBandsData = function(artistConcerts) {
  fetch(
      'https://rest.bandsintown.com/v4/artists/'
      + artistConcerts
      + '/events?app_id='
      + 'e6da6370c9375949d1ebfe0713ff02c8'
  )
  .then(function(response) {
      return response.json();
  })
  .then(function(data) {
      displayConcertDates(data)
  })
}

// function to display concert dates
var displayConcertDates = function(data) {

  var similarArtistName = document.querySelector('#similar-artist')
  // similarArtistName.textContent=''
  // similarArtistName.textContent = 

  for (let i = 0; i < 5; i++) {

  // create concert background (li)

  // create p element and give it value of 
  }

}





// listen for search button click
searchBtnEl.addEventListener('click', submitSearch);

// listen for find shows button click
showsBtnEl.addEventListener('click', submitFindShows);
console.log(submitFindShows);

// listen for trash button click
artistContainerEl.addEventListener('click', removeArtist)








