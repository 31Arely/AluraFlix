import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FormularioVideo.module.css";
import Cabecera from "../Cabecera/Cabecera";
import Pie from "../Pie";

function FormularioVideo({ onSubmit }) {
    const navigate = useNavigate();

    const [titulo, setTitulo] = useState("");
    const [categoria, setCategoria] = useState("");
    const [imagen, setImagen] = useState("");
    const [video, setVideo] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        const nuevoVideo = { titulo, categoria, imagen, video, descripcion };

        try {
            const response = await fetch("http://localhost:3000/videos", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(nuevoVideo),
            });

            if (!response.ok) {
                throw new Error("Error al crear el video");
            }

            const data = await response.json();
            if (onSubmit) {
                onSubmit({ ...nuevoVideo, id: data.id });
            }
            setTitulo("");
            setCategoria("");
            setImagen("");
            setVideo("");
            setDescripcion("");

            navigate("/"); // Redirige a la página principal después de guardar
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    const handleLimpiar = () => {
        setTitulo("");
        setCategoria("");
        setImagen("");
        setVideo("");
        setDescripcion("");
    };

    return (
        <div className="pagina-formulario" style={{ backgroundColor: '#000', minHeight: '100vh'}}>
            <Cabecera />
            <form className={styles.formulario} onSubmit={handleSubmit}>
                <h2>Nuevo Video</h2>
                {error && <p className={styles.error}>{error}</p>}
                <div className={styles.formGroup}>
                    <label htmlFor="titulo">Título</label>
                    <input
                        type="text"
                        id="titulo"
                        value={titulo}
                        onChange={(e) => setTitulo(e.target.value)}
                        placeholder="título del video"
                        required
                    />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="categoria">Categoría</label>
                    <select
                        id="categoria"
                        value={categoria}
                        onChange={(e) => setCategoria(e.target.value)}
                        required
                    >
                        <option value="">Escoja una categoría</option>
                        <option value="Frontend">Frontend</option>
                        <option value="Backend">Backend</option>
                        <option value="Innovación y Gestión">Innovación y Gestión</option>
                        <option value="DevOps">DevOps</option>
                    </select>
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="imagen">Imagen</label>
                    <input
                        type="text"
                        id="imagen"
                        value={imagen}
                        onChange={(e) => setImagen(e.target.value)}
                        placeholder="link de la imagen"
                        required
                    />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="video">Video</label>
                    <input
                        type="text"
                        id="video"
                        value={video}
                        onChange={(e) => setVideo(e.target.value)}
                        placeholder="link del video"
                        required
                    />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="descripcion">Descripción</label>
                    <textarea
                        id="descripcion"
                        value={descripcion}
                        onChange={(e) => setDescripcion(e.target.value)}
                        placeholder="¿de qué se trata este video?"
                        required
                    ></textarea>
                </div>

                <div className={styles.buttons}>
                    <button type="submit" disabled={loading}>{loading ? "Guardando..." : "Guardar"}</button>
                    <button type="button" onClick={handleLimpiar}>Limpiar</button>
                </div>
            </form>
            <Pie />
        </div>
    );
}

export default FormularioVideo;