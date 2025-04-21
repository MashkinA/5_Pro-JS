let film = '';
let list = [];
const inputNode = document.getElementById('input');
const btnNode = document.getElementById('inputBtn');
const listNode = document.getElementById('list');
const popUpNode = document.getElementById('filmPopUp');
popUpNode.close();

let filmInfoNode = [];

btnNode.addEventListener('click', function(){
    getFilmFromUser();

    searchFilm();
});



function getFilmFromUser() {
    if (!inputNode.value) {
        inputNode.placeholder='Необходимо ввести название фильма';
        return
    }
    film = inputNode.value;
    clearInput();
};

function clearInput() {
    inputNode.value = '';
    inputNode.placeholder='Название фильма';
};

async function searchFilm () {
    if (!film) {
        return
    }
    const res = await fetch(`http://www.omdbapi.com/?s=${film}&apikey=2e380f8c`);
    const listJson = await res.json();
    list = listJson.Search;
    if (!list) {
        listNode.innerHTML = ``;
        listNode.innerText = `По вашему запросу ничего не найдено`;
        return
    }
    
    renderlist();

    filmInfoNode = document.querySelectorAll('.listOfFilms_resultStr');
    
    searchIMDB();
};

function renderlist() {
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

function searchIMDB () {
    filmInfoNode.forEach((item, index) => {
        item.addEventListener('click', async function(){
            const resIMDB = await fetch(`http://www.omdbapi.com/?i=${list[index].imdbID}&apikey=2e380f8c`);
            const listIMDBJson = await resIMDB.json();
            
            
            popUpNode.innerHTML = `
            <button class="listofFilms_popUp_closeButton" onclick="window.filmPopUp.close()">
                Назад к поиску
            </button>
            <div class="listofFilms_popUp_row">
                <div>
                    <img src="${listIMDBJson.Poster}" alt="" class="listOfFilms_popUp_poster">
                </div>
                <div>
                    <p class="listofFilms_popUp_title">${listIMDBJson.Title}</p>
                    <p class="listofFilms_popUp_chars">Год: ${listIMDBJson.Year}</p>
                    <p class="listofFilms_popUp_chars">Рейтинг: ${listIMDBJson.Rated}</p>
                    <p class="listofFilms_popUp_chars">Дата выхода: ${listIMDBJson.Released}</p>
                    <p class="listofFilms_popUp_chars">Длительность: ${listIMDBJson.Runtime}</p>
                    <p class="listofFilms_popUp_chars">Жанр: ${listIMDBJson.Genre}</p>
                    <p class="listofFilms_popUp_chars">Режиссер: ${listIMDBJson.Director}</p>
                    <p class="listofFilms_popUp_chars">Сценарий: ${listIMDBJson.Writer}</p>
                    <p class="listofFilms_popUp_chars">Актеры: ${listIMDBJson.Actors}</p>
                </div>
            </div>`;

            window.filmPopUp.showModal();
            
        });
    });
};



