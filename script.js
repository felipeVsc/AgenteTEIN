function nextPage(idActualDiv, idNextDiv) {
  document.getElementById(idActualDiv).classList.add('hidden');
  document.getElementById(idNextDiv).classList.remove('hidden');
};

function mudarTexto(idTexto){
  let atual = document.getElementById('textoModel');
  atual.innerText = idTexto;
};

function mudarImagem(idImagem){
  document.getElementById("imgIcone").src="icons/"+idImagem+".png";  
};

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
};

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
};

var firebaseConfig = {
  apiKey: "AIzaSyB2_RDWk68PRh8Y58MJ0CbN8BkuPNTh1JU",
  authDomain: "agentetein.firebaseapp.com",
  databaseURL: "https://agentetein.firebaseio.com",
  projectId: "agentetein",
  storageBucket: "agentetein.appspot.com",
  messagingSenderId: "166401056761",
  appId: "1:166401056761:web:fd693f486b88eb13eda728"
};

firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore();

// LOGIN PROF SAUDE

  console.log("a");
  var btLogarPS = document.getElementById("btLogarPS");
  btLogarPS.addEventListener("click", function(){
    document.getElementById("emailPS") == "";
    
    var emailPS = document.getElementById("emailPS").value;
    var senhaPS = document.getElementById("senhaPS").value;
    var docRefLogin = firestore.collection("profSaude").doc(emailPS);
    console.log("testado");
    docRefLogin.get().then(function(doc) {
        if (doc && doc.exists){
          const myData = doc.data();
          if (myData.senhaPS == senhaPS){
            console.log(myData.emailPS);
            document.getElementById("login").classList.add('hidden');
            document.getElementById("main").classList.remove('hidden');
          }
          else{
            console.log("senha errada");
          }
        }
      }).catch(function (error){
        console.log("error");
      })
    });

    
  
document.getElementById("painelVisita").addEventListener("click", function(){
  document.getElementById("main").classList.add('hidden');
  document.getElementById("cadMoradia").classList.remove('hidden');
  var btCadMoradia = document.getElementById("btCadMoradia");
  console.log("b");
  btCadMoradia.addEventListener("click", function(){
    console.log("clicado");
    
    document.getElementById("numSusRespMoradia").value == "";
    var numSusRespMoradia = document.getElementById("numSusRespMoradia").value;
    var docRef = firestore.collection("cadastrosPS").doc(numSusRespMoradia); 
    
    
      docRef.set({
        cepCadMoradia: document.getElementById("cepCadMoradia").value,
        numeroCadMoradia: document.getElementById("numeroCadMoradia").value,
        ruaCadMoradia: document.getElementById("ruaCadMoradia").value,
        numSusRespMoradia: document.getElementById("numSusRespMoradia").value,
        temAbastAguaMoradia: document.getElementById("temAbastAguaMoradia").value,
        temAnimalMoradia: document.getElementById("temAnimalMoradia").value,
        temEsgotoMoradia: document.getElementById("temEsgotoMoradia").value,
        temLixoMoradia: document.getElementById("temLixoMoradia").value
      })
      document.getElementById("cadMoradia").classList.add('hidden');
      document.getElementById("cadInd").classList.remove('hidden');
  });
  var btCadInd = document.getElementById("btCadInd");
  console.log("c");
  btCadInd.addEventListener("click", function(){
    console.log("clicado");
    
    document.getElementById("numSusInd").value == "";
    var numSusInd = document.getElementById("numSusInd").value;
    // talvez de erro aqui com o numSusRespMoradia
    var ref2 = firestore.collection("cadastrosPS").doc(numSusRespMoradia.value).collection("individuos").doc(numSusInd); 
      ref2.set({
        numSusInd: document.getElementById("numSusInd").value,
        parentescoInd: document.getElementById("parentescoInd").value,
        escolaridadeInd: document.getElementById("escolaridadeInd").value,
        generoInd: document.getElementById("generoInd").value,
        temDeficienciaInd: document.getElementById("temDeficienciaInd").value,
        ficaComQuemInd: document.getElementById("ficaComQuemInd").value,
        temPlanoDeSaudeInd: document.getElementById("temPlanoDeSaudeInd").checked,
        seMudouInd: document.getElementById("seMudouInd").checked,
        estaVivoInd: document.getElementById("estaVivoInd").checked
      })


      document.getElementById("cadInd").classList.add('hidden');
      document.getElementById("cadSaude").classList.remove('hidden');
    
  });

  var btCadSaude = document.getElementById("btCadSaude");
  btCadSaude.addEventListener("click", function(){
    console.log("clicado");
    
    document.getElementById("numSusSaude").value == "";
    var numSusInd = document.getElementById("numSusSaude").value;
    // talvez de erro aqui com o numSusRespMoradia
    var ref2 = firestore.collection("cadastrosPS").doc(numSusRespMoradia.value).collection("individuos").doc(numSusInd).collection("saude").doc(document.getElementById("numSusSaude").value); 
      ref2.set({
        numSusSaude: document.getElementById("numSusSaude").value,
        dCardiacaSaude: document.getElementById("dCardiacaSaude").value,
        pesoSaude: document.getElementById("pesoSaude").value,
        dRespSaude: document.getElementById("dRespSaude").value,
        dRinsSaude: document.getElementById("dRinsSaude").value,
        fumanteSaude: document.getElementById("fumanteSaude").checked,
        seMudouSaude: document.getElementById("seMudouSaude").checked,
        alcoolSaude: document.getElementById("alcoolSaude").checked,
        diabetesSaude: document.getElementById("diabetesSaude").checked,
        drogasSaude: document.getElementById("drogasSaude").checked,
        avcDerrameSaude: document.getElementById("avcDerrameSaude").checked,
        hipertensoSaude: document.getElementById("hipertensoSaude").checked,
        cancerSaude: document.getElementById("cancerSaude").checked
      })


      document.getElementById("cadSaude").classList.add('hidden');
      document.getElementById("cadCid").classList.remove('hidden');
    
  });

  // cadcid

  var btCadastrarCidRua = document.getElementById("btCadastrarCidRua");
  btCadastrarCidRua.addEventListener("click", function(){
    console.log("clicado");
    document.getElementById("susCidRua").value == "";
    var susCidRua = document.getElementById("susCidRua").value;
    // talvez de erro aqui com o numSusRespMoradia
    var docRef = firestore.collection("cidRua").doc(susCidRua); 
      docRef.set({
        numSusCRua: document.getElementById("susCidRua").value,
        tempoRua: document.getElementById("tempoRua").value,
        alimentacaoDia: document.getElementById("alimentacaoDia").value,
        origemAlimentacao: document.getElementById("origemAlimentacao").value,
        higienePessoal: document.getElementById("higienePessoal").value,
        temBeneficio: document.getElementById("temBeneficio").checked,
        temRefFamiliar: document.getElementById("temRefFamiliar").checked
      })
      document.getElementById("cadCid").classList.add('hidden');
      document.getElementById("main").classList.remove('hidden');
    
  });
})


        



document.getElementById("painelVisita").addEventListener("click", function(){
  $('#botoesInt button').click(function() {
    $(this).addClass('active').siblings().removeClass('active');

    // TODO: insert whatever you want to do with $(this) here
});
  var btCadastrarNotMapa = document.getElementById("btCadastrarNotMapa");
  btCadastrarNotMapa.addEventListener("click", function(){
    console.log("clicado");
    
    
    // talvez de erro aqui com o numSusRespMoradia
    var docRef = firestore.collection("notificacoesMapa"); 
    var valorIntensidade;
    if (document.getElementById("mpBaixaInt").classList.contains("active")==true){
      valorIntensidade=="baixo";
    }
    else if(document.getElementById("mpMediaInt").classList.contains("active")==true){
      valorIntensidade=="moderado";
    }
    else{
      valorIntensidade=="alto";
    }
      docRef.set({
        textoModel: document.getElementById("textoModel").value,
        mapaCEP: document.getElementById("mapaCEP").value,
        mapaNumero: document.getElementById("mapaNumero").value,
        mapaRua: document.getElementById("mapaRua").value,
        msgMapa: document.getElementById("msgMapa").value,
        mapaIntensidade: valorIntensidade,
        isVerified: false        
      })
      
    
  });
})
  

document.getElementById("painelNot").addEventListener("click", function(){
  document.getElementById("main").classList.add('hidden');
  document.getElementById("notif").classList.remove('hidden');
  console.log("teste")
  var notDocRef = firestore.collection("users");
  console.log("testado");
  notDocRef.get().then(function(doc) {
    doc.forEach(function(doc) {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.data().emailUsuario);
  });

    }).catch(function (error){
      console.log("error");
    })
})

// ALERTA USUARIO

var btEnviarAlerta = document.getElementById("btEnviarAlerta");
btEnviarAlerta.addEventListener("click", function(){

  docRef.set({
    msgAlerta: document.getElementById("msgAlerta").value,
    foiValidado: false    

  })
});


// pegar notificacoes
