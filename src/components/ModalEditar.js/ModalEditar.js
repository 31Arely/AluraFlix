import React, { useState, useEffect } from 'react';
import styles from './ModalEditar.module.css';

function ModalEditar({ show, onClose, cardData, onSave }) {
    const [titulo, setTitulo] = useState(cardData.titulo);
    const [categoria, setCategoria] = useState(cardData.categoria);
    const [imagen, setImagen] = useState(cardData.imagen);
    const [video, setVideo] = useState(cardData.video);
    const [descripcion, setDescripcion] = useState(cardData.descripcion);

    useEffect(() => {
        setTitulo(cardData.titulo);
        setCategoria(cardData.categoria);
        setImagen(cardData.imagen);
        setVideo(cardData.video);
        setDescripcion(cardData.descripcion);
    }, [cardData]);

    const handleSave = () => {
        const updatedVideo = {
            ...cardData,
            titulo,
            categoria,
            imagen,
            video,
            descripcion,
        };
        onSave(updatedVideo);
    };

    if (!show) {
        return null;
    }

    return (
        <div className={styles.modalBackdrop}>
            <div className={styles.modalContent}>
                <h2>EDITAR CARD:</h2>
                <button className={styles.closeButton} onClick={onClose}>×</button>
                <div className={styles.formGroup}>
                    <label htmlFor="titulo">Título</label>
                    <input
                        type="text"
                        id="titulo"
                        value={titulo}
                        onChange={(e) => setTitulo(e.target.value)}
                    />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="categoria">Categoría</label>
                    <select
                        id="categoria"
                        value={categoria}
                        onChange={(e) => setCategoria(e.target.value)}
                    >
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
                    />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="video">Video</label>
                    <input
                        type="text"
                        id="video"
                        value={video}
                        onChange={(e) => setVideo(e.target.value)}
                    />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="descripcion">Descripción</label>
                    <textarea
                        id="descripcion"
                        value={descripcion}
                        onChange={(e) => setDescripcion(e.target.value)}
                    ></textarea>
                </div>

                <div className={styles.buttons}>
                    <button onClick={handleSave}>Guardar</button>
                    <button onClick={onClose}>Cancelar</button>
                </div>
            </div>
        </div>
    );
}

export default ModalEditar;

