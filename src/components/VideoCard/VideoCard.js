import "./VideoCard.module.css"

const VideoCard = ({ video, onDelete, onEdit }) => {
    const { title, category, image, description } = video;

    return (
        <div className="video-card">
            <img src={image} alt={title} className="video-image" />
            <div className="video-details">
                <h3>{title}</h3>
                <p>{category}</p>
                <p>{description}</p>
                <div className="video-actions">
                    <button onClick={onEdit}>Edit</button>
                    <button onClick={onDelete}>Delete</button>
                </div>
            </div>
        </div>
    );
};

export default VideoCard;
