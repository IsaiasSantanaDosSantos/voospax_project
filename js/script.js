//Para pegar a altura e a largura da tela do usuário.
var largura = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;
/*var altura = window.innerHeight
|| document.documentElement.clientHeight
|| document.body.clientHeight;*/



// #### ANIMAÇÃO DO ANEL ####
/*var img;
var vel; //Variável de velocidade
var dx;  //Variável de direção X
var px;  //Variável de posição X
var anima;
var estado;

//Função para iníciar a animação
function iniciar() {
    vel = 0.6
    dx = 1 //Valor positivo e esquerda valores negativos.
    px = 0
    estado = 1 //1 = movendo / 0 = parado
    img = document.getElementById("anel")

   //Chamar a função animacao
   animacao()
}

//Função da animação
function animacao() {
    px += dx * vel //px recebe px + dx * vel
    img.style.left = px + "px"

    if(px > largura - (largura*0.20)) {
        dx = -1
        img.style.top = "900px"
    } else if (px < 0) {
        dx = 1
        img.style.top = "380px"
    }
    /*
    if(px > 1000) {
        dx = -1
        img.style.top = "900px"
    } else if (px < 0) {
        dx = 1
        img.style.top = "400px"
    } 

    anima = requestAnimationFrame(animacao) //Iniciar função animacao
}

//Para iníciar quanto a pagina for carregada.
window.addEventListener("load", iniciar)

//####### Fim bloco animação anél

*/
//ANIMAÇÃO BOTÕES DOS CARDS PLANOS E BENEFÍCIOS

//ANIMAÇÃO BOTÃO PLANO 01
var cardPlanoOne = document.getElementById("card-pp-one")
var btnPlanoOne = document.getElementById("plano-01")

//Mudar cor
function mudarCorBtnPlanoOne() {
    btnPlanoOne.style.backgroundColor = "#ffff"
    btnPlanoOne.style.color = "#711ccb"
}

//Voltar a cor de antes
function voltarCorBtnPlanoOne(){
    btnPlanoOne.style.backgroundColor = "#711ccb"
    btnPlanoOne.style.color = "#ffff"
}
 //Eventos para chamar funções
cardPlanoOne.addEventListener('mouseover', mudarCorBtnPlanoOne)
cardPlanoOne.addEventListener('mouseout', voltarCorBtnPlanoOne)
// ##### Fim #####

//ANIMAÇÃO BOTÃO 02
var cardPlanoTwo = document.getElementById("card-pp-two")
var btnPlanoTwo = document.getElementById("plano-02")

//Mudar cor
function mudarCorBtnPlanoTwo() {
    btnPlanoTwo.style.backgroundColor = "#ffff"
    btnPlanoTwo.style.color = "#711ccb"
}

//Voltar a cor de antes
function voltarCorBtnPlanoTwo(){
    btnPlanoTwo.style.backgroundColor = "#711ccb"
    btnPlanoTwo.style.color = "#ffff"
}

//Eventos para chamar funções
cardPlanoTwo.addEventListener("mouseover", mudarCorBtnPlanoTwo)
cardPlanoTwo.addEventListener("mouseout", voltarCorBtnPlanoTwo)
// ##### Fim #####

//ANIMAÇÃO BOTÃO 03
var cardPlanoThree = document.getElementById("card-pp-three")
var btnPlanoThree = document.getElementById("plano-03")

//Mudar cor
function mudarCorBtnPlanoThree() {
    btnPlanoThree.style.backgroundColor = "#ffff"
    btnPlanoThree.style.color = "#711ccb"
}

//Voltar a cor de antes
function voltarCorBtnPlanoThree() {
    btnPlanoThree.style.backgroundColor = "#711ccb"
    btnPlanoThree.style.color = "#ffff"
}

//Eventos para chamar funções
cardPlanoThree.addEventListener("mouseover", mudarCorBtnPlanoThree)
cardPlanoThree.addEventListener("mouseout", voltarCorBtnPlanoThree)
// ##### Fim #####

//PAGE CADASTRO 
//Botão cadastrar
function cadastrar() {
    const nomeCadastro = document.querySelector("#nomeCadastro");
    const senhaDeCadastro = document.getElementById("senhaCadasto")
    const emailDeCadastro = document.getElementById("emailCadastro")
    const dataNascCadastro = document.getElementById('dataNascCadastro')
    const termos = document.getElementById('termosPrivacidade')
    
    
    const nomeForm = nomeCadastro.value;
    const emailCadastro = emailDeCadastro.value;
    const senhaCadasto = senhaDeCadastro.value
    const dataNasc = dataNascCadastro.value
    
    //Resgatar data atual
    let dataAtual = new Date()
    let anoAtual = dataAtual.getFullYear()
    let mesAtual = dataAtual.getMonth() + 1
    let diaAtual = dataAtual.getDate()
    let hoje = (anoAtual+'-'+ mesAtual +'-'+diaAtual)
    
    if (nomeForm.length == '') {
        alert('ERRO! Digite seu nome.')
    }
    else if (nomeForm.length < 10) {
        alert("Precisa digitar seu nome completo!")
    } 
    else if (senhaCadasto.length < 6) {
        alert("ERRO! A senha precisa ter de 6 a 10 caracteres!")
    } 
    else if (dataNasc == "") {
        alert("ERRO! Falta a data de nascimento!")
    }

    
    
     
    console.log("Nome: "+nomeForm)
    console.log("E-mail: "+emailCadastro)
    console.log("Senha:" +senhaCadasto)
    console.log("Data nasc: "+dataNasc)
    console.log("Data atual: "+hoje)
    
    
}

//Função para validar e-mail
function checarEmail(){
    if( document.forms[0].emailCadastro.value=="" 
       || document.forms[0].emailCadastro.value.indexOf('@')==-1 
         || document.forms[0].emailCadastro.value.indexOf('.')==-1 )
        {
          alert( "Por favor, informe um E-MAIL válido!" );
          return false;
        }
    
    }

//PAGE RECUPERAR SENHA
//Botão continuar
//Função para validar e-mail
function recuperarSenha() {
    var emailRecupSenha = document.getElementById("emailRecupSenha")
    var emailRecuperarSenha = emailRecupSenha.value

    if( document.forms[0].emailRecupSenha.value=="" 
       || document.forms[0].emailRecupSenha.value.indexOf('@')==-1 
         || document.forms[0].emailRecupSenha.value.indexOf('.')==-1 )
        {
          alert( "ERRO! Informe um E-MAIL válido!" );
          return false;
        }
}