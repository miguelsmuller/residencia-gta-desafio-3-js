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
      title = JSON.stringify(pegaJson[y].title)
      subtitle = JSON.stringify(pegaJson[y].subtitle)
      linkArticle = JSON.stringify(pegaJson[y].linkArticle)
      image = JSON.stringify(pegaJson[y].image)
      //const timer = ms => new Promise(res => setTimeout(res, ms))
        $('#areatexto').append('<div id="areatexto"><h4>Título:' + title + '</h4>')
        for(let i = 0; i < linkArticle; i++){
          $('#areatexto').append('<h3>Matéria relacionada:' + linkArticle[i] + '</h3>')
        }
        $('#areatexto').append('<div id="images"><img src="' + image + '"</div>')
    //    await timer(2000);
    }
}
