$(function () {
    $('[data-toggle="popover"]').popover()
  })
  
$('#modalExemplo').on('shown.bs.modal', function (event) {
  $("#testebotao").trigger("click");  
});

  $("#testebotao").on("click",function(){
  console.log("button inside modal clicked");
  
  
  });

function mudarTexto(idTexto){
  let atual = document.getElementById('textoModel');
  atual.innerText = idTexto;

};

function mudarImagem(idImagem){
  document.getElementById("imgIcone").src="icons/"+idImagem+".png";
  
}

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
};

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
};


function nextPage(idActualDiv, idNextDiv) {
  document.getElementById(idActualDiv).classList.add('hidden')
  document.getElementById(idNextDiv).classList.remove('hidden')
}

// CLOUD FIRESTONE

var firebaseConfig = {
  apiKey: "AIzaSyB2_RDWk68PRh8Y58MJ0CbN8BkuPNTh1JU",
  authDomain: "agentetein.firebaseapp.com",
  databaseURL: "https://agentetein.firebaseio.com",
  projectId: "agentetein",
  storageBucket: "agentetein.appspot.com",
  messagingSenderId: "166401056761",
  appId: "1:166401056761:web:fd693f486b88eb13eda728"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
  apiKey: "AIzaSyB2_RDWk68PRh8Y58MJ0CbN8BkuPNTh1JU",
  authDomain: "agentetein.firebaseapp.com",
  projectId: "agentetein"
});

var db = firebase.firestore();

// BANCO PROPRIAMENTE DITO

// USUARIO

var btCadastrar = document.getElementById("btCadastrar");
btCadastrar.addEventListener("click", function(){

  if(document.getElementById("senhaUsuario").value == document.getElementById("senhaUsuarioRepetir").value){
    docRef.set({
      nomeUsuario: document.getElementById("nomeUsuario").value;
      emailUsuario: document.getElementById("emailUsuario").value;
      senhaUsuario: document.getElementById("senhaUsuario").value;
      numSusUsuario: document.getElementById("numSusUsuario").value;
      cepUsuario: document.getElementById("cepUsuario").value;
      numeroUsuario: document.getElementById("numeroUsuario").value;
      enderecoUsuario: document.getElementById("enderecoUsuario").value;
      
  
    })
  }
  else{
    alert("erro");
  }
});

// login user
var btLogar = document.getElementById("btLogar");
btLogar.addEventListener("click", function(){
  db.collection("usuarios").where("email", "==", emailUsuario)
  .get()
  .then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
          const myData = doc.data();
          
          if(myData.senha==document.getElementById("senhaLogin").value){
            //nextPage(idActualDiv,idNextDiv)
          }
      });
  })
  .catch(function(error) {
      console.log("Nao existe email", error);
  });

});


// ALERTA USUARIO

var btEnviarAlerta = document.getElementById("btEnviarAlerta");
btEnviarAlerta.addEventListener("click", function(){

  docRef.set({
    msgAlerta: document.getElementById("msgAlerta").value;
    foiValidado: false    

  })
});


// CADIND FALTA COLOCAR COMO SUBCOLECAO

var btCadastrarInd = document.getElementById("btCadastrarInd");
btCadastrarInd.addEventListener("click", function(){

  
    docRef.set({
      numSusInd: document.getElementById("numSusInd").value;
      parentescoInd: document.getElementById("parentescoInd").value;
      escolaridadeInd: document.getElementById("escolaridadeInd").value;
      generoInd: document.getElementById("generoInd").value;
      temDeficienciaInd: document.getElementById("temDeficienciaInd").value;
      ficaComQuemInd: document.getElementById("ficaComQuemInd").value;
      temPlanoDeSaudeInd: document.getElementById("temPlanoDeSaudeInd").value;
      seMudouInd: document.getElementById("seMudouInd").value;
      estaVivoInd: document.getElementById("estaVivoInd").value;
      
  
    })
   
});

// CADMORD
var btCadastrarMoradia = document.getElementById("btCadastrarMoradia");
btCadastrarMoradia.addEventListener("click", function(){

  
    docRef.set({
      numSusResp: document.getElementById("numSusResp").value;
      cepMoradia: document.getElementById("cepMoradia").value;
      ruaMoradia: document.getElementById("ruaMoradia").value;
      numeroMoradia: document.getElementById("numeroMoradia").value;
      temAguaMoradia: document.getElementById("temAguaMoradia").value;
      temAnimalMoradia: document.getElementById("temAnimalMoradia").value;
      temEsgotoMoradia: document.getElementById("temEsgotoMoradia").value;
      temColetaLixoMoradia: document.getElementById("temColetaLixoMoradia").value;
      
  
    })
   
});
// CADSAUDE 

// NOTIFICACAO

// NOTMAPA
var btNotfMapa = document.getElementById("btNotfMapa");

var nomePusar;
function setarNome(idNome){
  var nomePusar = document.getElementById(idNome);

}

btNotfMapa.addEventListener("click", function(){

  // cep num rua intensidade obs
    docRef.set({
      numSusCRua: document.getElementById("numSusCRua").value;
      tempoRua: document.getElementById("tempoRua").value;
      alimentacaoDia: document.getElementById("alimentacaoDia").value;
      origemAlimentacao: document.getElementById("origemAlimentacao").value;
      higienePessoal: document.getElementById("higienePessoal").value;
      temBeneficio: document.getElementById("temBeneficio").value;
      temRefFamiliar: document.getElementById("temRefFamiliar").value;
      
  
    })
   
});


// CIDADAO DE RUA

var btCadastrarCidRua = document.getElementById("btCadastrarCidRua");
btCadastrarCidRua.addEventListener("click", function(){

  
    docRef.set({
      numSusCRua: document.getElementById("numSusCRua").value;
      tempoRua: document.getElementById("tempoRua").value;
      alimentacaoDia: document.getElementById("alimentacaoDia").value;
      origemAlimentacao: document.getElementById("origemAlimentacao").value;
      higienePessoal: document.getElementById("higienePessoal").value;
      temBeneficio: document.getElementById("temBeneficio").value;
      temRefFamiliar: document.getElementById("temRefFamiliar").value;
      
  
    })
   
});