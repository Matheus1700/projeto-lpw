import { BrowserRouter, Routes, Route } from "react-router-dom";
import Formulario from "../pages/Formulario"
import ListagemBootStrap from "../pages/ListagemBootStrap";


export default function RoutesApp(){
    return(
    <BrowserRouter>
      <Routes>
          <Route  path="/" exact element={<ListagemBootStrap />} />  
          <Route  path="/Formulario" element={<Formulario />} />
      </Routes>
    </BrowserRouter>
    );
}