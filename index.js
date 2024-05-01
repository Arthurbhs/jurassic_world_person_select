const prosseguir = document.getElementById('next');
const theme = new Audio('./src/audio/Jurassic World Suite (128 kbps).mp3');

prosseguir.addEventListener('click', function() {
    theme.play();
});

const windowDiv = document.querySelector('.window');
const floatingDiv = document.querySelector('.floating-div');

prosseguir.addEventListener('click', function() {
windowDiv.style.display = 'none';
document.body.style.overflow = 'auto'; // Restaura a barra de rolagem, se estiver oculta
floatingDiv.style.display = 'none';
document.body.style.overflow = 'auto';
});





const cards = document.querySelectorAll('li.person_card');
const select =  new Audio('./src/audio/Game Menu Select Sound Effect (128 kbps).mp3');;

cards.forEach(function(card) {
card.addEventListener('click', function() {
select.currentTime = 0; // Reinicia a reprodução do áudio
select.play();
});
});


