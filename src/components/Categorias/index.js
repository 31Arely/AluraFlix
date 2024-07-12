import styles from "./Categorias.module.css";

function Categorias() {
    return (
        <div className={styles.categoriasContainer}>
            <div className={styles.categoria}>
                <h3>Frontend</h3>
            </div>
            <div className={styles.categoria}>
                <h3>Backend</h3>
            </div>
            <div className={styles.categoria}>
                <h3>Innovación y Gestión</h3>
            </div>
            <div className={styles.categoria}>
                <h3>DevOps</h3>
            </div>
        </div>
    );
}

export default Categorias;
