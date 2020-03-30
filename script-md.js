//mon script de drum-kit

// jouer un son depuis un clic
function playSound(item) {
    //console.log(item);
    new Audio('sounds/'+item+'.wav').play();   
    document.getElementById(item).className = "pressed";
    setTimeout(function(){document.getElementById(item).className = "key";}, 17);
    

}

// eventListener pour les clics souris sur les touches 
const touches = document.querySelectorAll('div.key');

touches.forEach( (touche) => {
    touche.addEventListener('click', (e) => {
        playSound(touche.id);
    });
});

// eventListener pour les appuis clavier
document.addEventListener('keydown', (e) => {
    //console.log(e.code);
    switch(e.code) {
        case 'KeyA':
            playSound('clap');
            break;
        case 'KeyS':
            playSound('hihat');
            break;
        case 'KeyD':
            playSound('kick');
            break;
        case 'KeyF':
            playSound('openhat');
            break;
        case 'KeyG':
            playSound('boom');
            break;
        case 'KeyH':
            playSound('ride');
            break;
        case 'KeyJ':
            playSound('snare');
            break;
        case 'KeyK':
            playSound('tom');
            break;
        case 'KeyL':
            playSound('tink');
            break;
        default:
            console.log(e.code);
    }
});

//end of script