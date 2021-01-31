// select search button
var searchBtnEl = document.querySelector('#search-btn')

// select search input
var searchInputEl = document.querySelector('#search-input')

// select artist container
var artistContainerEl = document.querySelector('#similar-artist-container')

// find shows button
var showsBtnEl = document.createElement('button')


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


// listen for search button click
searchBtnEl.addEventListener('click', submitSearch);

// listen for trash button click
artistContainerEl.addEventListener('click', removeArtist)

// listen for find shows button click
//  showsBtnEl.addEventListener('click', findShowsFunction());
  // function findShowsFunction() {
  //   window.location = "./playPage.html"
  // };









