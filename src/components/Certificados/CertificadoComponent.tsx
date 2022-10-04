import { useEffect, useState } from "react";

interface Props {
    id: string;
    whatIs: string;
    img: string;
    list: string;
}

export const CertificadoComponent = ({ id, whatIs, img, list }: Props) => {

    useEffect(() => {
        const listHTML = document.getElementById(`list${id}`);
        if (!listHTML) return;

        listHTML.innerHTML = list;
    }, [])

    if (id === undefined) return null;

    return (
        <div id={id} className="section" style={styles.container}>
            <h1 style={{ textAlign: 'center' }}>Curso sobre {whatIs}</h1>

            <div className="certificadoComponent" style={styles.content}>
                <img
                    src={img}
                    style={styles.img}
                />

                <div style={{
                    width: '50%'
                }}>
                    {
                        whatIs !== 'Python' && (
                            <>
                                <h2>En este curso sobre {whatIs}, aprendí a:</h2>
                                <ul id={`list${id}`} className='listCertificate' style={{ padding: 0, width: '90%' }}></ul>
                            </>
                        )
                    }
                    {
                        whatIs === 'Python' && (
                            <>
                                <h2>Tomé este curso de Python para reforzar conocimientos:</h2>
                                <ul>
                                    <li className='listItem'>definir funciones, listas/objetos de comprehensión</li>
                                    <li className='listItem'>POO (Programación Orientada a Objetos)</li>
                                    <li className='listItem'>etc...</li>
                                </ul>
                                <span style={styles.span}>
                                    En el curso se incluían temas como: videojuegos, desarrollo web con Flask y las bases para usar Pandas, Matplotlib y NumPy.
                                    Ahora bien, en el curso de Tensorflow, el instructor enseño muy bien y de forma más avanzada, a utilizar los paquetes antes mecionados.
                                    Y cómo lo que yo quería no era aprender a hacer videojuegos o aprender a utilizar de forma básica Flask, tuve que saltar varias secciones.
                                </span>
                            </>
                        )
                    }
                </div>
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
        marginTop: '150px',
        paddingTop: '50px'
    },

    content: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: '25px'
    },
    img: {
        width: '40%',
    },
    span: {
        lineHeight: '1.3',
        fontSize: '17px'
    }
}