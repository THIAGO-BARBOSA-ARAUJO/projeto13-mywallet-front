import imgsair from "../../img/btnsair.svg"
import imgmais from "../../img/plus-circle-outlined.svg"
import imgmenos from "../../img/minus-circle-outlined.svg"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import axios from "axios"
import { useEffect, useState } from "react"

export default function TelaInicial(){

    const [registros, setRegistros] = useState([])
    const [orientacao, setOrientacao] = useState(true)
    const [ficaVerde, setFicaVerde] = useState(false)

    let navigate = useNavigate()

   async function renderizarRegistros(){
        const requisicao = await axios.get("http://localhost:5000/registros", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        })
        //console.log(requisicao.data)
        setRegistros(requisicao.data)
        if(requisicao.data.length >= 1){
            setOrientacao(true)
        }else{
            console.log("não tem registro lá")
        }
    }
    
    useEffect(() => {
		renderizarRegistros()
	}, [])

    

    return(
        <Styledtelainicial orientacao={orientacao}>
            <div className="header">
                <h1>olá, Fulano</h1>
                <img src={imgsair}/>
            </div>

            <div className="telaregistros">
               {registros.map((registro, key) => {
                const vv = registro.flag
                
                return(
                    (registros.length >= 1 ? <Registro vv={vv} key={key} data={registro.date} texto={registro.text} valor={registro.value} /> : "Não há registros de entrada ou saída")
                )
               })}
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


function Registro({data, texto, valor, vv }) {
    return (
      <StyledRegistro verde={vv}>
        <div className="container_dt">
            <li className="data">{data}</li>
            <li className="texto">{texto}</li>
        </div>
        <div className="container_valor">
            <li className="valor">{valor}</li>
        </div>
      </StyledRegistro>
    );
  }
  

const StyledRegistro = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 10px;

  .container_dt {
    display: flex;
    width: 100%;
    max-width: 220px;
  }

  .container_dt li {
    margin-right: 15px;

  }

  .container_dt .data {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 19px;
    color: #C6C6C6;
  }

  .container_dt .texto {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #000000;
  }

  .container_valor .valor {

    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: ${(props) => props.verde === true ? "green" : "red"};
  }
`;

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
        justify-content: ${(props) => props.orientacao === true ? "flex-start" : "center"}; // mudar dinâmicamente
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