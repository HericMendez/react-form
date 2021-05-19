import React, {useState} from "react";
import "./form.css";
import { TextField, Button, Switch, FormControlLabel } from "@material-ui/core";

function Formulario({aoEnviar, validarCPF, validarNome,}) {
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [email, setEmail] = useState("");
    const [cpf, setCPF] = useState("");
    const [dataNasc, setData] = useState("");
    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidades] = useState(true);
    const [erro, setErro] = useState(
      {
        nome:{valido:true, nomeMsg:""},
        cpf:{valido:true, cpfMsg:""},
        email:{valido:true, emailMsg:""}
      })
    const nomeValido = validarNome(nome)
    var cpfValido = validarCPF(cpf);

    return (
    <form onSubmit={(event) => {
        event.preventDefault();
        aoEnviar({nome, sobrenome, cpf, promocoes, novidades});
        console.log(`
        Nome: ${nome}\n
        Sobrenome: ${sobrenome}\n
        E-mail: ${email}\n
        CPF: ${cpf}\n
        Data de Nascimento: ${dataNasc}\n
        Promoções: ${promocoes}\n
        Novidades: ${novidades}
        validCPF: ${cpfValido.cpfMsg}
      `);
        }}>
      <TextField
      value={nome}
      onChange={(event) => {
        setNome(event.target.value);
        }
      }

      onBlur={(event)=>{
        
        const nomeValido = validarNome(nome)
        setErro({cpf:nomeValido})
        
        }}
        
        error={!nomeValido.valido}
        helperText={nomeValido.nomeMsg}
        

        id="nome"
        label="Nome"
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
        id="sobrenome"
        label="Sobrenome"
        variant="outlined"
        margin="normal"
        color="primary"
        fullWidth
      />
      <TextField
        value={email}
        onChange={(event) => {
            setEmail(event.target.value);
        }}
        id="email"
        label="E-mail"
        variant="outlined"
        margin="normal"
        color="primary"
        fullWidth
      />
      <TextField className="cpf"
      value={cpf}
      onChange={(event)=>{        
        let tempCPF = event.target.value;
        if(cpf.length >= 11) tempCPF = tempCPF.substr(0,11);
        setCPF(tempCPF);
      }}

      onFocusOut={()=>{
        setErro({cpf:cpfValido})
        
        }}

        error={!cpfValido.valido}
        helperText={cpfValido.cpfMsg}

        
        id="cpf"
        label="CPF"
        variant="outlined"
        margin="normal"
        color="primary"
        pattern="[0-9]*"
        autoComplete='off'
      />
        <TextField className = "data_nasc"
        value={dataNasc}
        onChange={(event) => {
            setData(event.target.value);
        }}
        type="date"
        id="dataNasc"
        label="Data de Nascimento"
        variant="outlined"
        margin="normal"
        color="primary"
        maxWidth="sd"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <br/>
      <div className='switches'>
   <FormControlLabel
        checked={promocoes}
        label="Promoções"
        control={<Switch onChange={(event)=>{
          setPromocoes(event.target.checked)
        }}
           name="promocoes" defaultChecked={promocoes} color="primary" />}
           fullWidth
      />
      <FormControlLabel
      checked={novidades}
        label="Novidades"
        control={<Switch onChange={(event)=>{
          setNovidades(event.target.checked)
        }}
           name="novidades" defaultChecked={novidades} color="primary" />}
           fullWidth
      />

      </div>
   

      <Button
        type="submit"
        variant="contained"
        color="primary"
        margin="normal"
        fullWidth
      >
        Cadastrar
      </Button>
    </form>
  );
}

export default Formulario;
