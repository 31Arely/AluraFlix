import React, { useState, useEffect } from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Inicio from "./pages/inicio";
import FormularioVideo from "./components/Formulario/FormularioVideo";

function AppRoutes() {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/videos")
            .then((response) => response.json())
            .then((data) => setVideos(data))
            .catch((error) => console.error("Error al cargar videos:", error));
    }, []);

    const handleAddVideo = (nuevoVideo) => {
        setVideos((prevVideos) => [...prevVideos, nuevoVideo]);
    };

    
    const handleDeleteVideo = (id) => {};

    const handleEditVideo = (id) => {};

    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={<Inicio videos={videos} onDelete={handleDeleteVideo} onEdit={handleEditVideo} />}
                />
                <Route path="/NuevoVideo" element={<FormularioVideo onSubmit={handleAddVideo} />} />
            </Routes>
        </Router>
    );
}

export default AppRoutes;

