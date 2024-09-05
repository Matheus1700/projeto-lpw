import { BrowserRouter, Routes, Route } from "react-router-dom";

import Pagina2  from "./pages/Pagina2";
import Menu  from "./pages/Menu";
import Inserir  from "./pages/Inserir";

import Listagem from "./pages/Listagem";
import Formulario from "./pages/Formulario"


export default function RoutesApp(){
    return(
    <BrowserRouter>
      <Routes>
          <Route  path="/" exact element={<Listagem />} />
          <Route  path="/menu" element={<Menu />} />
          <Route  path="/Inserir" element={<Inserir />} />
          <Route  path="/Formulario" element={<Formulario />} />
      </Routes>
    </BrowserRouter>
    );
}