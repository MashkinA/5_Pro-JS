const btnNode = document.getElementById('btn');

btnNode.addEventListener('click', function() {
    fetch("https://fakestoreapi.com/products/1")
    .then((res) => {
        if (res.status !== 'success') {
            return;
        }
        const act = res.title;
        document.getElementById('html_msg').innerHTML = ``;
        console.log(act);
    });
});



