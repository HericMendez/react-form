function validarSubmitBtn(nome, email, cpf, data){
    if(
        nome.valido == true && 
        email.valido == true &&
        cpf.valido == true &&
        data.valido == true

    ){
        return false;
    }else{
        return true;
    }
}

export default validarSubmitBtn;