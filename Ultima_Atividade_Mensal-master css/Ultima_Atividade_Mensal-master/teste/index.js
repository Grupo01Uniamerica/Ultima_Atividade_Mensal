const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '48eff17a7bmsh229331f0d4915dfp1dc46ejsnc8c299b51932',
		'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
	}
};

let cards = document.getElementById('cards');
let counter = 0;

this.array= [];
this.numFav= localStorage.getItem("numFav");

let choicedUrl = 'sort-by=popularity';
let choicedPlataform = 'platform=all&';
let choicedTeste = 'platform=all&sort-by=popularity'
lerApi(choicedTeste);


let pcButton = document.getElementById('pc-button');
pcButton.addEventListener('click',function(){choicedPlat("platform=pc&")})

let browserButton = document.getElementById('browser-button');
browserButton.addEventListener('click',function(){choicedPlat("platform=browser&")})

let allButton = document.getElementById('all-button');
allButton.addEventListener('click',function(){choicedPlat("platform=all&")})


let homeButton = document.getElementById('home-button');
homeButton.addEventListener('click', function(){choicedGenre("sort-by=popularity")});

let sportsButton = document.getElementById('sports-button');
sportsButton.addEventListener('click', function(){choicedGenre("category=sports")});

let mmoButton = document.getElementById('mmo-button');
mmoButton.addEventListener('click', function(){choicedGenre("category=mmorpg")});

let mobaButton = document.getElementById('moba-button');
mobaButton.addEventListener('click', function(){choicedGenre("category=moba")});

let cardButton = document.getElementById('card-button');
cardButton.addEventListener('click', function(){choicedGenre("category=card")});

let lutaButton = document.getElementById('fighting-button');
lutaButton.addEventListener('click', function(){choicedGenre("category=fighting")});

let shootingButton = document.getElementById('shooting-button');
shootingButton.addEventListener('click', function(){choicedGenre("category=shooter")});

let racingButton = document.getElementById('racing-button');
racingButton.addEventListener('click', function(){choicedGenre("category=racing")});

let maisButton = document.getElementById('mais');
maisButton.addEventListener('click',function(){lerApi2(choicedTeste)})



function choicedPlat(selectedPlat){

    counter = 0;
    choicedPlataform = selectedPlat;
    choicedTeste = choicedPlataform + choicedUrl;
    lerApi(choicedTeste);

}

function choicedGenre(selectedGenre) {
    counter = 0;
    choicedUrl = selectedGenre;
    choicedTeste = choicedPlataform + choicedUrl;
    lerApi(choicedTeste);
}

function lerApi(choicedTeste){
    cards.innerHTML = '';
fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?${choicedTeste}`, options)
	.then(response => response.json())
	.then(data => banner(data))
	.catch(err => console.log(err));

}

function lerApi2(choicedTeste){
fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?${choicedTeste}`, options)
	.then(response => response.json())
	.then(data => banner(data))
	.catch(err => console.log(err));

}
function favoritar(i, data){


    alert('bomdia' + i);

    adicionar(data, i);
    adiciona_jogos(jogos);

    localStorage.setItem("favoritos",JSON.stringify(array));

}

function adiciona_jogos(jogos){
   
    this.array.push(jogos);
    this.numFav++;


    alert("jogo" + data[i].title);
}
function adicionar(i, data){
     let jogos = {}
    console.log(data);
    jogos.id = i; 
    jogos.nome = data[i].title;
    jogos.url = data[i].freetogame_profile_url;
    jogos.img = data[i].thumbnail; 
    
   
    return jogos;
    
}


function favoritos(){

        var arrayFavoritos = localStorage.getItem("favoritos");
        array = JSON.parse(arrayFavoritos);

}


function banner(data){
 
    for ( i = counter; i < counter + 10; i++){
        let article = document.createElement('article');
        article.className = "tes"
        article.innerHTML = `  
        
        
        <a  href=${data[i].freetogame_profile_url} target="_blank">
        <img id="img${i}"src="${data[i].thumbnail}">
        <div id="flex">
        <h1 id="txt${i}">${data[i].title}</h1> 
        </a>
        <a class="estrela" id= ${i} onclick="favoritar(${i})">☆</a>
        </a>
        </div>
        `


        cards.appendChild(article);
    }
    counter+=10;
}







