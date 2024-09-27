

export const NavbarColumn = ({ whatScreen }: { whatScreen: string }) => {

    let hash = window.location.hash;

    if (hash === '') {
        hash = '#Introduction'
    }

    const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        let div = e.target as HTMLElement;
        let title = div.title

        switch (title) {
            // Home Page
            case 'Introduction':
                document.getElementById('Introduction')!.scrollIntoView({ behavior: 'smooth' })
                break;
            case 'Skills_and_Capabilities':
                document.getElementById('Skills_and_Capabilities')!.scrollIntoView({ behavior: 'smooth' })
                break;
            case 'Some_projects':
                document.getElementById('Some_projects')!.scrollIntoView({ behavior: 'smooth' })
                break;
            case 'Some_certificates':
                document.getElementById('Some_certificates')!.scrollIntoView({ behavior: 'smooth' })
                break;
            case 'CV_and_Contact':
                document.getElementById('CV_and_Contact')!.scrollIntoView({ behavior: 'smooth' })
                break;

            // Projects Page
            case 'Introduction':
                document.getElementById('Introduction')!.scrollIntoView({ behavior: "smooth" });
                break;
            case 'Web_Development':
                document.getElementById(`Web_Development Blogi`)!.scrollIntoView({ behavior: "smooth" });
                break;
            case 'Mobile_Development':
                document.getElementById(`Mobile_Development NasaDex`)!.scrollIntoView({ behavior: "smooth" });
                break;
            case 'UI_UX':
                document.getElementById('UI_UX Habitual')!.scrollIntoView({ behavior: "smooth" });
                break;
        }
    }

    const handleClickCertificates = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        let div = e.target as HTMLElement;
        let title = div.title
        
        // Certificates Page
        switch (title) {
            case 'Introduction':
                document.getElementById('Introduction')!.scrollIntoView({ behavior: "smooth" });
                break;
            case 'Web_Development':
                document.getElementById('Web_Development')!.scrollIntoView({ behavior: "smooth" });
                break;
            case 'Mobile_Development':
                document.getElementById(`Mobile_Development`)!.scrollIntoView({ behavior: "smooth" });
                break;
            case 'UI_UX':
                document.getElementById('UI_UX')!.scrollIntoView({ behavior: "smooth" });
                break;
        }
    }


    if (whatScreen === 'InicioScreen') {
        return (
            <div id='navbarColumn' style={styles.container}>
                <div style={styles.content}>
                    <div
                        onClick={handleClick}
                        title='Introduction'
                        className={`columnNavLinks ${(hash === '#Introduction') ? 'activeNavColumn' : 'inactiveNavColumn'} `}
                    ></div>
                    <div
                        onClick={handleClick}
                        title='Skills_and_Capabilities'
                        className={`columnNavLinks ${hash === '#skills' ? 'activeNavColumn' : 'inactiveNavColumn'} `}
                    ></div>
                    <div
                        onClick={handleClick}
                        title='Some_projects'
                        className={`columnNavLinks ${hash === '#someProjects' ? 'activeNavColumn' : 'inactiveNavColumn'} `}
                    ></div>
                    <div
                        onClick={handleClick}
                        title='Some_certificates'
                        className={`columnNavLinks ${hash === '#someCertificates' ? 'activeNavColumn' : 'inactiveNavColumn'} `}
                    ></div>
                    <div
                        onClick={handleClick}
                        title='CV_and_Contact'
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
                        title='Introduction'
                        className={`columnNavLinks ${(hash === '#Introduction') ? 'activeNavColumn' : 'inactiveNavColumn'}`}
                    ></div>
                    <div
                        onClick={handleClick}
                        title='Web_Development'
                        className={`columnNavLinks ${(hash.includes('Web_Development')) ? 'activeNavColumn' : 'inactiveNavColumn'}`}
                    ></div>
                    <div
                        onClick={handleClick}
                        title='Mobile_Development'
                        className={`columnNavLinks ${(hash.includes('Mobile_Development')) ? 'activeNavColumn' : 'inactiveNavColumn'}`}
                    ></div>
                    <div
                        onClick={handleClick}
                        title='UI_UX'
                        className={`columnNavLinks ${hash.includes('UI_UX') ? 'activeNavColumn' : 'inactiveNavColumn'}`}
                    ></div>
                </div>
            </div>
        )
    } else if (whatScreen === 'CertificadosScreen') {
        return (
            <div id='navbarColumn' style={styles.container}>
                <div style={styles.content}>
                    <div
                        onClick={handleClickCertificates}
                        title='Introduction'
                        className={`columnNavLinks ${(hash === '#Introduction') ? 'activeNavColumn' : 'inactiveNavColumn'}`}
                    ></div>
                    <div
                        onClick={handleClickCertificates}
                        title='Web_Development'
                        className={`columnNavLinks ${(hash.includes('Web_Development')) ? 'activeNavColumn' : 'inactiveNavColumn'}`}
                    ></div>
                    <div
                        onClick={handleClickCertificates}
                        title='Mobile_Development'
                        className={`columnNavLinks ${(hash.includes('Mobile_Development')) ? 'activeNavColumn' : 'inactiveNavColumn'}`}
                    ></div>
                    <div
                        onClick={handleClickCertificates}
                        title='UI_UX'
                        className={`columnNavLinks ${hash.includes('UI_UX') ? 'activeNavColumn' : 'inactiveNavColumn'}`}
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