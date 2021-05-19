function validarCPF(cpf) {
  var reg = /^\d+$/;
  if (cpf.length !== 11) {
    return {
      valido: false,
      cpfMsg: "CPF deve ter 11 dígitos!",
    };
  }else if(reg.test(cpf)==false){
    return {
      valido: false,
      cpfMsg: "DIGITE APENAS NÚMEROS SEU ANIMAL!"
    };
  }else {
    
    const output = [];
    let sNumber = cpf.toString();

    for (var i = 0, len = sNumber.length; i < len; i += 1) {
      output.push(+sNumber.charAt(i));
    }

    var sequencia1 = output;

    let mod10 = 10;
    var numbers1 = [];
    var soma1 = 0;

    for (let i = 0; i < 9; i++) {
      numbers1 = sequencia1[i] * mod10;
      mod10--;
      soma1 += numbers1;
      //console.log(numbers)
      //console.log(soma)
    }
    let digito1 = 11 - (soma1 % 11);
    //console.log(digito1)

    var sequencia2 = output;

    let mod11 = 11;
    let numbers2 = [];
    let soma2 = 0;

    for (let i = 0; i < 10; i++) {
      numbers2 = sequencia2[i] * mod11;
      mod11--;
      soma2 += numbers2;
    }

    let digito2 = 11 - (soma2 % 11);
    var r1 = digito1.toString();
    var r2 = digito2.toString();

    var cpfid = output;

    let n1 = cpfid[9].toString();
    let n2 = cpfid[10].toString();

    let resultCalc = r1 + r2;
    let cpfInput = n1 + n2;
    console.log(resultCalc);
    //console.log(cpfInput)
    if (resultCalc !== cpfInput) {
      return {
        valido: false,
        cpfMsg:
          "O CPF inserido não é válido! Verifique a digitação e tente novamente.",
      };
    } else {
      return {
        valido: true,
        cpfMsg: "CPF válido!",
      };
    }

  }
}

export default validarCPF;
