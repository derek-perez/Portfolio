import { Footer } from "../Footer";
import { useNavigate } from "react-router-dom";


export const Part5 = () => {

    const navigate = useNavigate();

    return (
        <div id='linkContact' className="section" style={styles.container}>
            <div style={styles.content}>
                <h2 style={{ textAlign: 'center', width: '80%' }}>
                    ¿Qué te ha parecido...? Vamos a ponernos en contacto para desarrollar tu proyecto
                </h2>

                <p style={styles.text}>
                    Esto ha sido una pequeña muestra de lo que soy y lo que hago, si quieres saber más acerca de mi,
                    puedes seguir navegando por el sitio. Ahora, para contactarme, solo rellena un pequeño formulario
                    y así poder negociar y llegar a un acuerdo para el desarrollo de ese proyecto que traes en mente...
                </p>

                <button
                    onClick={() => {
                        navigate('/contacto')
                    }}
                    style={styles.button}
                >
                    Rellenar formulario
                    <i className="fa fa-long-arrow-right"></i>
                </button>
            </div>

            <Footer />
        </div>
    )
}



const styles = {
    container: {
        marginTop: '150px',
        width: '95%',
        minHeight: '70vh',
        display: 'flex',
        flexDirection: 'column' as 'column',
        alignItems: 'center'
    },

    content: {
        display: 'flex',
        flexDirection: 'column' as 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },

    text: {
        width: '75%',
        textAlign: 'center' as 'center',
        lineHeight: '1.3',
        fontSize: '18px'
    },

    button: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#69BE28',
        width: '350px',
        maxWidth: '85%',
        color: 'white',
        padding: '10px 15px',
        border: '#69BE28',
        borderRadius: '5px',
        fontSize: '22px',
        fontWeight: 'bold',
        marginTop: '25px',
        textShadow: '1px 1px 2px #222',
        cursor: 'pointer'
    }
}