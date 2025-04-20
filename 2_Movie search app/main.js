let film = '';
let list = [];
const inputNode = document.getElementById('input');
const btnNode = document.getElementById('inputBtn');
const listNode = document.getElementById('list');


btnNode.addEventListener('click', function(){
    getFilmFromUser();
    renderlist();
});


function getFilmFromUser() {
    if (!inputNode.value) {
        console.log(`Необходима валидация`);
        return;
    }
    film = inputNode.value;
    clearInput();
};

function clearInput() {
    inputNode.value = '';
};

async function renderlist () {
    const res = await fetch(`http://www.omdbapi.com/?s=${film}&apikey=2e380f8c`);
    const listJson = await res.json();
    list = listJson.Search;
    
    let ListHTML = '';
    list.forEach(element => {
        ListHTML += 
        `<li class="listOfFilms_resultStr">
       
        <div><img src="${element.Poster}" alt="" class="listOfFilms_resultStr_poster"></div>
        <div class="listOfFilms_resultStr_title">${element.Title}</div>
        <div class="listOfFilms_resultStr_year">${element.Year}</div>
        <div class="listOfFilms_resultStr_type">${element.Type}</div>
        
        </li>`;
    });
    listNode.innerHTML = `<ol>${ListHTML}</ol>`;
};

