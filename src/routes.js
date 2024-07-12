/*import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./pages/inicio";

function AppRoutes (){
    return(
        <BrowserRouter>
        <Routes>
            <Route path= "/" element= {<Inicio/>}></Route>
        </Routes>

        </BrowserRouter>
    )
}

export default AppRoutes;*/

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./pages/inicio";
import FormularioVideo from "./components/Formulario/FormularioVideo";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/NuevoVideo" element={<FormularioVideo />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;
