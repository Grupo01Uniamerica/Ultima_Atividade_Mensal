const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '48eff17a7bmsh229331f0d4915dfp1dc46ejsnc8c299b51932',
		'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
	}
};

let cards = document.getElementById('cards');
let counter = 0;
let loadButton = document.getElementById('load-button');
loadButton.addEventListener('click', lerApi);

let choicedUrl = 'sort-by=popularity';
lerApi(choicedUrl);

let mmorpgButton = document.getElementById('home-button');
mmorpgButton.addEventListener('click', function(){choicedGenre("category=mmorpg")});

function choicedGenre(selectedGenre) {
    counter = 0;
    choicedUrl = selectedGenre;
    lerApi(choicedUrl);
}

function lerApi(choicedUrl){
    cards.innerHTML = '';
fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?${choicedUrl}`, options)
	.then(response => response.json())
	.then(data => banner(data))
	.catch(err => console.log(err));

}

function banner(data){
 
    for ( i = counter; i < counter + 10; i++){
        let article = document.createElement('article');
        article.className = "tes"
        article.innerHTML = `  
        <img src="${data[i].thumbnail}">
        <h1>${data[i].title}</h1> 
        `
        cards.appendChild(article);
    }
    counter+=10;
}






