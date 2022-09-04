import { useEffect, useRef } from "react"
import { useNavigate } from "react-router-dom";

import { useShow } from "../../../hooks/useShow";


export const PreviewProject = ({ which = 0 }: { which: number }) => {

    const clicked = useRef(false);
    const navigate = useNavigate();

    useShow({
        p: 'pInfoProyectos',
        button: 'infoProyectosButton',
        width: 830
    });


    const infos = [
        `<b>Blogi</b>, was one of my first relevant projects that I did using as Backend: NodeJs. <b>Blogi</b> uses a <b>RESTful API</b>
            which I developed myself and at that time, I still didn't implement in my "React" projects, so for the Frontend I only use:<b>HTML</b>,
            <b>CSS</b> and <b>JavaScript</b>. <b>Blogi</b> is a blog manager where you can host your personal blogs and also see those of other users,
            it has a forum and it is also a <b>PWA</b> with <b>PUSH Notifications</b>, among other things...`,
        `<b>Pizzacode</b>, was one of my first projects using the "MERN" stack (MongoDB, Express, ReactJs, NodeJs). <b>Pizzacode</b> also uses
            a <b>RESTful API</b> that I developed. In this project, I developed <b>three</b> hooks for the application, and in this case, I used the
            <b>Context API</b> instead of <b>Redux</b> since it's not a very big project. Since I was going to make the mobile app, I decided not to make a
            Pizzacode a PWA.`,
        `I also developed the mobile app for <b>Pizzacode</b> from scratch (currently only for Android). This is developed using
            the <b>CLI</b> of <b>React Native</b> (I don't use Expo). I used the same Backend, the same hooks and some <b>Contexts</b> that I used for
            the website. The advantage of using React to develop web and mobile applications is that practically, you can use almost everything the same
            code for both versions, so you save a lot of time, resources and code to develop both applications.`
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
                <div id='infoProyectosButton' style={styles.infoButton}>See more +</div>
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
                        Blogi is based on a RESTful web systems architecture, it is a PWA with a
                        PUSH Notifications system, also has a forum...
                    </p>
                    <div
                        className='seeProjectBTN'
                        style={styles.buttonProject}
                        onClick={() => {
                            navigate('projects/#Blogi')
                        }}
                    >
                        <span>See project</span>
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
                        Pizzacode is a website developed with ReactJs.
                        It is based on a RESTful API web systems architecture.
                        This is an e-commerce site...
                    </p>
                    <div
                        style={styles.inactiveButtonProject}
                        onClick={() => {
                            navigate('projects/#Pizzacode_Web')
                        }}
                    >
                        <span>See project</span>
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
                    <h3 style={styles.titleProject}>Pizzacode Mobile</h3>
                    <p style={styles.contentProject}>
                        The Pizzacode app is also available for Android devices (not currently available for iOS).
                        It is developed with React Native CLI and uses the same Backend as the website...
                    </p>
                    <div
                        style={styles.inactiveButtonProject}
                        onClick={() => {
                            navigate('projects/#Pizzacode_Mobile')
                        }}
                    >
                        <span>See project</span>
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