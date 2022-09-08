import { useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"
import styled from "styled-components"


export default function Cadastro(){
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [nome, setNome] = useState("")
    const [confirmaSenha, setConfirmaSenha] = useState("")


    let navigate = useNavigate()


    async function fazerCadastro(event) {
      event.preventDefault();
      
      if(senha === confirmaSenha) {

        try{
          const requisicao = await axios.post("http://localhost:5000/cadastro", {
                email: email,
                nome: nome,
                senha: senha  
        });
        
        navigate("/")
        
        }catch {
          console.log("deu ruim na requisição")
          return
        }

      }else {
        console.log("As senhas não coencidem")
      } 
		
	}

    return(
        <Styledlogin >
            <form onSubmit={fazerCadastro}>
                <h1>MyWallet</h1>
                <input required type="email" id="campoEmail" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} /><br/>
                
                <input required type="text" id="camposenha" placeholder="senha" value={senha} onChange={e => setSenha(e.target.value)} /><br/>
                
                <input required type="text" id="campoNome" placeholder="nome" value={nome} onChange={e => setNome(e.target.value)} /><br/>
                
                <input required type="text" id="campoconfirmasenha" placeholder="confirme a senha" value={confirmaSenha} onChange={e => setConfirmaSenha(e.target.value)} /><br/>

                <button>Cadastra</button>
                <p onClick={()=>{navigate("/")}}>Já tem uma conta? Faça login!</p>
            </form>
            
        </Styledlogin>
    )
}

const Styledlogin = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #8c11be;
  height: 100vh;
  
  h1{
    text-align: center;
    font-family: 'Saira Stencil One';
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 50px;
    margin-bottom: 24px;
    color: #FFFFFF;
  }

  input[type=email]{
    width: 350px;
    height: 58px;
    background: #FFFFFF;
    border-radius: 5px;
    border: none;
    outline: none;
    margin-bottom: 13px;

    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 23px;
    color: #000000;
    padding-left: 15px;
  }

  input[type=text]{
    width: 100%;
    max-width: 375px;
    height: 58px;
    background: #FFFFFF;
    border-radius: 5px;
    border: none;
    outline: none;
    margin-bottom: 13px;

    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 23px;
    color: #000000;
    padding-left: 15px;
  }

 button{
    width: 100%;
    max-width: 375px;
    height: 46px;
    background: #A328D6;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    margin: 0 auto;
    
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 23px;
    color: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 36px;
  }

  p {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    color: #FFFFFF;
    text-align: center;
    cursor: pointer;
  }
`;