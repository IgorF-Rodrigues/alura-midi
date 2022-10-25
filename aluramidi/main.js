const teclas = document.querySelectorAll('.tecla');

teclas.forEach(tecla => {
    
    tecla.addEventListener('click',(event) => {
       let instrumento = event.target.classList[1];

       const som = document.querySelector(`#som_${instrumento}`);

       som.play();
    });

    tecla.addEventListener('keydown', (event) => {

        if (event.code == 'Space' || event.code == 'Enter') {
            tecla.classList.add('ativa');
        };
    });

    tecla.addEventListener('keyup', (event) => {
        
        if(event.code == 'Space' || event.code == 'Enter') {
            tecla.classList.remove('ativa');
        };
    });
});

