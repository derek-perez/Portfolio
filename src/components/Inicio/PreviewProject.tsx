import { useEffect } from "react"

import { useShow } from "../../hooks/useShow";


export const PreviewProject = ({ which = 0 }: { which: number }) => {

    useShow({
        p: 'pInfoProyectos',
        button: 'infoProyectosButton',
        width: 830
    });


    const infos = [
        `<b>ChatCTS</b> is an instant messaging and video calling app, built using the MERN Stack (MongoDB, Express, React, and Node.js) and Socket.IO for
            real-time communication. The app offers advanced functionalities such as real-time chat, video and voice calls using WebRTC, ensuring a smooth and
            fast experience. It implements custom push notifications, allowing users to receive real-time alerts when they receive messages or calls, which
            improves the interactivity of the app.`,
        `<b>Pizzacode</b> is a fictional pizzeria website developed using the MERN Stack (MongoDB, Express, React, and Node.js). This project features a
            user-friendly shopping cart that allows customers to easily add and manage their orders. Additionally, it incorporates customizable themes based
            on user preferences, enhancing the overall user experience. Pizzacode marked a significant milestone in my development journey as it was my
            first major project utilizing React and Context after completing a UI/UX design course.`,
        `<b>Blogi</b>, is an interactive blog management platform developed using Node.js for the backend and a frontend built with HTML, CSS, and JavaScript.
            This project enables users to create their own blogs and publish articles that are accessible to others. I implemented a rich text editor,
            allowing users to format their content with bold, italic, and underline options, as well as align text and add images to enhance their articles.
            Additionally, Blogi features a forum for user interaction, which notifies users of new comments via push notifications, fostering community engagement.
            Notably, Blogi is my first Progressive Web App (PWA), providing improved accessibility and performance.`,
    ]

    useEffect(() => {
        const pInfoProyectos = document.querySelector('#pInfoProyectos');
        if (!pInfoProyectos) return;

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
                {
                    which === 0 && (
                        <>
                            <div>
                                <img src="https://res.cloudinary.com/chuguscloudinarypersonal/image/upload/v1727459768/Screenshot_2024-09-27_at_11-55-49_ChatCTS_-_Connect_Talk_Share_bo81ks.png" style={styles.image}></img>
                            </div>
                            <div style={{ marginLeft: '10px' }}>
                                <p><b>ChatCTS – Real-time messaging app with video calls</b></p>
                                <ul>
                                    <li style={styles.listItem}><b>Technologies</b>: React, Node.js, MongoDB, Express, Socket.IO, WebRTC.</li>
                                    <li style={styles.listItem}>I developed a real-time messaging platform with video calls, push notification handling, and an intuitive user interface.</li>
                                    <li style={styles.listItem}>Implemented WebRTC for video calls and WebSockets for real-time communication.</li>
                                    <li style={styles.listItem}>Managed the design and user experience using Figma.</li>
                                </ul>
                            </div>
                        </>
                    )
                }
                {
                    which === 1 && (
                        <>
                            <div>
                                <img src="https://res.cloudinary.com/chuguscloudinarypersonal/image/upload/v1658615284/Captura_de_pantalla_2022-07-23_171703_ahyvua.jpg" style={styles.image}></img>
                            </div>
                            <div style={{ marginLeft: '10px' }}>
                                <p><b>Pizzacode – Interactive website for a fictional pizzeria</b></p>
                                <ul>
                                    <li style={styles.listItem}><b>Technologies</b>: React, Node.js, MongoDB, Express</li>
                                    <li style={styles.listItem}>I developed a fully functional ecommerce platform with a shopping cart, allowing users to easily add and manage products.</li>
                                    <li style={styles.listItem}>I implemented a theme customization system, adapting the user interface according to the client's preferences.</li>
                                    <li style={styles.listItem}>It was my first major project using React and Context, applying UI/UX design principles learned in a specialized course.</li>
                                    <li style={styles.listItem}>Managed the design and user experience using Figma.</li>
                                </ul>
                            </div>
                        </>

                    )
                }
                {
                    which === 2 && (
                        <>
                            <div>
                                <img src="https://res.cloudinary.com/chuguscloudinarypersonal/image/upload/v1658607554/Captura_de_pantalla_2022-07-23_151543_sypwsx.jpg" style={styles.image}></img>
                            </div>
                            <div style={{ marginLeft: '10px' }}>
                                <p><b>Blogi – Interactive Blog Manager</b></p>
                                <ul>
                                    <li style={styles.listItem}><b>Technologies</b>: Node.js, HTML, CSS, JS</li>
                                    <li style={styles.listItem}>I implemented a rich text editor that allows formatting text (bold, italics, underline) and aligning content, as well as adding images to articles.</li>
                                    <li style={styles.listItem}>I included a forum for user interaction with push notifications to keep them informed about new comments, improving community participation.</li>
                                    <li style={styles.listItem}>Blogi is my first Progressive Web App (PWA), improving site accessibility and performance.</li>
                                </ul>
                            </div>
                        </>

                    )
                }

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
        width: '95%',
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '25px',
        padding: '10px'
    },

    image: {
        maxHeight: '250px',
        border: '3px solid #69BE28',
        borderRadius: '5px'
    },
    listItem: {
        marginBottom: '10px'
    }
}