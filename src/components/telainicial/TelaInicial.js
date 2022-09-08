import imgsair from "../../img/btnsair.svg"
import imgmais from "../../img/plus-circle-outlined.svg"
import imgmenos from "../../img/minus-circle-outlined.svg"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"

export default function TelaInicial(){

    let navigate = useNavigate()

    return(
        <Styledtelainicial>
            <div className="header">
                <h1>olá, Fulano</h1>
                <img src={imgsair}/>
            </div>

            <div className="telaregistros">
                <p>Não há registros de entrada ou saída</p>
            </div>
            <div className="saida_entrada">
                <div onClick={()=>{navigate("/telanovaentrada")}} className="caixanovoregistro">
                    <img src={imgmais} />
                    <p>Nova entrada </p>
                </div>

                <div onClick={()=>{navigate("/telanovasaida")}} className="caixanovoregistro">
                    <img src={imgmenos} />
                    <p>Nova saída </p>
                </div>
            </div>
        </Styledtelainicial>

    )
}

const Styledtelainicial = styled.div`
    background: #8c11be;
    width: 100%;
    max-width: 375px;
    height: 100vh;
    padding: 0 24px;
    padding-top: 25px;
    margin: 0 auto;

    .header{
        display: flex;
        justify-content: space-between;
        margin-bottom: 22px;
    }
    .header img {
        cursor: pointer;
    }

    .header h1 {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 31px;
    color: #FFFFFF;
    }

    .telaregistros{
        width: 100%;
        max-width: 326px;
        height: 70%;
        background: #FFFFFF;
        border-radius: 5px;
        background-color: #FFFFFF;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        
    }

    .telaregistros p {
        width: 100%;
        max-width: 180px;

        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        text-align: center;

        color: #868686;
    }

    .saida_entrada{
        display: flex;
        justify-content: space-between;

    }

    .caixanovoregistro{
        width: 100%;
        max-width: 155px;
        height: 16vh;

        background: #A328D6;
        border-radius: 5px;
        margin-top: 13px;
        cursor: pointer;
        padding: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .caixanovoregistro img {
        width: 22px;
        height: 22px;
    }

    .caixanovoregistro p {
    width: 100%;
    max-width: 64px;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 20px;
    color: #FFFFFF;
    }
`;