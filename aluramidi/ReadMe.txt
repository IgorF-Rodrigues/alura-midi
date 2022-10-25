/*const teclas = document.querySelectorAll('.tecla');

function tocaSom(seletorAudio) {
	const audio = document.querySelector(seletorAudio)
	audio.play()
}

teclas.forEach((elemento) => {
	elemento.addEventListener('click', (clicou) => {
		let som = clicou.target.textContent
		let idAudio =`#som_tecla_${som}`
		console.log(idAudio)
		tocaSom(idAudio)

	})
})
*/
function tocaSom(seletorAudio){
	const elemento = document.querySelector(seletorAudio);

	if(elemento && elemento.localName === 'audio') {
		elemento.play();
	} else {
		console.log('Elemento não encontrado ou seletor inválido');
	}
}

const listaDeTeclas = document.querySelectorAll('.tecla');	

for (let contador = 0; contador < listaDeTeclas.length; contador++) {
	const lista = listaDeTeclas[contador];
	const instrumento = lista.classList[1];
	const idAudio = `#som_${instrumento}`

	lista.onclick = function() {
		tocaSom(idAudio);
	};

	lista.onkeydown = function(evento) {
		if(evento.code === 'Space' || evento.code === 'Enter') {
			lista.classList.add('ativa');
		}
	}

	lista.onkeyup = function(evento) {
		if(evento.code === 'Space' || evento.code === 'Enter') {
			lista.classList.remove('ativa');
		}
	}
}