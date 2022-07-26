

export const NavbarColumn = ({ whatScreen }: { whatScreen: string }) => {

    if (whatScreen === 'InicioScreen') {
        return (
            <div id='navbarColumn' style={styles.container}>
                <div style={styles.content}>
                    <a
                        href='#intro'
                        title='Introducción'
                        className='columnNavLinks activeNavColumn'
                    ></a>
                    <a
                        href='#skills'
                        title='Habilidades y Capacidades'
                        className='columnNavLinks inactiveNavColumn'
                    ></a>
                    <a
                        href='#someProjects'
                        title='Algunos projectos'
                        className='columnNavLinks inactiveNavColumn'
                    ></a>
                    <a
                        href='#someCertificates'
                        title='Algunos certificados'
                        className='columnNavLinks inactiveNavColumn'
                    ></a>
                    <a
                        href='#linkContact'
                        title='¡Vamos, platiquemos!'
                        className='columnNavLinks inactiveNavColumn'
                    ></a>
                </div>
            </div>
        )
    } else if (whatScreen === 'ProyectosScreens') {
        return (
            <div id='navbarColumnProyectos' style={styles.container}>
                <div style={styles.content}>
                    <a
                        href='#intro'
                        title='Introducción'
                        className='columnNavLinks activeNavColumn'
                    ></a>
                    <a
                        href='#Blogi'
                        title='Blogi'
                        className='columnNavLinks inactiveNavColumn'
                    ></a>
                    <a
                        href='#Pizzacode_Web'
                        title='Pizzacode Web'
                        className='columnNavLinks inactiveNavColumn'
                    ></a>
                    <a
                        href='#NasaDex'
                        title='NasaDex'
                        className='columnNavLinks inactiveNavColumn'
                    ></a>
                    <a
                        href='#Pizzacode_Movil'
                        title='Pizzacode Móvil'
                        className='columnNavLinks inactiveNavColumn'
                    ></a>
                    <a
                        href='#Habitual'
                        title='Habitual'
                        className='columnNavLinks inactiveNavColumn'
                    ></a>
                    <a
                        href='#Portafolio'
                        title='Portafolio'
                        className='columnNavLinks inactiveNavColumn'
                    ></a>
                </div>
            </div>
        )
    } else if (whatScreen === 'CertificadosScreen') {
        return (
            <div id='navbarColumnCertificados' style={styles.container}>
                <div style={{
                    ...styles.content,
                    height: '90%'
                }}>
                    <a
                        style={{ height: '30px' }}
                        href='#intro'
                        title='Introducción'
                        className='columnNavLinks activeNavColumn'
                    ></a>
                    <a
                        style={{ height: '30px' }}
                        href='#Desarrollo_Web'
                        title='Desarrollo Web'
                        className='columnNavLinks inactiveNavColumn'
                    ></a>
                    <a
                        style={{ height: '30px' }}
                        href='#Chatbots'
                        title='Chatbots'
                        className='columnNavLinks inactiveNavColumn'
                    ></a>
                    <a
                        style={{ height: '30px' }}
                        href='#JavaScript'
                        title='JavaScript'
                        className='columnNavLinks inactiveNavColumn'
                    ></a>
                    <a
                        style={{ height: '30px' }}
                        href='#PWAs'
                        title='PWAs'
                        className='columnNavLinks inactiveNavColumn'
                    ></a>
                    <a
                        style={{ height: '30px' }}
                        href='#NodeJs'
                        title='NodeJs'
                        className='columnNavLinks inactiveNavColumn'
                    ></a>
                    <a
                        style={{ height: '30px' }}
                        href='#React_bases'
                        title='Bases de React'
                        className='columnNavLinks inactiveNavColumn'
                    ></a>
                    <a
                        style={{ height: '30px' }}
                        href='#React_Pro'
                        title='React Avanzado'
                        className='columnNavLinks inactiveNavColumn'
                    ></a>
                    <a
                        style={{ height: '30px' }}
                        href='#React_Native'
                        title='React Native'
                        className='columnNavLinks inactiveNavColumn'
                    ></a>
                    <a
                        style={{ height: '30px' }}
                        href='#Design_UI-UX'
                        title='Diseñador Web & Móvil'
                        className='columnNavLinks inactiveNavColumn'
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
        height: '80%',
        display: 'flex',
        flexDirection: 'column' as 'column',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
}