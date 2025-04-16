const btnNode = document.getElementById('btn');
const h1Node = document.getElementById('h1');
const h2Node = document.getElementById('h2');
const stickerNode = document.getElementById('sticker');

let q = '';

API ();




btnNode.addEventListener('click', function() {
    changeH1();
    changeH2(q);
    changeSticker();
});



function API() {
    fetch('https://dummyjson.com/todos/random')
    .then(data => data.json())
    .then((res) => {
        //if (res.status !== 'success') {
        //    return;
        //}
        q = res.todo;
        console.log(typeof(q));
    });
};
function changeH1 () {
    h1Node.innerText = 'Now go and try:'
};
function changeH2 (task) {
    h2Node.innerText = `${task}`;
;}
function changeSticker() {
    stickerNode.classList.add('sticker_comp');
}
