import { Navbar } from "../Navbars/Navbar"
import { NavbarResponsive } from "../Navbars/NavbarResponsive"


export const Part1 = () => {
    return (
        <div id="intro" className="section" style={styles.container}>
            <Navbar />
            <NavbarResponsive />

            <div style={styles.containerContent}>
                <h2 style={{ width: '80%', textAlign: 'center' }}>
                    A continuación, verás mis certificados que he obtenido en Udemy...
                </h2>

                <p style={{ width: '80%', lineHeight: '1.3' }}>
                    Estos son algunos de los certificados que tengo hasta el momento. Es cierto, Udemy no es una institución acreditada, estos certificados
                    de finalización no tienen una validéz legal o internacional. Sin embargo, estos certificados si demuestran que he adquirido las
                    habilidades y capacidades competentes necesarias.
                    <br />
                    <br />
                    Te iré presentando los certificados de forma cronológica. <b>¡Ah!</b> Y una cosa importante, ahí dice que completé el certificado en ciertas horas,
                    pero, la verdad es que pasé más tiempo, con las tareas, los desafíos de codificación, etc... Así que no fueron solo unos días el tiempo que
                    me llevó terminar cierto curso, en muchos casos, me tomó incluso <b>meses</b>.
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