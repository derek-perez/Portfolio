import { useEffect, useRef } from "react"
import { useNavigate } from "react-router-dom";

import { useShow } from "../../hooks/useShow";


export const PreviewProject = ({ which = 0 }: { which: number }) => {

    const clicked = useRef(false);
    const navigate = useNavigate();

    useShow({
        p: 'pInfoProyectos',
        button: 'infoProyectosButton',
        width: 830
    });


    const infos = [
        `<b>Blogi</b>, fue uno de mis primeros proyectos relevantes que hice utilizando como Backend: NodeJs. <b>Blogi</b> utiliza una <b>RESTful API</b> 
            que yo mismo desarrollé y en ese momento, aún no implementaba en mis proyectos "React", 
            así que para el Frontend solo utilizo: <b>HTML</b>, <b>CSS</b> y <b>JavaScript</b>. <b>Blogi</b> es un administrador de blogs donde puedes alojar 
            tus blogs personales y también ver los de otros usuarios, tiene un foro y también es una <b>PWA</b> con <b>Notificaciones PUSH</b>, entre otras cosas...`,
        `<b>Pizzacode</b>, fue uno de mis primeros proyectos usando la pila "MERN" (MongoDB, Express, ReactJs, NodeJs). <b>Pizzacode</b> también utiliza
            una <b>RESTful API</b> que yo desarrollé. En este proyecto, desarrollé <b>tres</b> hooks para la aplicación, y en este caso, usé el
            <b>Context API</b> en vez de <b>Redux</b> ya que no es un proyecto muy grande. Como iba a hacer la aplicación móvil, decidí no hacer a
            Pizzacode una PWA.`,
        `También desarrollé la aplicación móvil para <b>Pizzacode</b> desde cero (actualmente solo para Android). Esta está desarrollada utilizando
            el <b>CLI</b> de <b>React Native</b> (no uso Expo). Utilizé el mismo Backend, los mismos hooks y algunos <b>Contexts</b> que utilizé para
            el sitio web. La ventaja de utilizar React para desarrollar aplicaciones web y móviles, es que practicamente, puedes utilizar casi todo el mismo
            código para las dos versiones, así que te ahorras mucho tiempo, recursos y código para desarrollar ambas aplicaciones.`
    ]

    useEffect(() => {
        const pInfoProyectos = document.querySelector('#pInfoProyectos');
        if (!pInfoProyectos) return;

        if (which === 0) document.getElementById('miniProjects')!.style.justifyContent = 'flex-start';
        if (which === 1) document.getElementById('miniProjects')!.style.justifyContent = 'center';
        if (which === 2) document.getElementById('miniProjects')!.style.justifyContent = 'flex-end';

        pInfoProyectos.innerHTML = infos[which];
    }, [which]);


    return (
        <div id='previewProjectsContainer' style={styles.container}>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                <p id='pInfoProyectos' className="textHidden" style={styles.info}></p>
                <div id='infoProyectosButton' style={styles.infoButton}>Ver más +</div>
            </div>

            <div
                id='miniProjects'
                style={styles.miniProjects}
            >
                <div
                    id="previewBlogi"
                    style={{
                        ...(which === 0) ? styles.miniProject : styles.inactiveMiniProject,
                        transition: '0.5s'
                    }}
                >
                    <h3 style={styles.titleProject}>Blogi</h3>
                    <p style={styles.contentProject}>
                        Blogi se basa en una arquitectura de sistemas web RESTful, es una PWA con un
                        sistema de Notificaciones PUSH, también cuenta con un foro...
                    </p>
                    <div
                        className='seeProjectBTN'
                        style={styles.buttonProject}
                        onClick={() => {
                            navigate('/proyectos/#Blogi')
                        }}
                    >
                        <span>Ver proyecto</span>
                        <i style={{ fontSize: '30px' }} className="fa fa-long-arrow-right"></i>
                    </div>
                </div>
                <div
                    id='previewPizzacodeWeb'
                    style={{
                        ...(which === 1) ? styles.miniProject : styles.inactiveMiniProject,
                        transition: '0.5s'
                    }}
                >
                    <h3 style={styles.titleProject}>Pizzacode Web</h3>
                    <p style={styles.contentProject}>
                        Pizzacode es un sitio web desarrollado con ReactJs.
                        Esta basado en una arquitectura de sistemas web RESTful API.
                        Este es un sitio e-commerce...
                    </p>
                    <div
                        style={styles.inactiveButtonProject}
                        onClick={() => {
                            navigate('/proyectos/#Pizzacode_Web')
                        }}
                    >
                        <span>Ver proyecto</span>
                        <i style={{ fontSize: '30px' }} className="fa fa-long-arrow-right"></i>
                    </div>
                </div>
                <div
                    id='previewPizzacodeMovil'
                    style={{
                        ...(which === 2) ? styles.miniProject : styles.inactiveMiniProject,
                        transition: '0.5s',
                        marginRight: 0
                    }}
                >
                    <h3 style={styles.titleProject}>Pizzacode Móvil</h3>
                    <p style={styles.contentProject}>
                        La aplicación de Pizzacode también está disponible para dispositivos Android (actualmente no pudeo para iOS).
                        Está desarrollada con React Native CLI y usa el mismo Backend que el sitio web...
                    </p>
                    <div
                        style={styles.inactiveButtonProject}
                        onClick={() => {
                            navigate('/proyectos/#Pizzacode_Movil')
                        }}
                    >
                        <span>Ver proyecto</span>
                        <i style={{ fontSize: '30px' }} className="fa fa-long-arrow-right"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}



const styles = {
    container: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column' as 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },

    info: {
        width: '90%',
        lineHeight: 1.4
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

    miniProjects: {
        width: '90%',
        display: 'flex',
        alignItems: 'center',
        marginTop: '25px',
        overflow: 'auto',
        padding: '10px'
    },
    miniProject: {
        display: 'flex',
        flexDirection: 'column' as 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#A5ACAF',
        height: '275px',
        minWidth: '300px',
        maxWidth: '300px',
        padding: '0 15px 25px 15px',
        borderRadius: '5px',
        color: 'black',
        boxShadow: '4px 4px 8px #222',
        marginRight: '25px'
    },
    inactiveMiniProject: {
        display: 'flex',
        flexDirection: 'column' as 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#A5ACAF',
        height: '250px',
        minWidth: '300px',
        maxWidth: '300px',
        padding: '0 15px 25px 15px',
        borderRadius: '5px',
        color: '#555',
        opacity: 0.5,
        marginRight: '25px'
    },

    titleProject: {
        fontSize: '23px',
        marginBottom: 0,
        alignSelf: 'flex-start'
    },
    contentProject: {
        fontSize: '20px'
    },
    inactiveButtonProject: {
        width: '80%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        fontSize: '20px',
        color: '#002244ba',
        fontWeight: 'bold',
        cursor: 'pointer'
    },
    buttonProject: {
        width: '80%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        fontSize: '20px',
        color: '#002244',
        fontWeight: 'bold',
        cursor: 'pointer'
    }
}