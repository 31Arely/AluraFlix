import React from 'react';
import styles from './VideoCard.module.css';
import { FaTrash, FaEdit } from 'react-icons/fa';

function VideoCard({ video, onDelete, onEdit }) {
    return (
        <div className={styles.videoCardContainer}>
            <img 
                src={video.imagen} 
                alt={video.titulo} 
                //className={`${styles.videoThumbnail} imageStyle`}
                className={styles.videoThumbnail} 
            />
            <div className={styles.videoInfo}>
                <h3 className={styles.videoTitle}>{video.titulo}</h3>
            </div>
            <div className={styles.actionButtons}>
                <button 
                    className={`${styles.deleteButton}`} 
                    onClick={() => onDelete(video.id)}
                >
                    <FaTrash className={styles.actionIcon} /> Borrar
                </button>
                <button 
                    className={`${styles.editButton}`} 
                    onClick={() => onEdit(video)}
                >
                    <FaEdit className={styles.actionIcon} /> Editar
                </button>
            </div>
        </div>
    );
}

export default VideoCard;
