

export const NavbarColumn = ({ whatScreen }: { whatScreen: string }) => {

    let hash = window.location.hash;

    if (hash === '') {
        hash = "#intro"
    }
    

    if (whatScreen === 'InicioScreen') {
        return (
            <div id='navbarColumn' style={styles.container}>
                <div style={styles.content}>
                    <a
                        href='#intro'
                        title='Introducción'
                        className={`columnNavLinks ${hash === '#intro' ? 'activeNavColumn' : 'inactiveNavColumn'} `}
                    ></a>
                    <a
                        href='#skills'
                        title='Habilidades y Capacidades'
                        className={`columnNavLinks ${hash === '#skills' ? 'activeNavColumn' : 'inactiveNavColumn'} `}
                    ></a>
                    <a
                        href='#someProjects'
                        title='Algunos projectos'
                        className={`columnNavLinks ${hash === '#someProjects' ? 'activeNavColumn' : 'inactiveNavColumn'} `}
                    ></a>
                    <a
                        href='#someCertificates'
                        title='Algunos certificados'
                        className={`columnNavLinks ${hash === '#someCertificates' ? 'activeNavColumn' : 'inactiveNavColumn'} `}
                    ></a>
                    <a
                        href='#linkContact'
                        title='¡Vamos, platiquemos!'
                        className={`columnNavLinks ${hash === '#linkContact' ? 'activeNavColumn' : 'inactiveNavColumn'} `}
                    ></a>
                </div>
            </div>
        )
    } else if (whatScreen === 'ProyectosScreens') {
        return (
            <div id='navbarColumn' style={styles.container}>
                <div style={styles.content}>
                    <a
                        href='#intro'
                        title='Introducción'
                        className={`columnNavLinks ${hash === '#intro' ? 'activeNavColumn' : 'inactiveNavColumn'}`}
                    ></a>
                    <a
                        href='#Blogi'
                        title='Blogi'
                        className={`columnNavLinks ${hash === '#Blogi' ? 'activeNavColumn' : 'inactiveNavColumn'}`}
                    ></a>
                    <a
                        href='#Pizzacode_Web'
                        title='Pizzacode Web'
                        className={`columnNavLinks ${hash === '#Pizzacode_Web' ? 'activeNavColumn' : 'inactiveNavColumn'}`}
                    ></a>
                    <a
                        href='#NasaDex'
                        title='NasaDex'
                        className={`columnNavLinks ${hash === '#NasaDex' ? 'activeNavColumn' : 'inactiveNavColumn'}`}
                    ></a>
                    <a
                        href='#Pizzacode_Movil'
                        title='Pizzacode Móvil'
                        className={`columnNavLinks ${hash === '#Pizzacode_Movil' ? 'activeNavColumn' : 'inactiveNavColumn'}`}
                    ></a>
                    <a
                        href='#Habitual'
                        title='Habitual'
                        className={`columnNavLinks ${hash === '#Habitual' ? 'activeNavColumn' : 'inactiveNavColumn'}`}
                    ></a>
                    <a
                        href='#Portafolio'
                        title='Portafolio'
                        className={`columnNavLinks ${hash === '#Portafolio' ? 'activeNavColumn' : 'inactiveNavColumn'}`}
                    ></a>
                </div>
            </div>
        )
    } else if (whatScreen === 'CertificadosScreen') {
        return (
            <div id='navbarColumn' style={styles.container}>
                <div style={styles.content}>
                    <a
                        style={{ height: '30px' }}
                        href='#intro'
                        title='Introducción'
                        className={`columnNavLinks ${hash === '#intro' ? 'activeNavColumn' : 'inactiveNavColumn'}`}
                    ></a>
                    <a
                        style={{ height: '30px' }}
                        href='#Desarrollo_Web'
                        title='Desarrollo Web'
                        className={`columnNavLinks ${hash === '#Desarrollo_Web' ? 'activeNavColumn' : 'inactiveNavColumn'}`}
                    ></a>
                    <a
                        style={{ height: '30px' }}
                        href='#Chatbots'
                        title='Chatbots'
                        className={`columnNavLinks ${hash === '#Chatbots' ? 'activeNavColumn' : 'inactiveNavColumn'}`}
                    ></a>
                    <a
                        style={{ height: '30px' }}
                        href='#JavaScript'
                        title='JavaScript'
                        className={`columnNavLinks ${hash === '#JavaScript' ? 'activeNavColumn' : 'inactiveNavColumn'}`}
                    ></a>
                    <a
                        style={{ height: '30px' }}
                        href='#PWAs'
                        title='PWAs'
                        className={`columnNavLinks ${hash === '#PWAs' ? 'activeNavColumn' : 'inactiveNavColumn'}`}
                    ></a>
                    <a
                        style={{ height: '30px' }}
                        href='#NodeJs'
                        title='NodeJs'
                        className={`columnNavLinks ${hash === '#NodeJs' ? 'activeNavColumn' : 'inactiveNavColumn'}`}
                    ></a>
                    <a
                        style={{ height: '30px' }}
                        href='#React_bases'
                        title='Bases de React'
                        className={`columnNavLinks ${hash === '#React_bases' ? 'activeNavColumn' : 'inactiveNavColumn'}`}
                    ></a>
                    <a
                        style={{ height: '30px' }}
                        href='#React_Pro'
                        title='React Avanzado'
                        className={`columnNavLinks ${hash === '#React_Pro' ? 'activeNavColumn' : 'inactiveNavColumn'}`}
                    ></a>
                    <a
                        style={{ height: '30px' }}
                        href='#React_Native'
                        title='React Native'
                        className={`columnNavLinks ${hash === '#React_Native' ? 'activeNavColumn' : 'inactiveNavColumn'}`}
                    ></a>
                    <a
                        style={{ height: '30px' }}
                        href='#Design_UI-UX'
                        title='Diseñador Web & Móvil'
                        className={`columnNavLinks ${hash === '#Design_UI-UX' ? 'activeNavColumn' : 'inactiveNavColumn'}`}
                    ></a>
                </div>
            </div>
        )
    }

    return null;

}



const styles = {
    container: {
        position: 'fixed' as 'fixed',
        left: '30px',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    content: {
        height: '90%',
        display: 'flex',
        flexDirection: 'column' as 'column',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
}