const rexAudios = ['./src/audio/roars/rex/t_rex roar 1 (128 kbps).mp3',
                   './src/audio/roars/rex/t_rex roar 2 (128 kbps).mp3',
                   './src/audio/roars/rex/t_rex roar 3 (128 kbps).mp3',
                   './src/audio/roars/rex/t_rex roar 4 (128 kbps).mp3',
                   './src/audio/roars/rex/t_rex roar 5 (128 kbps).mp3',
                   './src/audio/roars/rex/t_rex roar 6 (128 kbps).mp3',
                  ];

const espinoAudios = ['./src/audio/roars/espino/Spinosaurus Roar 1 (128 kbps).mp3',
                      './src/audio/roars/espino/Spinosaurus Roar 2 (128 kbps).mp3',
                      './src/audio/roars/espino/Spinosaurus Roar 3 (128 kbps).mp3',
                      './src/audio/roars/espino/Spinosaurus Roar 4 (128 kbps).mp3',
                      './src/audio/roars/espino/Spinosaurus Roar 5 (128 kbps).mp3',
                      './src/audio/roars/espino/Spinosaurus Roar 5 (128 kbps).mp3'    
                      ];

const gigaAudios = ['./src/audio/roars/giganotossauro/giga roar 1 (128 kbps).mp3',
              './src/audio/roars/giganotossauro/giga roar 2 (128 kbps).mp3',
              './src/audio/roars/giganotossauro/giga roar 3 (128 kbps).mp3',
              './src/audio/roars/giganotossauro/giga roar 4 (128 kbps).mp3',
              './src/audio/roars/giganotossauro/giga roar 5 (128 kbps).mp3',
              './src/audio/roars/giganotossauro/giga roar 6 (128 kbps).mp3'];

const tereAudios = ['./src/audio/roars/terezinossauro/Therizinosaurus roar 1 (128 kbps).mp3',
'./src/audio/roars/terezinossauro/Therizinosaurus roar 2 (128 kbps).mp3',
'./src/audio/roars/terezinossauro/Therizinosaurus roar 3 (128 kbps).mp3',
'./src/audio/roars/terezinossauro/Therizinosaurus roar 4 (128 kbps).mp3',
'./src/audio/roars/terezinossauro/Therizinosaurus roar 5 (128 kbps).mp3',
'./src/audio/roars/terezinossauro/Therizinosaurus roar 6 (128 kbps).mp3'];

const raptorAudios = ['./src/audio/roars/velociraptor/raptor roar 1 (128 kbps).mp3',
                      './src/audio/roars/velociraptor/raptor roar 2(128 kbps).mp3',
                      './src/audio/roars/velociraptor/raptor roar 3(128 kbps).mp3',
                      './src/audio/roars/velociraptor/raptor roar 4(128 kbps).mp3',
                      './src/audio/roars/velociraptor/raptor roar 5(128 kbps).mp3',
                      './src/audio/roars/velociraptor/raptor roar 6(128 kbps).mp3'];

const diloAudios = ['./src/audio/roars/dilofossauro/dilo roar 1 (128 kbps).mp3',
                    './src/audio/roars/dilofossauro/dilo roar 2 (128 kbps).mp3',
                    './src/audio/roars/dilofossauro/dilo roar 3 (128 kbps).mp3',
                    './src/audio/roars/dilofossauro/dilo roar 4 (128 kbps).mp3',
                    './src/audio/roars/dilofossauro/dilo roar 5 (128 kbps).mp3',
                    './src/audio/roars/dilofossauro/dilo roar 6 (128 kbps).mp3'];

const i_raptorAudios = ['./src/audio/roars/indoraptor/Indoraptor Roar  1 (128 kbps).mp3',
                        './src/audio/roars/indoraptor/Indoraptor Roar  2 (128 kbps).mp3',
                        './src/audio/roars/indoraptor/Indoraptor Roar  3 (128 kbps).mp3',
                        './src/audio/roars/indoraptor/Indoraptor Roar  4 (128 kbps).mp3',
                        './src/audio/roars/indoraptor/Indoraptor Roar  5 (128 kbps).mp3'
                        ];
const indomAudios = [
    './src/audio/roars/indominus/indom roar 1.mp3',
    './src/audio/roars/indominus/indom roar 2.mp3',
    './src/audio/roars/indominus/indom roar 3.mp3',
    './src/audio/roars/indominus/indom roar 4.mp3',
    './src/audio/roars/indominus/indom roar 5.mp3',
    './src/audio/roars/indominus/indom roar 6.mp3'];





const therezinossauroImg = document.getElementById('therezinossauro');
const selectPersonImg = document.querySelector('.select-person');
const namePerson = document.getElementById('name-person');
const description = document.getElementById('description');

function pausarAudioAdicional(audioVariavel) {
    if (audioVariavel) {
        audioVariavel.pause();
    }
}

 // Verifica se a reprodução automática é permitida pelo navegador
 const reproducaoAutomaticaPermitida = !!(window.chrome || window.webkit);

let tere = null

therezinossauroImg.addEventListener('click', function() {
    selectPersonImg.src = './src/imagens/tere.png'; // Modifica o endereço da imagem
    namePerson.innerText = 'therezinossauro'; // Modifica o conteúdo do elemento <h2>
    description.innerText = 'therezinossauro, largato de garras letais. Apareceu no ultimo filme da trilogia de jurassic world, ajudando rexy  noembate contra o giganotossauro'; 
    pausarAudioAdicional(indom);
    pausarAudioAdicional(espino);
    pausarAudioAdicional(giga);
    pausarAudioAdicional(i_raptor);
    pausarAudioAdicional(raptor);
    pausarAudioAdicional(rex);
    pausarAudioAdicional(dilo);

    if (tere) {
        tere.pause();
    }



   
    
    // Solicita a reprodução do áudio ao usuário após um clique
    if (reproducaoAutomaticaPermitida) {
        const indiceAleatorio = Math.floor(Math.random() * tereAudios.length);
        tere = new Audio(tereAudios[indiceAleatorio]);
        tere.currentTime = 0;
        tere.play();
    } else {
        // Mostre uma mensagem ou um botão para solicitar ao usuário que clique para reproduzir o áudio
        // Exemplo de mensagem: "Clique para reproduzir o áudio"
    } 
    const bodyElement = document.querySelector('body');

    // Adiciona a animação ao CSS do "body"
    bodyElement.style.animation = 'shake 0.5s linear';
  
    // Remove a animação após 0.3 segundos
    setTimeout(function() {
      bodyElement.style.animation = '';
    }, 500); // 300 milissegundos = 0.3 segundos 

});


const gigaImg = document.getElementById('giganotossauro');
let giga = null;

gigaImg.addEventListener('click', function() {
    // Modifica o conteúdo da imagem e do texto
    selectPersonImg.src = './src/imagens/giga.png';
    namePerson.innerText = 'Giganotossauro';
    description.innerText = 'O Giganotossauro, um monstro gigante que apareceu no último filme da trilogia de Jurassic World, foi o principal dinossauro antagonista do filme, sobrepondo-se ao T-Rex numa batalha mortal.';
    
    // Pausa todos os outros áudios
    pausarAudioAdicional(indom);
    pausarAudioAdicional(espino);
    pausarAudioAdicional(tere);
    pausarAudioAdicional(i_raptor);
    pausarAudioAdicional(raptor);
    pausarAudioAdicional(rex);
    pausarAudioAdicional(dilo);

    // Verifica se já existe um áudio do Giganotossauro em reprodução e pausa se houver
    if (giga) {
        giga.pause();
    }

    // Escolhe um áudio aleatório do array gigaAudios e reproduz
    if (reproducaoAutomaticaPermitida) {
        const indiceAleatorio = Math.floor(Math.random() * gigaAudios.length);
        giga = new Audio(gigaAudios[indiceAleatorio]);
        giga.currentTime = 0;
        giga.play();
    } else {
        // Mostre uma mensagem ou um botão para solicitar ao usuário que clique para reproduzir o áudio
        // Exemplo de mensagem: "Clique para reproduzir o áudio"
    } 
     
    // Adiciona animação ao corpo da página
    const bodyElement = document.querySelector('body');
    bodyElement.style.animation = 'shake 0.5s linear';
  
    // Remove a animação após 0.5 segundos
    setTimeout(function() {
        bodyElement.style.animation = '';
    }, 500); // 500 milissegundos = 0.5 segundos
});

 const rexImg = document.getElementById('t_rex');
 let rex = null;
 
 rexImg.addEventListener('click', function() {
     // Modifica o conteúdo da imagem e do texto
     selectPersonImg.src = './src/imagens/t_rex.png';
     namePerson.innerText = 'Tyranossauro (Rexy)';
     description.innerText = 'Rexy, ou Roberta para os mais chegados, é o T-Rex que apareceu no primeiro filme da franquia e apareceu em todos os filmes da trilogia de Jurassic World, sendo considerada a rainha dos dinossauros.';
     
     // Pausa todos os outros áudios
     pausarAudioAdicional(indom);
     pausarAudioAdicional(espino);
     pausarAudioAdicional(tere);
     pausarAudioAdicional(i_raptor);
     pausarAudioAdicional(raptor);
     pausarAudioAdicional(giga);
     pausarAudioAdicional(dilo);
 
     // Verifica se já existe um áudio do T-Rex em reprodução e pausa se houver
     if (rex) {
         rex.pause();
     }
 
     // Escolhe um áudio aleatório do array rexAudios e reproduz
     const indiceAleatorio = Math.floor(Math.random() * rexAudios.length);
     rex = new Audio(rexAudios[indiceAleatorio]);
     rex.currentTime = 0;
     rex.play();
 
     // Adiciona animação ao corpo da página
     const bodyElement = document.querySelector('body');
     bodyElement.style.animation = 'shake 0.5s linear';
 
     // Remove a animação após 0.5 segundos
     setTimeout(function() {
         bodyElement.style.animation = '';
     }, 500); // 500 milissegundos = 0.5 segundos
 });
 

const indomImg = document.getElementById('indominus_rex');
let indom = null;

indomImg.addEventListener('click', function() {
    // Modifica o conteúdo da imagem e do texto
    selectPersonImg.src = './src/imagens/i_rex.png';
    namePerson.innerText = 'Indominus Rex';
    description.innerText = 'O primeiro híbrido que nos é apresentado na franquia, com o DNA de T-Rex, Raptor, Carnotauro e vários outros. Feito para ser a principal atração do parque, mas se tornou sua ruína.';
    
    // Pausa todos os outros áudios
    pausarAudioAdicional(rex);
    pausarAudioAdicional(espino);
    pausarAudioAdicional(tere);
    pausarAudioAdicional(i_raptor);
    pausarAudioAdicional(raptor);
    pausarAudioAdicional(giga);
    pausarAudioAdicional(dilo);

    // Verifica se já existe um áudio do Indominus Rex em reprodução e pausa se houver
    if (indom) {
        indom.pause();
    }

    // Escolhe um áudio aleatório do array indomAudios e reproduz
    const indiceAleatorio = Math.floor(Math.random() * indomAudios.length);
    indom = new Audio(indomAudios[indiceAleatorio]);
    indom.currentTime = 0;
    indom.play();

    // Adiciona animação ao corpo da página
    const bodyElement = document.querySelector('body');
    bodyElement.style.animation = 'shake 0.5s linear';

    // Remove a animação após 0.5 segundos
    setTimeout(function() {
        bodyElement.style.animation = '';
    }, 500); // 500 milissegundos = 0.5 segundos
});



const blueImg = document.getElementById('blue');
let raptor = null;

blueImg.addEventListener('click', function() {
    // Modifica o conteúdo da imagem e do texto
    selectPersonImg.src = './src/imagens/blue.png';
    namePerson.innerText = 'Velociraptor (Blue)';
    description.innerText = 'Aqui nós temos a última espécime de velociraptor da InGen, Blue esteve em todos os filmes da nova trilogia de Jurassic World, e no último filme, ela se reproduziu, gerando a Beta, sua filha.';
    
    // Pausa todos os outros áudios
    pausarAudioAdicional(rex);
    pausarAudioAdicional(espino);
    pausarAudioAdicional(tere);
    pausarAudioAdicional(i_raptor);
    pausarAudioAdicional(dilo);
    pausarAudioAdicional(giga);
    pausarAudioAdicional(indom);

    // Verifica se já existe um áudio do Velociraptor em reprodução e pausa se houver
    if (raptor) {
        raptor.pause();
    }

    // Escolhe um áudio aleatório do array raptorAudios e reproduz
    if (reproducaoAutomaticaPermitida) {
        const indiceAleatorio = Math.floor(Math.random() * raptorAudios.length);
        raptor = new Audio(raptorAudios[indiceAleatorio]);
        raptor.currentTime = 0;
        raptor.play();
    } else {
        // Mostre uma mensagem ou um botão para solicitar ao usuário que clique para reproduzir o áudio
        // Exemplo de mensagem: "Clique para reproduzir o áudio"
    } 
     
    // Adiciona animação ao corpo da página
    const bodyElement = document.querySelector('body');
    bodyElement.style.animation = 'shake 0.5s linear';
  
    // Remove a animação após 0.5 segundos
    setTimeout(function() {
        bodyElement.style.animation = '';
    }, 500); // 500 milissegundos = 0.5 segundos
});


const diloImg = document.getElementById('dilofossauro');
let dilo = null;

diloImg.addEventListener('click', function() {
    // Modifica o conteúdo da imagem e do texto
    selectPersonImg.src = './src/imagens/dilo.png';
    namePerson.innerText = 'Dilofossauro';
    description.innerText = 'Um clássico! O Dilofossauro apareceu pela primeira vez no primeiro filme da saga, com sua icônica gola e sua capacidade de cuspir veneno.';
    
    // Pausa todos os outros áudios
    pausarAudioAdicional(rex);
    pausarAudioAdicional(espino);
    pausarAudioAdicional(tere);
    pausarAudioAdicional(i_raptor);
    pausarAudioAdicional(raptor);
    pausarAudioAdicional(giga);
    pausarAudioAdicional(indom);

    // Verifica se já existe um áudio do Dilofossauro em reprodução e pausa se houver
    if (dilo) {
        dilo.pause();
    }

    // Escolhe um áudio aleatório do array diloAudios e reproduz
    if (reproducaoAutomaticaPermitida) {
        const indiceAleatorio = Math.floor(Math.random() * diloAudios.length);
        dilo = new Audio(diloAudios[indiceAleatorio]);
        dilo.currentTime = 0;
        dilo.play();
    } else {
        // Mostre uma mensagem ou um botão para solicitar ao usuário que clique para reproduzir o áudio
        // Exemplo de mensagem: "Clique para reproduzir o áudio"
    } 
     
    // Adiciona animação ao corpo da página
    const bodyElement = document.querySelector('body');
    bodyElement.style.animation = 'shake 0.5s linear';
  
    // Remove a animação após 0.5 segundos
    setTimeout(function() {
        bodyElement.style.animation = '';
    }, 500); // 500 milissegundos = 0.5 segundos
});



    const indorImg = document.getElementById('indoraptor');
    let i_raptor = null;
    
    indorImg.addEventListener('click', function() {
        // Modifica o conteúdo da imagem e do texto
        selectPersonImg.src = './src/imagens/indoraptor.png';
        namePerson.innerText = 'Indoraptor';
        description.innerText = 'O sucessor da Indominus, foi projetado para guerra, sendo o híbrido mais letal para o ser humano. Infelizmente, por roteiro... ele morreu.';
    
        // Pausa todos os outros áudios
        pausarAudioAdicional(indom);
        pausarAudioAdicional(rex);
        pausarAudioAdicional(tere);
        pausarAudioAdicional(espino);
        pausarAudioAdicional(raptor);
        pausarAudioAdicional(giga);
        pausarAudioAdicional(dilo);
    
        // Verifica se já existe um áudio do Indoraptor em reprodução e pausa se houver
        if (i_raptor) {
            i_raptor.pause();
        }
    
        // Escolhe um áudio aleatório do array i_raptorAudios e reproduz
        const indiceAleatorio = Math.floor(Math.random() * i_raptorAudios.length);
        i_raptor = new Audio(i_raptorAudios[indiceAleatorio]);
        i_raptor.currentTime = 0;
        i_raptor.play();
    
        // Adiciona animação ao corpo da página
        const bodyElement = document.querySelector('body');
        bodyElement.style.animation = 'shake 0.5s linear';
    
        // Remove a animação após 0.5 segundos
        setTimeout(function() {
            bodyElement.style.animation = '';
        }, 500); // 500 milissegundos = 0.5 segundos
    });
    



const espinoImg = document.getElementById('espinossauro');
let espino = null;

espinoImg.addEventListener('click', function() {
    // Modifica o conteúdo da imagem e do texto
    selectPersonImg.src = './src/imagens/espino.png';
    namePerson.innerText = 'Espinossauro';
    description.innerText = 'O primeiro dinossauro da franquia que desafiou o trono do T-Rex, e ainda venceu! O Espinossauro foi capaz de perseguir os protagonistas durante todo o filme, atravessando toda a ilha, em terra e água, movido por vingança.';
    
    // Pausa todos os outros áudios
    pausarAudioAdicional(indom);
    pausarAudioAdicional(rex);
    pausarAudioAdicional(tere);
    pausarAudioAdicional(i_raptor);
    pausarAudioAdicional(raptor);
    pausarAudioAdicional(giga);
    pausarAudioAdicional(dilo);

    // Verifica se já existe um áudio do Espinossauro em reprodução e pausa se houver
    if (espino) {
        espino.pause();
    }

    // Escolhe um áudio aleatório do array espinoAudios e reproduz
    if (reproducaoAutomaticaPermitida) {
        const indiceAleatorio = Math.floor(Math.random() * espinoAudios.length);
        espino = new Audio(espinoAudios[indiceAleatorio]);
        espino.currentTime = 0;
        espino.play();
    } else {
        // Mostre uma mensagem ou um botão para solicitar ao usuário que clique para reproduzir o áudio
        // Exemplo de mensagem: "Clique para reproduzir o áudio"
    } 
     
    // Adiciona animação ao corpo da página
    const bodyElement = document.querySelector('body');
    bodyElement.style.animation = 'shake 0.5s linear';
  
    // Remove a animação após 0.5 segundos
    setTimeout(function() {
        bodyElement.style.animation = '';
    }, 500); // 500 milissegundos = 0.5 segundos
});






