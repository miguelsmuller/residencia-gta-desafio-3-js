// definicao das variaveis globais
let conteudoDiv;
let pegaJson;

// pega conteudo do json
async function getData(){
    await fetch('https://run.mocky.io/v3/401d53bb-8e52-41c6-a761-f7e1a6cc19aa')
        .then(response => response.json())  // convert to json
        .then(json => {pegaJson = json})  //print data to console
        .catch(err => console.log('Request Failed', err));
        
    montaAppendAPI();
}

// inicia js
window.onload = () => getData();

// pega as informacoes da api e cria o append pra inserir na tela
async function montaAppendAPI(){
  let usuario
  let mensagem 

  for(var i = 0; i < 5; i++){
    for(var y = 0; y < pegaJson.messages.length; y++){
      usuario = JSON.stringify(pegaJson.messages[y].sender)
      mensagem = JSON.stringify(pegaJson.messages[y].msg)
      conteudoDiv = usuario + ": " + mensagem.replace(/['"]+/g, '')
      conteudoDiv = conteudoDiv.replace(/"([^"]+)":/g, '$1:')
      const timer = ms => new Promise(res => setTimeout(res, ms))
        $('#areatexto').append('<div id="areatexto"><h4>Título:' + usuario + '</h4><h5>GLOBONEWS: assista às últimas notícias sobre a guerra na Ucrânia</h5><h4>Matéria relacionada:' + usuario + '</h4><h5>Ucrânia tem engarrafamentos e corrida ao mercado; armas são distribuídas</h5></div>');
        $('#areatexto').append('<div id="images"><img src="bob_esponja.png"></div>')
        await timer(2000); 
    } 
  }
}

// inclui mensagem digitada na tela pelo usuario
function incluiMensagem(){
    let texto_msg = $("#message").val()
    $('#areatexto').append('<div id="areatexto"><td><svg width="50" height="50"><rect width="50" height="50" style="fill:rgb(255, 145, 0);"/><circle cx="25" cy="25" r="20" fill="white" /></svg><textarea disabled="" style="font-weight: bold; margin-top: 0px" rows="3" cols="150">Você: ' + texto_msg + '</textarea><small>&nbsp;20:45</small></td></div>'); 
}

