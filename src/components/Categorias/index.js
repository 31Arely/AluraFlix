import React from "react";
import styles from "./Categorias.module.css";
import VideoCard from "../VideoCard/VideoCard";

function Categorias({ videos }) {
    const categorias = ["Frontend", "Backend", "Innovación y Gestión", "DevOps"];

    return (
        <div className={styles.categoriasContainer}>
            {categorias.map((categoria) => (
                <div key={categoria} className={styles.categoria}>
                    <h3>{categoria}</h3>
                    {videos
                        .filter((video) => video.categoria === categoria)
                        .map((video) => (
                            <VideoCard 
                                key={video.id} 
                                video={video} 
                                onDelete={() => {}} 
                                onEdit={() => {}} 
                            />
                        ))}
                </div>
            ))}
        </div>
    );
}


export default Categorias;

