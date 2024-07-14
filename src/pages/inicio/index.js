import React, { useEffect, useState } from "react";
import Cabecera from "../../components/Cabecera/Cabecera";
import Pie from "../../components/Pie"; 
import Banner from "../../components/Banner"; 
import Titulo from "../../components/Titulo"; 
import Categorias from "../../components/Categorias"; 
import ModalEditar from "../../components/ModalEditar.js/ModalEditar"; 

function Inicio() {
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [showModal, setShowModal] = useState(false);

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

    const handleEdit = (video) => {
        setSelectedVideo(video);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedVideo(null);
    };

    const handleSave = (updatedVideo) => {
        fetch(`http://localhost:3000/videos/${updatedVideo.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedVideo),
        })
        .then(response => {
            if (response.ok) {
                setVideos(prevVideos => prevVideos.map(video => video.id === updatedVideo.id ? updatedVideo : video));
                handleCloseModal();
            } else {
                console.error('Error updating video');
            }
        })
        .catch(error => console.error('Error updating video:', error));
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
            {selectedVideo && (
                <ModalEditar
                    show={showModal}
                    onClose={handleCloseModal}
                    cardData={selectedVideo}
                    onSave={handleSave}
                />
            )}
        </>
    );
}

export default Inicio;
