fetch("https://api.api-ninjas.com/v1/randomimage")
    .then(data => data.json())
    .then((res) => {
        if (res.status !== 'success') {
            return;
        }
        const imgSrc = res.message
        document.getElementById('html_msg').innerHTML = `
        <img 
        src="${imgSrc}"
        width='500'
        height='500' 
        alt="">
        `;
    });