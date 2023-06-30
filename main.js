// Pega todas as teclas
const listaDeTeclas = document.querySelectorAll('.tecla');

//Função para tocar o Som
function tocaSom(idElementoAudio) {

  //Elemento audio
  const elementoAudio = document.querySelector(idElementoAudio)

  //Verifica se o elemento é valido e existe 
  if (elementoAudio != null && elementoAudio.localName === 'audio') {
    //toca o som do elemento
    elementoAudio.play();
  }else{

    //mensagem de erro
    console.log('Elemento não encontrado ou seletorInvalido')
  }

}
// O laço de repetição for(para) percorre a lista de teclas 
for (let contador = 0; contador < listaDeTeclas.length; contador++) {
  // tecla
  const tecla = listaDeTeclas[contador]

  // Pega a segunda classe do elemento botão
  const instrumento = tecla.classList[1]

  // Forma a class referente ao som do instrumento 
  const idAudio = `#som_${instrumento}`

  //evento de click que chama a função para tocar o som
  tecla.onclick = function () {
    tocaSom(idAudio)
  };
  //Adicionando a class "ativa" no botão clicado
  tecla.onkeydown = function (event) {
    //Reestringe a incerção da classe ativo para apenas quando clicar enter ou espaço
    if (event.code === "Space" || event.code === "Enter") {
      tecla.classList.add('ativa');
    }
  }
  //Remove a classe "ativo" quando a tecla não estiver sento precionada  
  tecla.onkeyup = function () {
    tecla.classList.remove('ativa')
  }

}
