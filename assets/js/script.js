// select search button
var searchBtnEl = document.querySelector('#search-btn')

// select search input
var searchInputEl = document.querySelector('#search-input')

// select player container
var playerSectionEl = document.querySelector('#song-display')

var submitSearch = function(event) {
    event.preventDefault();
    
    // get value from city name input
    var songTitle = searchInputEl.value.trim();

    if (songTitle) {
        displaySongPlayer(songTitle);
        searchInputEl.value = "";
    } else {
        alert('Please enter a song title')
    }
}

// function to fetch spotify data here

// function to display player
var displaySongPlayer = function(songTitle) {

    // create player container (ul)
    var playerContainerEl = document.createElement('ul')
    playerContainerEl.classList.add('player-container')

    // create song background (li)
    var songBackgroundEl = document.createElement('li')
    songBackgroundEl.className = 'song-background'

    // create p element and give it value of songTitle (searched term)
    var songTitleEl = document.createElement('p')
    songTitleEl.classList.add('song-details')
    songTitleEl.textContent = songTitle

    // create container for buttons
    var btnContainerEl = document.createElement('div')
    btnContainerEl.classList.add('button-container')

    // create learn button
    var learnBtnEl = document.createElement('button')
    learnBtnEl.classList.add('learn')
    learnBtnEl.textContent = 'Learn to Play!'

    // create trash button and icon
    var trashBtnEl = document.createElement('button')
    trashBtnEl.classList.add('trash')
    trashBtnEl.classList.add('far')
    trashBtnEl.classList.add('fa-trash-alt')

    // append elements to page
    playerSectionEl.appendChild(playerContainerEl)
    playerContainerEl.appendChild(songBackgroundEl)
    songBackgroundEl.appendChild(songTitleEl)
    songBackgroundEl.appendChild(btnContainerEl)
    btnContainerEl.appendChild(learnBtnEl)
    btnContainerEl.appendChild(trashBtnEl)

}

// listen for search button click
searchBtnEl.addEventListener('click', submitSearch);
