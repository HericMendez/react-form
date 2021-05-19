function validarNome(nome){
    if(nome == ''){
      return {
        valido:false,
        nomeMsg: "Campo obrigatório"
      }
    } else{
      return {
        valido:true,
        nomeMsg: ""
      }
    }
  }

  export default validarNome;

  

  

