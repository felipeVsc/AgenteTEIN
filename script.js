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