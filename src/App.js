import React, { Component } from "react";
import "./assets/app.css";
import "./assets/index.css";
import "./components/formulario/form.jsx";
import Formulario from "./components/formulario/form.jsx";
import {Container, Typography} from "@material-ui/core";
import 'fontsource-roboto';

import validarCPF from './validations/validarCPF/validarCPF';
import validarNome from './validations/validarNome/validarNome';
import validarSobrenome from './validations/validarSobrenome/validarSobrenome'
import validarEmail from './validations/validarEmail/validarEmail'
import valiData from './validations/valiData/valiData'
import validarSubmitBtn from './validations/validarSubmitBtn/validarSubmitBtn'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container className="main-form" component='article' maxWidth="sm">
          <Typography variant='h4'  component='h2'>Formulário de Cadastro</Typography>
            <Formulario 
            aoEnviar={aoEnviarForm}
            validarCPF={validarCPF}
            validarNome={validarNome}
            validarSobrenome={validarSobrenome}
            validarEmail={validarEmail}
            valiData={valiData}
            validarSubmitBtn={validarSubmitBtn}
            />
        </Container>
      </div>
    );
  }
}

function aoEnviarForm(dados){
  console.log(dados);
}



export default App;
