/*import { Link } from "react-router-dom"
import styles from "./Cabecera.module.css" 
import logo from "./logo-alura.png"
import CabeceraLink from "../CabeceraLink/CabeceraLink"

function Cabecera(){
    return(
        <header className={styles.cabecera}>
            <Link to= "/">
                <section className={styles.logoContainer}>
                    <img src={logo} alt="Logo Alura"/> <span>Videos</span>
                </section>
            </Link>
            <nav>
                <CabeceraLink url="./">Home</CabeceraLink>
                <CabeceraLink url="./NuevoVideo">Nuevo Video</CabeceraLink>
            </nav>
        </header>
    )
}

export default Cabecera*/

import { Link } from "react-router-dom";
import styles from "./Cabecera.module.css";
import logo from "./logo-alura.png";
import CabeceraLink from "../CabeceraLink/CabeceraLink";

function Cabecera() {
    return (
        <header className={styles.cabecera}>
            <Link to="/">
                <section className={styles.logoContainer}>
                    <img src={logo} alt="Logo Alura" /> <span>Videos</span>
                </section>
            </Link>
            <nav>
                <CabeceraLink url="/">Home</CabeceraLink>
                <CabeceraLink url="/NuevoVideo">Nuevo Video</CabeceraLink>
            </nav>
        </header>
    );
}

export default Cabecera;

