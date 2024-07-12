import styles from "./Pie.module.css"
import logo from "./logo-alura.png"

function Pie(){
return(
    <footer className={styles.pie}>
        <h2>
            Desarrollado por Arely Sánchez<img src={logo} alt="Alura"/>
        </h2>

    </footer>
    );
}
export default Pie