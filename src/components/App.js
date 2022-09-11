import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./login/Login"
import Cadastro from "./cadastro/Cadastro"
import TelaInicial from "./telainicial/TelaInicial";
import NovaEntrada from "./novaentrada/Novaentrada";
import NovaSaida from "./novasaida/Navasaida";



export default function App(){ 

    return(
        <BrowserRouter>
            <Routes>
            <Route path={`/`} element={<Login />}/>
            <Route path={`/cadastro`} element={<Cadastro />}/>
            <Route path={`/telainicial`} element={<TelaInicial />}/>
            <Route path={`/telanovaentrada`} element={<NovaEntrada />}/>
            <Route path={`/telanovasaida`} element={<NovaSaida />}/>
            </Routes>
        </BrowserRouter>
    )
}