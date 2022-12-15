const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '48eff17a7bmsh229331f0d4915dfp1dc46ejsnc8c299b51932',
		'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
	}
};

let body = document.getElementById('body');
let cards = document.getElementById('cards');
let counter = 0;


let temabranco = 0;
let JOGOS;
let array = [];
let numFav;
let x = 1;
var arrayFavoritos = localStorage.getItem("favoritos");
if( arrayFavoritos != null){
 array = JSON.parse(arrayFavoritos);
 numFav= localStorage.getItem("numFav");
}


let choicedUrl = 'sort-by=popularity';
let choicedPlataform = 'platform=all&';
let choicedTeste = 'platform=all&sort-by=popularity'
lerApi(choicedTeste);


let pcButton = document.getElementById('pc-button');
pcButton.addEventListener('click',function(){ if(temabranco == 0){ret9.style.backgroundColor = "#313131";
                                            ret10.style.backgroundColor = "#494949";
                                            ret11.style.backgroundColor = "#494949";
                                            ret12.style.backgroundColor = "#494949";
                                            } else {
                                            ret9.style.backgroundColor = "#9146FF";
                                            ret10.style.backgroundColor = "#E5E5E5";
                                            ret11.style.backgroundColor = "#E5E5E5";
                                            ret12.style.backgroundColor = "#E5E5E5";
                                            }
                                            choicedPlat("platform=pc&")})

let browserButton = document.getElementById('browser-button');
browserButton.addEventListener('click',function(){if(temabranco == 0){ret9.style.backgroundColor = "#494949";
                                                    ret10.style.backgroundColor = "#313131";
                                                    ret11.style.backgroundColor = "#494949";
                                                    ret12.style.backgroundColor = "#494949";
                                                    } else {
                                                    ret9.style.backgroundColor = "#E5E5E5";
                                                    ret10.style.backgroundColor = "#9146FF";
                                                    ret11.style.backgroundColor = "#E5E5E5";
                                                    ret12.style.backgroundColor = "#E5E5E5";
                                                    }
                                                choicedPlat("platform=browser&")})

let allButton = document.getElementById('all-button');
allButton.addEventListener('click',function(){if(temabranco == 0){ret9.style.backgroundColor = "#494949";
                                                ret10.style.backgroundColor = "#494949";
                                                ret11.style.backgroundColor = "#313131";
                                                ret12.style.backgroundColor = "#494949";
                                                } else {
                                                ret9.style.backgroundColor = "#E5E5E5";
                                                ret10.style.backgroundColor = "#E5E5E5";
                                                ret11.style.backgroundColor = "#9146FF";
                                                ret12.style.backgroundColor = "#E5E5E5";
                                                }
                                            choicedPlat("platform=all&")})

let favbutton = document.getElementById('fav-button');
favbutton.addEventListener('click',function(){if(temabranco == 0){ret9.style.backgroundColor = "#494949";
                                                ret10.style.backgroundColor = "#494949";
                                                ret11.style.backgroundColor = "#494949";
                                                ret12.style.backgroundColor = "#313131";
                                                } else {
                                                ret9.style.backgroundColor = "#E5E5E5";
                                                ret10.style.backgroundColor = "#E5E5E5";
                                                ret11.style.backgroundColor = "#E5E5E5";
                                                ret12.style.backgroundColor = "#9146FF";
                                                }
                                            favoritados()});

let tema = document.getElementById('tema');
tema.addEventListener('click', function(){mudaTema()});



let homeButton = document.getElementById('home-button');
homeButton.addEventListener('click', function(){ if(temabranco == 0){ret1.style.backgroundColor = "#313131";
                                                    ret2.style.backgroundColor = "#494949";
                                                    ret3.style.backgroundColor = "#494949";
                                                    ret4.style.backgroundColor = "#494949";
                                                    ret5.style.backgroundColor = "#494949";
                                                    ret6.style.backgroundColor = "#494949";
                                                    ret7.style.backgroundColor = "#494949";
                                                    ret8.style.backgroundColor = "#494949";
                                                    } else{
                                                    ret1.style.backgroundColor = "#9146FF";
                                                    ret2.style.backgroundColor = "#E5E5E5";
                                                    ret3.style.backgroundColor = "#E5E5E5";
                                                    ret4.style.backgroundColor = "#E5E5E5";
                                                    ret5.style.backgroundColor = "#E5E5E5";
                                                    ret6.style.backgroundColor = "#E5E5E5";
                                                    ret7.style.backgroundColor = "#E5E5E5";
                                                    ret8.style.backgroundColor = "#E5E5E5";
                                                    }
                                                    choicedGenre("sort-by=popularity")});

let sportsButton = document.getElementById('sports-button');
sportsButton.addEventListener('click', function(){if(temabranco == 0){ret1.style.backgroundColor = "#494949";
                                                        ret2.style.backgroundColor = "#313131";
                                                        ret3.style.backgroundColor = "#494949";
                                                        ret4.style.backgroundColor = "#494949";
                                                        ret5.style.backgroundColor = "#494949";
                                                        ret6.style.backgroundColor = "#494949";
                                                        ret7.style.backgroundColor = "#494949";
                                                        ret8.style.backgroundColor = "#494949";
                                                        } else{
                                                        ret1.style.backgroundColor = "#E5E5E5";
                                                        ret2.style.backgroundColor = "#9146FF";
                                                        ret3.style.backgroundColor = "#E5E5E5";
                                                        ret4.style.backgroundColor = "#E5E5E5";
                                                        ret5.style.backgroundColor = "#E5E5E5";
                                                        ret6.style.backgroundColor = "#E5E5E5";
                                                        ret7.style.backgroundColor = "#E5E5E5";
                                                        ret8.style.backgroundColor = "#E5E5E5";
                                                        }
                                                    choicedGenre("category=sports")});

let mmoButton = document.getElementById('mmo-button');
mmoButton.addEventListener('click', function(){if(temabranco == 0){ret1.style.backgroundColor = "#494949";
                                                    ret2.style.backgroundColor = "#494949";
                                                    ret3.style.backgroundColor = "#313131";
                                                    ret4.style.backgroundColor = "#494949";
                                                    ret5.style.backgroundColor = "#494949";
                                                    ret6.style.backgroundColor = "#494949";
                                                    ret7.style.backgroundColor = "#494949";
                                                    ret8.style.backgroundColor = "#494949";
                                                    } else{
                                                    ret1.style.backgroundColor = "#E5E5E5";
                                                    ret2.style.backgroundColor = "#E5E5E5";
                                                    ret3.style.backgroundColor = "#9146FF";
                                                    ret4.style.backgroundColor = "#E5E5E5";
                                                    ret5.style.backgroundColor = "#E5E5E5";
                                                    ret6.style.backgroundColor = "#E5E5E5";
                                                    ret7.style.backgroundColor = "#E5E5E5";
                                                    ret8.style.backgroundColor = "#E5E5E5";
                                                    }
                                                choicedGenre("category=mmorpg")});

let mobaButton = document.getElementById('moba-button');
mobaButton.addEventListener('click', function(){if(temabranco == 0){ret1.style.backgroundColor = "#494949";
                                                    ret2.style.backgroundColor = "#494949";
                                                    ret3.style.backgroundColor = "#494949";
                                                    ret4.style.backgroundColor = "#313131";
                                                    ret5.style.backgroundColor = "#494949";
                                                    ret6.style.backgroundColor = "#494949";
                                                    ret7.style.backgroundColor = "#494949";
                                                    ret8.style.backgroundColor = "#494949";
                                                    } else{
                                                    ret1.style.backgroundColor = "#E5E5E5";
                                                    ret2.style.backgroundColor = "#E5E5E5";
                                                    ret3.style.backgroundColor = "#E5E5E5";
                                                    ret4.style.backgroundColor = "#9146FF";
                                                    ret5.style.backgroundColor = "#E5E5E5";
                                                    ret6.style.backgroundColor = "#E5E5E5";
                                                    ret7.style.backgroundColor = "#E5E5E5";
                                                    ret8.style.backgroundColor = "#E5E5E5";
                                                    }
                                                choicedGenre("category=moba")});

let cardButton = document.getElementById('card-button');
cardButton.addEventListener('click', function(){if(temabranco == 0){ret1.style.backgroundColor = "#494949";
                                                    ret2.style.backgroundColor = "#494949";
                                                    ret3.style.backgroundColor = "#494949";
                                                    ret4.style.backgroundColor = "#494949";
                                                    ret5.style.backgroundColor = "#313131";
                                                    ret6.style.backgroundColor = "#494949";
                                                    ret7.style.backgroundColor = "#494949";
                                                    ret8.style.backgroundColor = "#494949";
                                                    } else{
                                                    ret1.style.backgroundColor = "#E5E5E5";
                                                    ret2.style.backgroundColor = "#E5E5E5";
                                                    ret3.style.backgroundColor = "#E5E5E5";
                                                    ret4.style.backgroundColor = "#E5E5E5";
                                                    ret5.style.backgroundColor = "#9146FF";
                                                    ret6.style.backgroundColor = "#E5E5E5";
                                                    ret7.style.backgroundColor = "#E5E5E5";
                                                    ret8.style.backgroundColor = "#E5E5E5";
                                                    }
                                                choicedGenre("category=card")});

let lutaButton = document.getElementById('fighting-button');
lutaButton.addEventListener('click', function(){if(temabranco == 0){ret1.style.backgroundColor = "#494949";
                                                    ret2.style.backgroundColor = "#494949";
                                                    ret3.style.backgroundColor = "#494949";
                                                    ret4.style.backgroundColor = "#494949";
                                                    ret5.style.backgroundColor = "#494949";
                                                    ret6.style.backgroundColor = "#313131";
                                                    ret7.style.backgroundColor = "#494949";
                                                    ret8.style.backgroundColor = "#494949";
                                                    } else{
                                                    ret1.style.backgroundColor = "#E5E5E5";
                                                    ret2.style.backgroundColor = "#E5E5E5";
                                                    ret3.style.backgroundColor = "#E5E5E5";
                                                    ret4.style.backgroundColor = "#E5E5E5";
                                                    ret5.style.backgroundColor = "#E5E5E5";
                                                    ret6.style.backgroundColor = "#9146FF";
                                                    ret7.style.backgroundColor = "#E5E5E5";
                                                    ret8.style.backgroundColor = "#E5E5E5";
                                                    }
                                                choicedGenre("category=fighting")});

let shootingButton = document.getElementById('shooting-button');
shootingButton.addEventListener('click', function(){if(temabranco == 0){ret1.style.backgroundColor = "#494949";
                                                        ret2.style.backgroundColor = "#494949";
                                                        ret3.style.backgroundColor = "#494949";
                                                        ret4.style.backgroundColor = "#494949";
                                                        ret5.style.backgroundColor = "#494949";
                                                        ret6.style.backgroundColor = "#494949";
                                                        ret7.style.backgroundColor = "#313131";
                                                        ret8.style.backgroundColor = "#494949";
                                                        } else{
                                                        ret1.style.backgroundColor = "#E5E5E5";
                                                        ret2.style.backgroundColor = "#E5E5E5";
                                                        ret3.style.backgroundColor = "#E5E5E5";
                                                        ret4.style.backgroundColor = "#E5E5E5";
                                                        ret5.style.backgroundColor = "#E5E5E5";
                                                        ret6.style.backgroundColor = "#E5E5E5";
                                                        ret7.style.backgroundColor = "#9146FF";
                                                        ret8.style.backgroundColor = "#E5E5E5";
                                                        }
                                                    choicedGenre("category=shooter")});

let racingButton = document.getElementById('racing-button');
racingButton.addEventListener('click', function(){if(temabranco == 0){ret1.style.backgroundColor = "#494949";
                                                    ret2.style.backgroundColor = "#494949";
                                                    ret3.style.backgroundColor = "#494949";
                                                    ret4.style.backgroundColor = "#494949";
                                                    ret5.style.backgroundColor = "#494949";
                                                    ret6.style.backgroundColor = "#494949";
                                                    ret7.style.backgroundColor = "#494949";
                                                    ret8.style.backgroundColor = "#313131";
                                                    } else{
                                                    ret1.style.backgroundColor = "#E5E5E5";
                                                    ret2.style.backgroundColor = "#E5E5E5";
                                                    ret3.style.backgroundColor = "#E5E5E5";
                                                    ret4.style.backgroundColor = "#E5E5E5";
                                                    ret5.style.backgroundColor = "#E5E5E5";
                                                    ret6.style.backgroundColor = "#E5E5E5";
                                                    ret7.style.backgroundColor = "#E5E5E5";
                                                    ret8.style.backgroundColor = "#9146FF";
                                                    }
                                                choicedGenre("category=racing")});

let maisButton = document.getElementById('mais');
maisButton.addEventListener('click',function(){lerApi2(choicedTeste)})

let destaque = document.getElementById('h2');
let jgdesq = document.getElementById('destq');


let day = document.getElementById('day');
let night = document.getElementById('night');
night.style.display = "block";
day.style.display = "none";


let ret1 = document.getElementById("ret1");
let ret2 = document.getElementById("ret2");
let ret3 = document.getElementById("ret3");
let ret4 = document.getElementById("ret4");
let ret5 = document.getElementById("ret5");
let ret6 = document.getElementById("ret6");
let ret7 = document.getElementById("ret7");
let ret8 = document.getElementById("ret8");
let ret9 = document.getElementById("ret9");
let ret10 = document.getElementById("ret10");
let ret11 = document.getElementById("ret11");
let ret12 = document.getElementById("ret12");



function mudaTema(){
    

    if(temabranco == 0){
    //document.body.style.setProperty('--color', 'green');
    document.body.style.setProperty('--var-primarycolor', '#E5E5E5');
    document.body.style.setProperty('--var-secondarycolor', '#9146FF');
    document.body.style.setProperty('--var-branco', 'black');
    night.style.display = "none";
    day.style.display = "block";
    
    ret9.style.backgroundColor = "#E5E5E5";
    ret10.style.backgroundColor = "#E5E5E5";
    ret11.style.backgroundColor = "#E5E5E5";
    ret12.style.backgroundColor = "#E5E5E5";

    ret1.style.backgroundColor = "#E5E5E5";
    ret2.style.backgroundColor = "#E5E5E5";
    ret3.style.backgroundColor = "#E5E5E5";
    ret4.style.backgroundColor = "#E5E5E5";
    ret5.style.backgroundColor = "#E5E5E5";
    ret6.style.backgroundColor = "#E5E5E5";
    ret7.style.backgroundColor = "#E5E5E5";
    ret8.style.backgroundColor = "#E5E5E5";

    temabranco = 1;
    }
    else{

    document.body.style.setProperty('--var-primarycolor', '#494949');
    document.body.style.setProperty('--var-secondarycolor', '#313131');
    document.body.style.setProperty('--var-branco', 'white');
    night.style.display = "block";
    day.style.display = "none";

    ret9.style.backgroundColor = "#494949";
    ret10.style.backgroundColor = "#494949";
    ret11.style.backgroundColor = "#494949";
    ret12.style.backgroundColor = "#494949";

    ret1.style.backgroundColor = "#494949";
    ret2.style.backgroundColor = "#494949";
    ret3.style.backgroundColor = "#494949";
    ret4.style.backgroundColor = "#494949";
    ret5.style.backgroundColor = "#494949";
    ret6.style.backgroundColor = "#494949";
    ret7.style.backgroundColor = "#494949";
    ret8.style.backgroundColor = "#494949";


    temabranco = 0;

    }
    
    
    //body.classList.add('temabranco');
    


}
function choicedPlat(selectedPlat){
    x=1;
    counter = 0;
    choicedPlataform = selectedPlat;
    choicedTeste = choicedPlataform + choicedUrl;
    lerApi(choicedTeste);

}

function choicedGenre(selectedGenre) {
    x=1;
    counter = 0;
    choicedUrl = selectedGenre;
    choicedTeste = choicedPlataform + choicedUrl;
    lerApi(choicedTeste);
}
function favoritados (){

   
    x=0;
    banner(null, true);

}

function lerApi(choicedTeste){
    cards.innerHTML = '';
fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?${choicedTeste}`, options)
	.then(response => response.json())

	.then(data => {
        banner(data);
        JOGOS = data;
    })
	.catch(err => console.log(err));

}


function lerApi2(choicedTeste){
fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?${choicedTeste}`, options)
	.then(response => response.json())
	.then(data => banner(data))
	.catch(err => console.log(err));

}
function favoritar(i){
    
    data = JOGOS;
    let idstar = document.getElementById("estrela"+i);
    for(let a = 0; a < array.length; a++){

        if(data[i].id== array[a].id){

            array.splice(array.indexOf(i), 1);
            idstar.classList.remove('stars');


            return;
        }



    }

    

    console.log(idstar);

    idstar.classList.add('stars');


    
    let jogos = adicionar(i, data);
    adiciona_jogos(jogos);

   
    
    


}

function adiciona_jogos(jogos){
   
    array.push(jogos);
    numFav++;

    
    

    localStorage.setItem("favoritos",JSON.stringify(array));

 
  
    
}
function adicionar(i, data){
     let jogos = {}
    
    jogos.id = data[i].id; 
    jogos.nome = data[i].title;
    jogos.url = data[i].freetogame_profile_url;
    jogos.img = data[i].thumbnail; 


   
   //let aa= "estrela"+ toString(i);
 
    return jogos;
}


function favoritos(){
    
    jgdesq.style.display = "none";
    destaque.style.display = "none";
    maisButton.style.display = "none";
  
    console.log(array);
    cards.innerHTML= "";

       for(let i = 0; i < array.length; i++){

        let article = document.createElement('article');
        article.className = "tese"
        article.innerHTML = `  
        
        
        <a  href=${array[i].url} target="_blank">
        <img id="aa${i}"src="${array[i].img}">
        <div id="flex">
        <h1 id="nome${i}">${array[i].nome}</h1> 
        </a>
        
        </div>
        `

        


        cards.appendChild(article);

       }



}


function banner(data, fav=false){
    

    
    if(!fav){
    
         
    jgdesq.style.display = "block";
    destaque.style.display = "block";
    maisButton.style.display = "block";

        for ( i = counter; i < counter + 9; i++){
            let article = document.createElement('article');
            article.className = "tes"
            article.innerHTML = `  
            
            
            <a  href=${data[i].freetogame_profile_url} target="_blank">
            <img id="img${i}"src="${data[i].thumbnail}">
            <div id="flex">
            <h1 id="txt${i}">${data[i].title}</h1> 
            </a>
            <a class="star" id= "estrela${i}" onclick="favoritar(${i})">☆</a>
            </a>
            </div>
            `


            cards.appendChild(article);
        }
        counter+=10;
    }
    else{
        
        favoritos();
    }
   
}







