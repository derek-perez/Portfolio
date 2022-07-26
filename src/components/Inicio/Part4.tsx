import { useRef, useState } from "react";
import { useShow } from "../../hooks/useShow";
import { SomeCertificates } from "./SomeCertificates"


export const Part4 = () => {

    const clicked = useRef(false);
    const [which, setWhich] = useState(0);

    useShow({
        p: 'pInfoCertificados',
        button: 'infoCertificadosButton',
        width: 842
    })

    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const button = e.target as HTMLButtonElement;

        if (button.title === 'NodeJs') setWhich(0);
        if (button.title === 'ReactJs') setWhich(1);
        if (button.title === 'Diseñador') setWhich(2);
    }


    return (
        <div id='someCertificates' className="section" style={styles.container}>
            <h2 style={{ textAlign: 'center', width: '80%' }}>
                Ahora, te enseñare unos certificados que he obtenido por completar distintos cursos
                y algunos puntos relevantes sobre el curso por el cual he obtenido cierto certificado...
            </h2>

            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                <p id='pInfoCertificados' className="textHidden" style={{ width: '90%', lineHeight: 1.3, fontSize: '18px' }}>
                    Estos certificados, como podrás ver, son certificados de finalización. Los cursos los he tomado en Udemy y como Udemy no es una institución acreditada,
                    los certificados no tienen una validéz legal, pero sí sirven para demostrar que completé el curso que me ha dado las habilidades y capacidades competentes
                    necesarias para el desarrollo de sitios web, aplicaciones móviles.
                </p>
                <div id='infoCertificadosButton' style={styles.infoButton}>Ver más +</div>
            </div>

            <div style={styles.someCertificates}>
                <div style={styles.buttonsGroup}>
                    <button
                        title='NodeJs'
                        onClick={handleClick}
                        className="buttonProject"
                        style={{
                            ...(which === 0) ? styles.button : styles.inactiveButton,
                            transition: '0.5s'
                        }}
                    >
                        NodeJs
                    </button>
                    <button
                        title='ReactJs'
                        onClick={handleClick}
                        className="buttonProject"
                        style={{
                            ...(which === 1) ? styles.button : styles.inactiveButton,
                            transition: '0.5s'
                        }}
                    >
                        ReactJs
                    </button>
                    <button
                        title='Diseñador'
                        onClick={handleClick}
                        className="buttonProject"
                        style={{
                            ...(which === 2) ? styles.button : styles.inactiveButton,
                            transition: '0.5s'
                        }}
                    >
                        Diseñador
                    </button>
                </div>

                <SomeCertificates which={which} />
            </div>
        </div>
    )
}



const styles = {
    container: {
        width: '90%',
        display: 'flex',
        flexDirection: 'column' as 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '150px',
        paddingTop: '25px'
    },

    infoButton: {
        background: 'linear-gradient(#053666, #002244)',
        width: '90%',
        textAlign: 'center' as 'center',
        cursor: 'pointer',
        padding: '10px',
        borderTopLeftRadius: '5px',
        borderTopRightRadius: '5px',
        boxShadow: '0 -10px 10px rgba(0, 0, 0, 0.8)',
        display: 'none'
    },

    someCertificates: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column' as 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '15px'
    },
    buttonsGroup: {
        width: '85%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap' as 'wrap',
        marginBottom: '25px'
    },
    inactiveButton: {
        border: '1px solid #333',
        backgroundColor: '#A5ACAF',
        padding: '10px',
        borderRadius: '10px',
        height: '50px',
        width: '225px',
        color: '#555',
        fontSize: '22px',
        fontWeight: 'bold',
        opacity: 0.6,
        marginRight: '15px',
        cursor: 'pointer'
    },
    button: {
        border: '1px solid #333',
        backgroundColor: '#69BE28',
        padding: '10px',
        borderRadius: '10px',
        height: '50px',
        width: '225px',
        color: 'white',
        fontSize: '22px',
        fontWeight: 'bold',
        boxShadow: '5px 5px 5px #222',
        marginRight: '15px',
        cursor: 'pointer'
    }
}