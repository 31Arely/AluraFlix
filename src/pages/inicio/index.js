import React from "react";
import { Route, Routes } from "react-router-dom";
import Cabecera from "../../components/Cabecera/Cabecera";
import Pie from "../../components/Pie";
import Banner from "../../components/Banner";
import Titulo from "../../components/Titulo";
import Categorias from "../../components/Categorias";
import FormularioVideo from "../../components/Formulario/FormularioVideo"; // Importar el componente del formulario

function Inicio() {
    return (
        <>
            <Cabecera />
            <Banner color="#154580" />
            <Titulo>
                <h1>Un lugar para aprender sobre tecnología</h1>
            </Titulo>
            <Categorias />
            <Pie />
        </>
    );
}

function App() {
    return (
        <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/NuevoVideo" element={<FormularioVideo />} />
        </Routes>
    );
}

export default App;
