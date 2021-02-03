// select search button
var searchBtnEl = document.querySelector('#search-btn')

// select search input
var searchInputEl = document.querySelector('#search-input')

// select artist container
var artistContainerEl = document.querySelector('#similar-artist-container')

// find shows button
var showsBtnEl = document.createElement('button')

//select recent searched artist
var recentSearch = localStorage.getItem ("storedArtist")

//function to run if there are recent searches

var searchRecentFunction = function () {
  if (recentSearch) {
    artistName = localStorage.getItem ("storedArtist")
    fetchTasteData(artistName);
  
}
}

// Modal
var openmodal = document.querySelectorAll('.modal-open')
for (var i = 0; i < openmodal.length; i++) {
  openmodal[i].addEventListener('click', function(event){
  event.preventDefault()
  toggleModal()
  })
}

const overlay = document.querySelector('.modal-overlay')
overlay.addEventListener('click', toggleModal)

var closemodal = document.querySelectorAll('.modal-close')
for (var i = 0; i < closemodal.length; i++) {
  closemodal[i].addEventListener('click', toggleModal)
}

document.onkeydown = function(evt) {
  evt = evt || window.event
  var isEscape = false
  if ("key" in evt) {
  isEscape = (evt.key === "Escape" || evt.key === "Esc")
  } else {
  isEscape = (evt.keyCode === 27)
  }
  if (isEscape && document.body.classList.contains('modal-active')) {
  toggleModal()
  }
};

function toggleModal () {
  const body = document.querySelector('body')
  const modal = document.querySelector('.modal')
  modal.classList.toggle('opacity-0')
  modal.classList.toggle('pointer-events-none')
  body.classList.toggle('modal-active')
}


// search function
var submitSearch = function(event) {
    event.preventDefault();
    artistContainerEl.innerHTML = '';
    
    // get value from artist name input
    var artistName = searchInputEl.value.trim();

    if (artistName) {
        fetchTasteData(artistName);
        searchInputEl.value = "";
        
        // store input to local storage
        localStorage.setItem("storedArtist", artistName);
    } 
    //else {
        //alert('Please enter a valid artist name.')
    //}  
}

// search by enter btn
var pressEnter = document.getElementById('search-input');
pressEnter.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById('search-btn').click();
  }
});


var fetchTasteData = function(artistName) {
  fetch(
    'https://ee-cors.herokuapp.com/https://tastedive.com/api/similar?q='
    + artistName 
    + '&k=400870-concertf-X0IO40ZG'
    
  )
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    if (data.Similar.Info[0].Type === 'unknown') {
      alert('Please enter a valid artist name.')
  } else {
    displaySongPlayer(data)
   
  }
   
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
    var showsBtnEl = document.createElement('a')
    showsBtnEl.classList.add('shows')
    showsBtnEl.textContent = 'Find Shows'
    showsBtnEl.setAttribute('href', './playPage.html?q=' + artistNameEl.textContent);

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



// Run function for recent  search, load
searchRecentFunction ()



