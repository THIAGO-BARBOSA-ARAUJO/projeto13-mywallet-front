import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

export default function NovaEntrada() {

    const [valor, setValor] = useState("")
    const [descricao, setDescricao] = useState("")

    let navigate = useNavigate()

    function enviarEntrada(event) {
		event.preventDefault();
    navigate("/telainicial")
	}

    return(
        
        <Styledlogin>
            <form onSubmit={enviarEntrada}>
                
                <h1>Nova entrada</h1>
                <input required type="text" id="campovalor" placeholder="valor" value={valor} onChange={e => setValor(e.target.value)} /><br/>
                
                <input required type="text" id="campodescrição" placeholder="descrição" value={descricao} onChange={e => setDescricao(e.target.value)} /><br/>
                <button>Salvar entrada</button>
            </form>
        </Styledlogin>
    )
}

const Styledlogin = styled.div`
    width: 100%;
    max-width: 375px;
    height: 100vh;
    margin: 0 auto;
    background-color: #8c11be;
    padding: 0 25px;
    padding-top: 25px;

    h1{
        margin-bottom: 40px;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 26px;
        line-height: 31px;
        color: #FFFFFF;
    }

    input{
        width: 100%;
        max-width: 326px;
        height: 58px;
        background: #FFFFFF;
        border-radius: 5px;
        margin-bottom: 13px;
        outline: none;
        border: none;
        padding-left:15px;


        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 23px;
        color: #000000;
    }

    button{
        width: 100%;
        max-width: 326px;
        height: 46px;
        background: #A328D6;
        border-radius: 5px;
        outline: none;
        border: none;
        cursor: pointer;

        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 23px;
        color: #FFFFFF;
    }
`;