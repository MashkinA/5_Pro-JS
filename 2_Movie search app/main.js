let film = '';
let list = [];
const inputNode = document.getElementById('input');
const btnNode = document.getElementById('inputBtn');
const listNode = document.getElementById('list');



function init() {
    // Не факт что нужно
};


btnNode.addEventListener('click', function(){
    getFilmFromUser();
    searchFilm();
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

function searchFilm() {
    fetch
};
function renderlist () {
    let ListHTML = '';
    list.forEach(element => {
        ListHTML += `<li class="list_string">
        <span class="string">${element}</span>
        
        </li>`; 
        
    });
    listNode.innerHTML = `<ol>${ListHTML}</ol>`;
};