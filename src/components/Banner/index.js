import styles from "./Banner.module.css"
import logo from "./banner.jpg"


function Banner({ color }) {
    return (
        <div
            className={styles.capa}
            style={{ backgroundImage: `url(${logo})` }}
        >
            <div className={styles.gradient} style={{ background: color }}></div>
        </div>
    );
}

export default Banner;