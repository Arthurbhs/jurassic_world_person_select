const rex = new Audio('./src/audio/roars/rex/t_rex roar (128 kbps).mp3');
const espino = new Audio('./src/audio/roars/espino/Spinosaurus Roar (128 kbps).mp3');
const giga = new Audio('./src/audio/roars/giganotossauro/giga roar 1 (128 kbps).mp3');
const tere = new Audio('./src/audio/roars/terezinossauro/Therizinosaurus roar 1 (128 kbps).mp3');
const raptor = new Audio('./src/audio/roars/velociraptor/raptor roar 1 (128 kbps).mp3');
const dilo = new Audio('./src/audio/roars/dilofossauro/dilo roar 1 (128 kbps).mp3');
const i_raptor = new Audio('./src/audio/roars/indoraptor/Indoraptor Roar  1 (128 kbps).mp3');
const indom = new Audio('./src/audio/roars/indominus/indom roar 1.mp3');


const therezinossauroImg = document.getElementById('therezinossauro');
const selectPersonImg = document.querySelector('.select-person');
const namePerson = document.getElementById('name-person');
const description = document.getElementById('description');


therezinossauroImg.addEventListener('click', function() {
    selectPersonImg.src = './src/imagens/tere.png'; // Modifica o endereço da imagem
    namePerson.innerText = 'therezinossauro'; // Modifica o conteúdo do elemento <h2>
    description.innerText = 'therezinossauro, largato de garras letais. Apareceu no ultimo filme da trilogia de jurassic world, ajudando rexy  noembate contra o giganotossauro'; 
    tere.currentTime = 0;// Reinicia a reprodução do áudio
    tere.play();
    dilo.pause()
     i_raptor.pause();
     raptor.pause();
     rex.pause();
     giga.pause();
     espino.pause();
     indom.pause();
    });


const gigaImg = document.getElementById('giganotossauro');


gigaImg.addEventListener('click', function() {
    selectPersonImg.src = './src/imagens/giga.png'; // Modifica o endereço da imagem
    namePerson.innerText = 'giganotossauro'; // Modifica o conteúdo do elemento <h2>
     description.innerText = 'giganotossauro, um monstro gigante que Apareceu no ultimo filme da trilogia de jurassic world, foi o principal dinossauro antagonista do filme se sobrepondo a t.rex numa batalha mortal.'; 
     giga.currentTime = 0
     giga.play();
     dilo.pause()
     i_raptor.pause();
     raptor.pause();
     rex.pause();
     tere.pause();
     espino.pause();
     indom.pause();
    });

const rexImg = document.getElementById('t_rex');

rexImg.addEventListener('click', function() {
    selectPersonImg.src = './src/imagens/t_rex.png'; // Modifica o endereço da imagem
    namePerson.innerText = 'tyranossauro (rexy)'; // Modifica o conteúdo do elemento <h2>
     description.innerText = 'rexy, ou roberta para os mais chegados, e o t.rex que apareceu no primeiro filme da franquia, e apareceu em todos os filmes da trilogia de jurassic world, sendo  considerado a rainha dos dinossauros.'; 
     rex.currentTime = 0
     rex.play();
     dilo.pause()
     i_raptor.pause();
     raptor.pause();
     tere.pause();
     giga.pause();
     espino.pause();
     indom.pause();
     
});

const indomImg = document.getElementById('indominus_rex');

indomImg.addEventListener('click', function() {
    selectPersonImg.src = './src/imagens/i_rex.png'; // Modifica o endereço da imagem
    namePerson.innerText = 'indominus rex'; // Modifica o conteúdo do elemento <h2>
     description.innerText = 'O primeiro hibrido que nos e apresentado na franquia, com o DNA de t.rex, raptor, carnotauro e varios outros. Feito para ser a principal atracao do parque,mas se tornou sua ruina.'; 
     indom.currentTime= 0;
     indom.play();
     dilo.pause()
     i_raptor.pause();
     raptor.pause();
     rex.pause();
     tere.pause();
     giga.pause();
     espino.pause();
    });

const blueImg = document.getElementById('blue');


blueImg.addEventListener('click', function() {
    selectPersonImg.src = './src/imagens/blue.png'; // Modifica o endereço da imagem
    namePerson.innerText = 'velociraptor (blue)'; // Modifica o conteúdo do elemento <h2>
     description.innerText = 'Aqui nos temos a ultima especime de velociraptor da iGen, blue esteve em todos os filmes da nova trilogia de jurassic world, e no ultimo filme, ela se reproduziu, gerando a Beta, sua filha'; 
     raptor.currentTime = 0;
     raptor.play();
     dilo.pause()
     i_raptor.pause();
     rex.pause();
     tere.pause();
     giga.pause();
     espino.pause();
     indom.pause();
    });

const diloImg = document.getElementById('dilofossauro');


diloImg.addEventListener('click', function() {
    selectPersonImg.src = './src/imagens/dilo.png'; // Modifica o endereço da imagem
    namePerson.innerText = 'dilofossauro'; // Modifica o conteúdo do elemento <h2>
     description.innerText = 'Um classico! O dilofossauro apareceu pela primeira vez no primeiro filme da saga, com sua iconica gola e sua capacidade de cuspir veneno'; 
     dilo.currentTime = 0;
     dilo.play()
     i_raptor.pause();
     raptor.pause();
     rex.pause();
     tere.pause();
     giga.pause();
     espino.pause();
     indom.pause();
    });

const indorImg = document.getElementById('indoraptor');


indorImg.addEventListener('click', function() {
    selectPersonImg.src = './src/imagens/indoraptor.png'; // Modifica o endereço da imagem
    namePerson.innerText = 'indoraptor'; // Modifica o conteúdo do elemento <h2>
    description.innerText = 'o sucessor da indominus, foi projetado pra guerra, sendo o hibrido mais letal para o ser humano, infelizmente por roteiro..... E, ele morreu'; 
    i_raptor.currentTime = 0;
    i_raptor.play();
    dilo.pause();
     raptor.pause();
     rex.pause();
     tere.pause();
     giga.pause();
     espino.pause();
    });

const espinoImg = document.getElementById('espinossauro');

espinoImg.addEventListener('click', function() {
    selectPersonImg.src = './src/imagens/espino.png'; // Modifica o endereço da imagem
    namePerson.innerText = 'espinossauro'; // Modifica o conteúdo do elemento <h2>
    description.innerText = 'O primeiro dinossauro da franquia que desafiou o trono do t.rex, e ainda venceu! O espinossauro foi capaz de persseguir os protagonistas durando todo filme, atravessando toda a ilha, em terra e agua, movido por vingança'; 
    espino.currentTime = 0
     espino.play();
     dilo.pause()
     i_raptor.pause();
     raptor.pause();
     rex.pause();
     tere.pause();
     giga.pause();
     indom.pause();
});

