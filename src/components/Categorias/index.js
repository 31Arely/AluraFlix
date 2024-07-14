import React from "react";
import styles from "./Categorias.module.css";
import VideoCard from "../VideoCard/VideoCard";

function Categorias({ videos, onDelete, onEdit }) {
    const categorias = [
        { nombre: "Frontend", color: "#007BFF" },
        { nombre: "Backend", color: "#28A745" },
        { nombre: "Innovación y Gestión", color: "#FFC107" },
        { nombre: "DevOps", color: "#DC3545" }
    ];

    return (
        <div className={styles.categoriasContainer}>
            {categorias.map((categoria) => (
                <div key={categoria.nombre}>
                    <button 
                        className={styles.categoriaBoton}
                        style={{ backgroundColor: categoria.color }}
                    >
                        {categoria.nombre}
                    </button>
                    <div className={styles.videoCards}>
                        {videos
                            .filter((video) => video.categoria === categoria.nombre)
                            .map((video) => (
                                <VideoCard 
                                    key={video.id} 
                                    video={video} 
                                    onDelete={onDelete} 
                                    onEdit={onEdit} 
                                />
                            ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Categorias;
