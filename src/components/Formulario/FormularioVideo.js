import React, { useState } from "react";
import styles from "./FormularioVideo.module.css";
import Cabecera from "../Cabecera/Cabecera";
import Pie from "../Pie";

function FormularioVideo() {
    const [titulo, setTitulo] = useState("");
    const [categoria, setCategoria] = useState("");
    const [imagen, setImagen] = useState("");
    const [video, setVideo] = useState("");
    const [descripcion, setDescripcion] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Datos del formulario:", { titulo, categoria, imagen, video, descripcion });
        setTitulo("");
        setCategoria("");
        setImagen("");
        setVideo("");
        setDescripcion("");
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
                        <option value="" disabled>escoja una categoría</option>
                        <option value="Frontend">Frontend</option>
                        <option value="Backend">Backend</option>
                        <option value="Inovacion y Gestion">Inovacion y Gestion</option>
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
                    <button type="submit">Guardar</button>
                    <button type="button" onClick={handleLimpiar}>Limpiar</button>
                </div>
            </form>
            <Pie />
        </div>
    );
}

export default FormularioVideo;
