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
    selectPersonImg.src = './src/imagens/giga.png'; // Modifica o endereço da imagem
    namePerson.innerText = 'giganotossauro'; // Modifica o conteúdo do elemento <h2>
     description.innerText = 'giganotossauro, um monstro gigante que Apareceu no ultimo filme da trilogia de jurassic world, foi o principal dinossauro antagonista do filme se sobrepondo a t.rex numa batalha mortal.'; 
     pausarAudioAdicional(indom);
     pausarAudioAdicional(espino);
     pausarAudioAdicional(tere);
     pausarAudioAdicional(i_raptor);
     pausarAudioAdicional(raptor);
     pausarAudioAdicional(rex);
     pausarAudioAdicional(dilo);
 
     if (giga) {
         giga.pause();
     }
 
 
 
    
     
     // Solicita a reprodução do áudio ao usuário após um clique
     if (reproducaoAutomaticaPermitida) {
         const indiceAleatorio = Math.floor(Math.random() * gigaAudios.length);
         giga = new Audio(gigaAudios[indiceAleatorio]);
         giga.currentTime = 0;
         giga.play();
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

const rexImg = document.getElementById('t_rex');
let rex = null;

rexImg.addEventListener('click', function() {
    selectPersonImg.src = './src/imagens/t_rex.png'; // Modifica o endereço da imagem
    namePerson.innerText = 'tyranossauro (rexy)'; // Modifica o conteúdo do elemento <h2>
     description.innerText = 'rexy, ou roberta para os mais chegados, e o t.rex que apareceu no primeiro filme da franquia, e apareceu em todos os filmes da trilogia de jurassic world, sendo  considerado a rainha dos dinossauros.'; 
    
     
     pausarAudioAdicional(indom);
    pausarAudioAdicional(espino);
    pausarAudioAdicional(tere);
    pausarAudioAdicional(i_raptor);
    pausarAudioAdicional(raptor);
    pausarAudioAdicional(giga);
    pausarAudioAdicional(dilo);

    if (rex) {
        rex.pause();
    }



   
    
    // Solicita a reprodução do áudio ao usuário após um clique
    if (reproducaoAutomaticaPermitida) {
        const indiceAleatorio = Math.floor(Math.random() * rexAudios.length);
        rex = new Audio(rexAudios[indiceAleatorio]);
        rex.currentTime = 0;
        rex.play();
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

const indomImg = document.getElementById('indominus_rex');


let indom = null;


indomImg.addEventListener('click', function() {
    selectPersonImg.src = './src/imagens/i_rex.png';
    namePerson.innerText = 'indominus rex';
    description.innerText = 'O primeiro híbrido que nos é apresentado na franquia, com o DNA de t.rex, raptor, carnotauro e vários outros. Feito para ser a principal atração do parque, mas se tornou sua ruína.';
    
    // Pausar o áudio das constantes adicionais
    pausarAudioAdicional(rex);
    pausarAudioAdicional(espino);
    pausarAudioAdicional(tere);
    pausarAudioAdicional(i_raptor);
    pausarAudioAdicional(raptor);
    pausarAudioAdicional(giga);
    pausarAudioAdicional(dilo);

    if (indom) {
        indom.pause();
    }



    
    
    // Solicita a reprodução do áudio ao usuário após um clique
    if (reproducaoAutomaticaPermitida) {
        const indiceAleatorio = Math.floor(Math.random() * indomAudios.length);
        indom = new Audio(indomAudios[indiceAleatorio]);
        indom.currentTime = 0;
        indom.play();
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


const blueImg = document.getElementById('blue');
let raptor = null;

blueImg.addEventListener('click', function() {
    selectPersonImg.src = './src/imagens/blue.png'; // Modifica o endereço da imagem
    namePerson.innerText = 'velociraptor (blue)'; // Modifica o conteúdo do elemento <h2>
    description.innerText = 'Aqui nós temos a última espécime de velociraptor da InGen, blue esteve em todos os filmes da nova trilogia de Jurassic World, e no último filme, ela se reproduziu, gerando a Beta, sua filha'; 

    pausarAudioAdicional(rex);
    pausarAudioAdicional(espino);
    pausarAudioAdicional(tere);
    pausarAudioAdicional(i_raptor);
    pausarAudioAdicional(dilo);
    pausarAudioAdicional(giga);
    pausarAudioAdicional(indom);

    if (raptor) {
        raptor.pause();
    }

    // Solicita a reprodução do áudio ao usuário após um clique
    if (reproducaoAutomaticaPermitida) {
        const indiceAleatorio = Math.floor(Math.random() * raptorAudios.length);
        raptor = new Audio(raptorAudios[indiceAleatorio]);
        raptor.currentTime = 0;
        raptor.play();
    } else {
        // Mostre uma mensagem ou um botão para solicitar ao usuário que clique para reproduzir o áudio
        // Exemplo de mensagem: "Clique para reproduzir o áudio"
    } 
     
    const bodyElement = document.querySelector('body');

    // Adiciona a animação ao CSS do "body"
    bodyElement.style.animation = 'shake 0.5s linear';
  
    // Remove a animação após 0.5 segundos
    setTimeout(function() {
        bodyElement.style.animation = '';
    }, 500); // 500 milissegundos = 0.5 segundos
});

    

    const diloImg = document.getElementById('dilofossauro');
    let dilo = null;
    
    diloImg.addEventListener('click', function() {
        selectPersonImg.src = './src/imagens/dilo.png'; // Modifica o endereço da imagem
        namePerson.innerText = 'dilofossauro'; // Modifica o conteúdo do elemento <h2>
        description.innerText = 'Um clássico! O dilofossauro apareceu pela primeira vez no primeiro filme da saga, com sua icônica gola e sua capacidade de cuspir veneno'; 
    
        pausarAudioAdicional(rex);
        pausarAudioAdicional(espino);
        pausarAudioAdicional(tere);
        pausarAudioAdicional(i_raptor);
        pausarAudioAdicional(raptor);
        pausarAudioAdicional(giga);
        pausarAudioAdicional(indom);
    
        if (dilo) {
            dilo.pause();
        }
    
        // Solicita a reprodução do áudio ao usuário após um clique
        if (reproducaoAutomaticaPermitida) {
            const indiceAleatorio = Math.floor(Math.random() * diloAudios.length);
            dilo = new Audio(diloAudios[indiceAleatorio]);
            dilo.currentTime = 0;
            dilo.play();
        } else {
            // Mostre uma mensagem ou um botão para solicitar ao usuário que clique para reproduzir o áudio
            // Exemplo de mensagem: "Clique para reproduzir o áudio"
        } 
         
        const bodyElement = document.querySelector('body');
    
        // Adiciona a animação ao CSS do "body"
        bodyElement.style.animation = 'shake 0.5s linear';
      
        // Remove a animação após 0.5 segundos
        setTimeout(function() {
            bodyElement.style.animation = '';
        }, 500); // 500 milissegundos = 0.5 segundos
    });
    


const indorImg = document.getElementById('indoraptor');

let i_raptor = null;

indorImg.addEventListener('click', function() {
    selectPersonImg.src = './src/imagens/indoraptor.png'; // Modifica o endereço da imagem
    namePerson.innerText = 'indoraptor'; // Modifica o conteúdo do elemento <h2>
    description.innerText = 'o sucessor da indominus, foi projetado pra guerra, sendo o hibrido mais letal para o ser humano, infelizmente por roteiro..... E, ele morreu'; 
    pausarAudioAdicional(indom);
    pausarAudioAdicional(rex);
    pausarAudioAdicional(tere);
    pausarAudioAdicional(espino);
    pausarAudioAdicional(raptor);
    pausarAudioAdicional(giga);
    pausarAudioAdicional(dilo);

    if (i_raptor) {
        i_raptor.pause();
    }

    
    // Solicita a reprodução do áudio ao usuário após um clique
    if (reproducaoAutomaticaPermitida) {
        const indiceAleatorio = Math.floor(Math.random() * i_raptorAudios.length);
        i_raptor = new Audio(i_raptorAudios[indiceAleatorio]);
        i_raptor.currentTime = 0;
        i_raptor.play();
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

const espinoImg = document.getElementById('espinossauro');
let espino = null;

espinoImg.addEventListener('click', function() {
    
    selectPersonImg.src = './src/imagens/espino.png'; // Modifica o endereço da imagem
    namePerson.innerText = 'espinossauro'; // Modifica o conteúdo do elemento <h2>
    description.innerText = 'O primeiro dinossauro da franquia que desafiou o trono do t.rex, e ainda venceu! O espinossauro foi capaz de persseguir os protagonistas durando todo filme, atravessando toda a ilha, em terra e agua, movido por vingança'; 
   
    pausarAudioAdicional(indom);
    pausarAudioAdicional(rex);
    pausarAudioAdicional(tere);
    pausarAudioAdicional(i_raptor);
    pausarAudioAdicional(raptor);
    pausarAudioAdicional(giga);
    pausarAudioAdicional(dilo);

    if (espino) {
        espino.pause();
    }

    
    // Solicita a reprodução do áudio ao usuário após um clique
    if (reproducaoAutomaticaPermitida) {
        const indiceAleatorio = Math.floor(Math.random() * espinoAudios.length);
        espino = new Audio(espinoAudios[indiceAleatorio]);
        espino.currentTime = 0;
        espino.play();
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







