// definicao das variaveis globais
let conteudoDiv;
let pegaJson;

// pega conteudo do json
async function getData(){
    await fetch('./noticiasFromG1.json')
        .then(response => response.json())  // convert to json
        .then(json => {
          console.log(json)
          pegaJson = json
        })  //print data to console
        .catch(err => console.log('Request Failed', err));

    montaAppendAPI();
}

// inicia js
window.onload = () => getData();

// pega as informacoes da api e cria o append pra inserir na tela
async function montaAppendAPI(){
  let usuario
  let mensagem

    for(var y = 0; y < pegaJson.length; y++){
      title = pegaJson[y].title
      subtitle = pegaJson[y].subtitle
      linkArticle = [pegaJson[y].linkArticle]
      image = pegaJson[y].image

      $('#areatexto').append('<div id="areatexto"><h4>Título:' + title + '</h4>')
      for(let i = 0; i < linkArticle.length > 0; i++){
        $('#areatexto').append('<h3>Matéria relacionada:' + linkArticle[i] + '</h3>')
      }
      $('#areatexto').append('<div id="images"><img src="' + image + '"</div>')
    }
}
