import React, { useState } from "react";
import "./form.css";
import { TextField, Button, Switch, FormControlLabel } from "@material-ui/core";

function Formulario({ aoEnviar, validarCPF, validarNome, validarSobrenome, validarEmail, valiData, validarSubmitBtn }) {
  //dados do form:
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCPF] = useState("");
  const [dataNasc, setData] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);

  //validação de erros:
  const [erroCpf, setErroCpf] = useState({ valido: true, msg: "" });
  const [erroNome, setErroNome] = useState({ valido: true, msg: "" });
  const [erroSobrenome, setErroSobrenome] = useState({ valido: true, msg: "" });
  const [erroEmail, setErroEmail] = useState({ valido: true, msg: "" });
  const [erroData, setErroData] = useState({valido: true, msg: ""});

 // const [submit, setSubmit] = useState(true);
/*
  
  const validFormSubmit = validarSubmitBtn(erroNome, erroEmail, erroCpf, erroData);
  setSumbitBtn(validFormSubmit)
*/
  
  const submitBtn = validarSubmitBtn(erroNome, erroEmail, erroCpf, erroData);
  
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        aoEnviar({ nome, cpf,  promocoes, novidades });
        console.log(`
        Nome: ${nome}   
        E-mail: ${email}
        CPF: ${cpf}
        Data de Nascimento: ${dataNasc}
        Promoções: ${promocoes}
        Novidades: ${novidades}
        Submit Lock: ${submitBtn}
       
      `);
      }}
    >
      <TextField
        value={nome}
        onChange={(event) => {
          setNome(event.target.value);
        }}
        onBlur={(event) => {
          const nomeValido = validarNome(nome);
          setErroNome(nomeValido);
        }}
        error={!erroNome.valido}
        helperText={erroNome.msg}
        id="Nome"
        label="Nome Completo"
        variant="outlined"
        color="primary"
        margin="normal"
        fullWidth
      />

<TextField
        value={sobrenome}
        onChange={(event) => {
          setSobrenome(event.target.value);
        }}
        onBlur={(event) => {
          const sobrenomeValido = validarSobrenome(sobrenome);
          setErroSobrenome(sobrenomeValido);
        }}
        error={!erroSobrenome.valido}
        helperText={erroSobrenome.msg}
        id="sobrenome"
        label="Sobrenome"
        variant="outlined"
        color="primary"
        margin="normal"
        fullWidth
      />
     
      <TextField
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
        onBlur={(event) => {
          const emailValido = validarEmail(email);
          setErroEmail(emailValido);
        }}

        error={!erroEmail.valido}
        helperText={erroEmail.msg}
        id="email"
        label="E-mail"
        variant="outlined"
        margin="normal"
        color="primary"
        fullWidth
      />
      <TextField
        className="cpf"
        value={cpf}
        onChange={(event) => {
          let tempCPF = event.target.value;
          if (cpf.length >= 11) tempCPF = tempCPF.substr(0, 11);
          setCPF(tempCPF);
        }}
        onBlur={(event) => {
          var cpfValido = validarCPF(cpf);
          setErroCpf(cpfValido);
        }}
        error={!erroCpf.valido}
        helperText={erroCpf.msg}
        id="cpf"
        label="CPF"
        variant="outlined"
        margin="normal"
        color="primary"
        pattern="[0-9]*"
        autoComplete="off"
      />
      <TextField
        className="data_nasc"
        value={dataNasc}
        onChange={(event) => {
          setData(event.target.value);
        }}

        onBlur={(event) => {
          const dataValida = valiData(dataNasc);
          setErroData(dataValida);
        }}
        
        error={!erroData.valido}
        helperText={erroData.msg}

        type="date"
        id="data_nasc"
        label="Data de Nascimento"
        variant="outlined"
        margin="normal"
        color="primary"
        maxWidth="sd"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <br />
      <div className="switches">
        <FormControlLabel
          checked={promocoes}
          label="Promoções"
          control={
            <Switch
              onChange={(event) => {
                setPromocoes(event.target.checked);
              }}
              name="promocoes"
              defaultChecked={promocoes}
              color="primary"
            />
          }
          fullWidth
        />
        <FormControlLabel
          checked={novidades}
          label="Novidades"
          control={
            <Switch
              onChange={(event) => {
                setNovidades(event.target.checked);
              }}
              name="novidades"
              defaultChecked={novidades}
              color="primary"
            />
          }
          fullWidth
        />
      </div>

      <Button
        type="submit"
        variant="contained"
        color="primary"
        margin="normal"
        fullWidth
        disabled={submitBtn}
      >
        Cadastrar
      </Button>
    </form>
  );
}

export default Formulario;
