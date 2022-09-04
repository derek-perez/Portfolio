

export const NavbarColumn = ({ whatScreen }: { whatScreen: string }) => {

    let hash = window.location.hash;
    const lng = window.location.pathname;

    if (hash === '') {
        hash = `${lng.includes('es') ? '#Introducción' : '#Introduction'}`
    }

    const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        let div = e.target as HTMLElement;
        let title = div.title

        switch (title) {
            // Home Page
            case `${lng.includes('es') ? 'Introducción' : 'Introduction'}`:
                document.getElementById(`${lng.includes('es') ? 'Introducción' : 'Introduction'}`)!.scrollIntoView({ behavior: 'smooth' })
                break;
            case `${lng.includes('es') ? 'Habilidades_y_Capacidades' : 'Skills_and_Capabilities'}`:
                document.getElementById(`${lng.includes('es') ? 'Habilidades_y_Capacidades' : 'Skills_and_Capabilities'}`)!.scrollIntoView({ behavior: 'smooth' })
                break;
            case `${lng.includes('es') ? 'Algunos_proyectos' : 'Some_projects'}`:
                document.getElementById(`${lng.includes('es') ? 'Algunos_proyectos' : 'Some_projects'}`)!.scrollIntoView({ behavior: 'smooth' })
                break;
            case `${lng.includes('es') ? 'Algunos_certificados' : 'Some_certificates'}`:
                document.getElementById(`${lng.includes('es') ? 'Algunos_certificados' : 'Some_certificates'}`)!.scrollIntoView({ behavior: 'smooth' })
                break;
            case `${lng.includes('es') ? 'CV_y_Contacto' : "CV_and_Contact"}`:
                document.getElementById(`${lng.includes('es') ? 'CV_y_Contacto' : "CV_and_Contact"}`)!.scrollIntoView({ behavior: 'smooth' })
                break;

            // Projects & Certificates Page
            case `${lng.includes('es') ? 'Introducción' : 'Introduction'}`:
                document.getElementById(`${lng.includes('es') ? 'Introducción' : 'Introduction'}`)!.scrollIntoView({ behavior: "smooth" });
                break;
            case `${lng.includes('es') ? 'Desarrollo_Web' : 'Web_Development'}`:
                document.getElementById(`${lng.includes('es') ? 'Desarrollo_Web' : 'Web_Development'} Blogi`)!.scrollIntoView({ behavior: "smooth" });
                break;
            case `${lng.includes('es') ? 'Desarrollo_Móvil' : 'Mobile_Development'}`:
                document.getElementById(`${lng.includes('es') ? 'Desarrollo_Móvil' : 'Mobile_Development'} NasaDex`)!.scrollIntoView({ behavior: "smooth" });
                break;
            case 'UI_UX':
                document.getElementById('UI_UX Habitual')!.scrollIntoView({ behavior: "smooth" });
                break;
            case 'AI':
                document.getElementById('AI Food101')!.scrollIntoView({ behavior: "smooth" });
                break;
        }
    }


    if (whatScreen === 'InicioScreen') {
        return (
            <div id='navbarColumn' style={styles.container}>
                <div style={styles.content}>
                    <div
                        onClick={handleClick}
                        title={lng.includes('es') ? 'Introducción' : 'Introduction'}
                        className={`columnNavLinks ${(hash === '#Introducción' || hash === '#Introduction') ? 'activeNavColumn' : 'inactiveNavColumn'} `}
                    ></div>
                    <div
                        onClick={handleClick}
                        title={lng.includes('es') ? 'Habilidades_y_Capacidades' : 'Skills_and_Capabilities'}
                        className={`columnNavLinks ${hash === '#skills' ? 'activeNavColumn' : 'inactiveNavColumn'} `}
                    ></div>
                    <div
                        onClick={handleClick}
                        title={lng.includes('es') ? 'Algunos_proyectos' : 'Some_projects'}
                        className={`columnNavLinks ${hash === '#someProjects' ? 'activeNavColumn' : 'inactiveNavColumn'} `}
                    ></div>
                    <div
                        onClick={handleClick}
                        title={lng.includes('es') ? 'Algunos_certificados' : 'Some_certificates'}
                        className={`columnNavLinks ${hash === '#someCertificates' ? 'activeNavColumn' : 'inactiveNavColumn'} `}
                    ></div>
                    <div
                        onClick={handleClick}
                        title={lng.includes('es') ? 'CV_y_Contacto' : "CV_and_Contact"}
                        className={`columnNavLinks ${hash === '#linkContact' ? 'activeNavColumn' : 'inactiveNavColumn'} `}
                    ></div>
                </div>
            </div>
        )
    } else if (whatScreen === 'ProyectosScreens') {
        return (
            <div id='navbarColumn' style={styles.container}>
                <div style={styles.content}>
                    <div
                        onClick={handleClick}
                        title={lng.includes('es') ? 'Introducción' : 'Introduction'}
                        className={`columnNavLinks ${(hash === '#Introducción' || hash === '#Introduction') ? 'activeNavColumn' : 'inactiveNavColumn'}`}
                    ></div>
                    <div
                        onClick={handleClick}
                        title={lng.includes('es') ? 'Desarrollo_Web' : 'Web_Development'}
                        className={`columnNavLinks ${(lng.includes('es') ? hash.includes('Desarrollo_Web') : hash.includes('Web_Development')) ? 'activeNavColumn' : 'inactiveNavColumn'}`}
                    ></div>
                    <div
                        onClick={handleClick}
                        title={lng.includes('es') ? 'Desarrollo_Móvil' : 'Mobile_Development'}
                        className={`columnNavLinks ${(lng.includes('es') ? hash.includes('Desarrollo_Móvil') : hash.includes('Mobile_Development')) ? 'activeNavColumn' : 'inactiveNavColumn'}`}
                    ></div>
                    <div
                        onClick={handleClick}
                        title='UI_UX'
                        className={`columnNavLinks ${hash.includes('UI_UX') ? 'activeNavColumn' : 'inactiveNavColumn'}`}
                    ></div>
                    <div
                        onClick={handleClick}
                        title='AI'
                        className={`columnNavLinks ${hash.includes('AI') ? 'activeNavColumn' : 'inactiveNavColumn'}`}
                    ></div>
                </div>
            </div>
        )
    } else if (whatScreen === 'CertificadosScreen') {
        return (
            <div id='navbarColumn' style={styles.container}>
                <div style={styles.content}>
                    <div
                        onClick={handleClick}
                        title={lng.includes('/es/') ? 'Introducción' : 'Introduction'}
                        className={`columnNavLinks ${(hash === '#Introducción' || hash === '#Introduction') ? 'activeNavColumn' : 'inactiveNavColumn'}`}
                    ></div>
                    <div
                        onClick={handleClick}
                        title={lng.includes('/es/') ? 'Desarrollo_Web' : 'Web_Development'}
                        className={`columnNavLinks ${(lng.includes('/es/') ? hash.includes('Desarrollo_Web') : hash.includes('Web_Development')) ? 'activeNavColumn' : 'inactiveNavColumn'}`}
                    ></div>
                    <div
                        onClick={handleClick}
                        title={lng.includes('/es/') ? 'Desarrollo_Móvil' : 'Mobile_Development'}
                        className={`columnNavLinks ${(lng.includes('/es/') ? hash.includes('Desarrollo_Móvil') : hash.includes('Mobile_Development')) ? 'activeNavColumn' : 'inactiveNavColumn'}`}
                    ></div>
                    <div
                        onClick={handleClick}
                        title='UI_UX'
                        className={`columnNavLinks ${hash.includes('UI_UX') ? 'activeNavColumn' : 'inactiveNavColumn'}`}
                    ></div>
                    <div
                        onClick={handleClick}
                        title='AI'
                        className={`columnNavLinks ${hash.includes('AI') ? 'activeNavColumn' : 'inactiveNavColumn'}`}
                    ></div>
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