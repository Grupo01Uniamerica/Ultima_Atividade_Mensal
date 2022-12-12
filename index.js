const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '48eff17a7bmsh229331f0d4915dfp1dc46ejsnc8c299b51932',
		'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
	}
};

function lerApi(){
fetch('https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=popularity', options)
	.then(response => response.json())
	.then(data => banner(data))
	.catch(err => console.log(err));

}

function banner(jogos){

    
    let article = document.createElement('article');
    article.classNmae = "tes"
    article.innerHTML = `
    
    
    
    `

    imgss.appendChild(article);

    

}




let imgss = document.getElementById('imagens');



lerApi();





