import { Navbar } from "../Navbars/Navbar"
import { NavbarResponsive } from "../Navbars/NavbarResponsive"


export const Part1 = () => {
    return (
        <div id="intro" className="section" style={styles.container}>
            <Navbar />
            <NavbarResponsive />

            <div style={styles.containerContent}>
                <h2 style={{ width: '80%', textAlign: 'center' }}>
                    A continuación, verás algunos de mis proyectos más relevantes...
                </h2>

                <p style={{ width: '80%', lineHeight: '1.3' }}>
                    Estos son algunos de mis proyectos más relevantes en cuanto al <b>Desarrollo Web y Móvil</b>, porque he hecho más, pero,
                    o usaban como Backend <b>PHP </b> (y estos no los presento porque ya no uso PHP, he migrado a NodeJs) o eran parte de algún curso
                    y eran para practicar y aprender. Por eso es que he decidido no mostrarlos.
                    <br />
                    <br />
                    Y algo importante que destacar, es que estos proyectos, los he hecho yo solo
                    desde absolutamente <b>cero</b>. Todos los proyectos tienen como backend <b>NodeJs</b>. 
                    Y en cuanto a <b>Diseño UI/UX</b> si son todos los que hecho, y aquí te los muestro.
                    <br />
                    <br />
                    Te iré presentando los proyectos de forma cronológica en sus categorías correspondientes...
                </p>
            </div>
        </div>
    )
}



const styles = {
    container: {
        width: '100%',
        minHeight: '70vh',
        display: 'flex',
        flexDirection: 'column' as 'column',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    containerContent: {
        width: '90%',
        display: 'flex',
        flexDirection: 'column' as 'column',
        alignItems: 'center'
    }
}