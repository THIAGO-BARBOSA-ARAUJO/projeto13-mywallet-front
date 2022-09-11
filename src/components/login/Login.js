import { useNavigate } from "react-router-dom"
import { useState } from "react"
import styled from "styled-components"
import axios from "axios"

export default function Login({ setNome }){
    
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    let navigate = useNavigate()

    async function fazerLogin(event) {
		event.preventDefault();
    
		try{
		  const requisicao = await axios.post("http://localhost:5000/login", {
            email: email,
            senha: senha
		})
      localStorage.setItem("token", requisicao.data.token)
      localStorage.setItem("nome", requisicao.data.usuario.nome)
      navigate("/telainicial")

		}catch(error) {
      alert("Email ou senha errados!")
      setEmail("")
      setSenha("")
	  }
	}

    return(
        <div className="login">
            <Styledlogin>
            <form onSubmit={fazerLogin}>
                
                <h1>MyWallet</h1>
                <input required type="email" id="campoemail" placeholder="email" value={email} onChange={e => setEmail(e.target.value)} /><br/>
                
                <input required type="password" id="camposenha" placeholder="senha" value={senha} onChange={e => setSenha(e.target.value)} /><br/>
                <button>Entrar</button>
                <p onClick={()=>{navigate("/cadastro")}}>Não tem uma conta? Cadastre-se!</p>
            </form>
        </Styledlogin>
            
        </div>

    )
}


const Styledlogin = styled.div`
  width: 100%;
  max-width: 375px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #8c11be;
  height: 100vh;

  form{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
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
    width: 100%;
    max-width: 350px;
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

  input[type=password]{
    width: 100%;
    max-width: 350px;
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
    max-width: 350px;
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
