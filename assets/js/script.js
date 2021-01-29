// select search button
var searchBtnEl = document.querySelector('#search-btn')

// select search input
var searchInputEl = document.querySelector('#search-input')

// select player container
var artistSectionEl = document.querySelector('#similar-artist-display')

// select artist name display
var artistNameDisplay = document.querySelector('#artist-name')

var submitSearch = function(event) {
    event.preventDefault();
    
    // get value from city name input
    var artistName = searchInputEl.value.trim();

    if (artistName) {
        displaySongPlayer(artistName);
        searchInputEl.value = "";
    } else {
        alert('Please enter a valid artist name.')
    }
}

// function to fetch similar artist data here

// function to display player
var displaySongPlayer = function(artistName) {

    artistNameDisplay.textContent = artistName

    for (var i = 0; i < 5; i++) {
    // create player container (ul)
    var artistContainerEl = document.createElement('ul')
    artistContainerEl.classList.add('artist-container')

    // create song background (li)
    var artistBackgroundEl = document.createElement('li')
    artistBackgroundEl.className = 'artist-background'

    // create p element and give it value of songTitle (searched term)
    var artistNameEl = document.createElement('p')
    artistNameEl.classList.add('song-details')
    artistNameEl.textContent = 'similar artist name' // this will be data...[i] to loop through and display 5 similar artists

    // create container for buttons
    var btnContainerEl = document.createElement('div')
    btnContainerEl.classList.add('button-container')

    // create learn button
    var showsBtnEl = document.createElement('button')
    showsBtnEl.classList.add('shows')
    showsBtnEl.textContent = 'Find Shows'

    // create trash button and icon
    var trashBtnEl = document.createElement('button')
    trashBtnEl.classList.add('trash')
    trashBtnEl.classList.add('far')
    trashBtnEl.classList.add('fa-trash-alt')
    // id for trash button so we can target to remove item
    trashBtnEl.setAttribute('id', 'button ' + i)

    // append elements to page
    artistSectionEl.appendChild(artistContainerEl)
    artistContainerEl.appendChild(artistBackgroundEl)
    artistBackgroundEl.appendChild(artistNameEl)
    artistBackgroundEl.appendChild(btnContainerEl)
    btnContainerEl.appendChild(showsBtnEl)
    btnContainerEl.appendChild(trashBtnEl)

    }

    document.getElementById('button 0').addEventListener('click', removeArtist)
    document.getElementById('button 1').addEventListener('click', removeArtist)
    document.getElementById('button 2').addEventListener('click', removeArtist)
    document.getElementById('button 3').addEventListener('click', removeArtist)
    document.getElementById('button 4').addEventListener('click', removeArtist)
}

var removeArtist = function(event) {
    console.log(event.target)
}



// listen for search button click
searchBtnEl.addEventListener('click', submitSearch);


