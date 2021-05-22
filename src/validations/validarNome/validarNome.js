function validarNome(nome){
    if(nome == ''){
      return {
        valido:false,
        msg: "Insira seu nome!"
      }
    } else{
      return {
        valido:true,
        msg: ""
      }
    }
  }

  export default validarNome;

  

  

