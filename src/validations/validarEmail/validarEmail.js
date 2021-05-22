function validarEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  console.log(regex.test(email));
  if(email.length==0){
    return {
        valido: false,
        msg: "Insira seu e-mail!",
      };
  }else if (regex.test(email) == false) {
    return {
      valido: false,
      msg: "Formato de e-mail inválido!",
    };
  }else{
    return {
        valido: true,
        msg: "",
      };
  }
}

export default validarEmail;
