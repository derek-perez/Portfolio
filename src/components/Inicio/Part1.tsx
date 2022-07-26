import { Navbar } from "../Navbars/Navbar"
import { NavbarResponsive } from "../Navbars/NavbarResponsive"

export const Part1 = () => {

    return (
        <div id='intro' className="section" style={{ width: '100%' }}>
            <Navbar />
            <NavbarResponsive />

            <div id='textIntro' style={styles.contentPart1}>
                <img
                    src='https://res.cloudinary.com/chugus/image/upload/v1658094282/istockphoto-628332486-612x612_preview_rev_1_b2jawy_preview_rev_1_cf1igb.png'
                    style={styles.img}
                />

                <div style={{ marginLeft: '50px', width: '80%' }}>
                    <h2>
                        ¡Hola! Soy Derek Pérez, un Desarrollador de Software y estoy ansioso por poder ayudarte...
                    </h2>
                    <p style={{ lineHeight: '1.3' }}>
                        ¿Qué tal...? Soy un Diseñador/Desarrollador Web & Móvil listo y preparado para poder diseñar, codificar y lanzar tu proyecto.
                        Soy un Desarrollador Web Full Stack que utiliza la "MERN Stack" (o la pila MERN) para el desarrollo de los sitios web, y para
                        el desarrollo de las aplicaciones móviles, utilizo React Native CLI (actualmente solo aplicaciones para Android).
                    </p>
                </div>
            </div>
        </div>
    )
}


const styles = {
    contentPart1: {
        height: '60vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 50px'
    },
    img: {
        width: '500px'
    }
}