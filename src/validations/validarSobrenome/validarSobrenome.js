function validarSobrenome(sobrenome) {
  if (sobrenome == "") {
    return {
      valido: false,
      msg: "Insira seu sobrenome!",
    };
  } else {
    return {
      valido: true,
      msg: "",
    };
  }
}

export default validarSobrenome;
