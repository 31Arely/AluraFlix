import React, { useEffect, useState } from "react";
import Cabecera from "../../components/Cabecera/Cabecera";
import Pie from "../../components/Pie"; 
import Banner from "../../components/Banner"; 
import Titulo from "../../components/Titulo"; 
import Categorias from "../../components/Categorias"; 

function Inicio() {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/videos')
            .then(response => response.json())
            .then(data => setVideos(data))
            .catch(error => console.error('Error fetching videos:', error));
    }, []);

    const handleDelete = (id) => {
        fetch(`http://localhost:3000/videos/${id}`, {
            method: 'DELETE',
        })
        .then(response => {
            if (response.ok) {
                setVideos(prevVideos => prevVideos.filter(video => video.id !== id));
            } else {
                console.error('Error deleting video');
            }
        })
        .catch(error => console.error('Error deleting video:', error));
    };


    const handleEdit = (id) => {
        // Implementar lógica para editar el video
        console.log('Edit video with id:', id);
    };

    return (
        <>
            <Cabecera />
            <Banner color="#154580" />
            <Titulo>
                <h1>Un lugar para aprender sobre tecnología</h1>
            </Titulo>
            <Categorias videos={videos} onDelete={handleDelete} onEdit={handleEdit} />
            <Pie />
        </>
    );
}

export default Inicio;
