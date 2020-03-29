//mon script de drum-kit

function playSound(item) {
    console.log(item);
    
}



// eventListener pour les clics souris sur les touches 
const touches = document.querySelectorAll('div.key');

touches.forEach( (touche) => {
    touche.addEventListener('click', (e) => {
        playSound(touche.id);
    });
});


// eventListener pour les appuis clavier
const claviers = document.querySelectorAll('div.key');

claviers.forEach( (clavier) => {
    clavier.addEventListener('keypress', (e) => {
        console.log(e.code);
    });
});
