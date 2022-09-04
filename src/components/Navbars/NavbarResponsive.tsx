import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


export const NavbarResponsive = () => {

    const [lng, setLng] = useState('');

    useEffect(() => {
        const currentPage = window.location.pathname;
        currentPage.includes('es') ? setLng('es') : setLng('en');

        const closeNavbarResponsive = document.getElementById('closeNavbarResponsive');
        const listener = () => {
            document.getElementById('navbarResponsive')!.classList.remove('animate__fadeIn');
            document.getElementById('navbarResponsive')!.classList.add('animate__fadeOut');

            setTimeout(() => {
                document.getElementById('navbarResponsive')!.style.display = 'none';
            }, 500);
        };

        closeNavbarResponsive?.addEventListener('click', listener);

        return () => closeNavbarResponsive?.removeEventListener('click', listener)
    }, [])


    return (
        <div id='navbarResponsive' className="animate__animated animate__fadeIn" style={styles.container}>
            <div style={styles.content}>
                <i id='closeNavbarResponsive' className="fa fa-close" style={styles.icon}></i>

                <Link to={lng === 'es' ? '/es/#Introducción' : '/en/#Introduction'}>
                    <img
                        src='https://dewey.tailorbrands.com/production/brand_version_mockup_image/872/7596161872_9e1bc302-a4d5-4889-8da9-f5fa4e6ac5d9.png?cb=1657994260'
                        style={styles.img}
                    />
                </Link>

                <div style={styles.navLinks}>
                    <Link to={lng === 'es' ? '/es/#Introducción' : '/en/#Introduction'} className='links' style={styles.link}>
                        <i className="fa fa-home"></i> &nbsp;
                        {
                            lng === 'es' ? 'Inicio' : 'Home'
                        }
                    </Link>
                    <Link to={lng === 'es' ? '/es/proyectos/#Introducción' : '/en/projects/#Introduction'} className='links' style={styles.link}>
                        <i className="fa fa-address-book"></i> &nbsp;
                        {
                            lng === 'es' ? 'Proyectos' : 'Projects'
                        }
                    </Link>
                    <Link to={lng === 'es' ? '/es/certificados/#Introducción' : '/en/certificates/#Introduction'} className='links' style={styles.link}>
                        <i className="fa fa-vcard"></i> &nbsp;
                        {
                            lng === 'es' ? 'Certificados' : 'Certificates'
                        }
                    </Link>
                    <Link to={lng === 'es' ? '/es/contacto/' : '/en/contact/'} className='links' style={styles.link}>
                        <i className="fa fa-phone"></i> &nbsp;
                        {
                            lng === 'es' ? 'Contacto' : 'Contact'
                        }
                    </Link>
                </div>
            </div>
        </div>
    )
}



const styles = {
    container: {
        position: 'fixed' as 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        display: 'none',
        justifyContent: 'flex-end',
        zIndex: '1000.'
    },

    icon: {
        width: '100%',
        fontSize: '30px',
        cursor: 'pointer'
    },

    content: {
        backgroundColor: '#69BE28',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column' as 'column',
        alignItems: 'center'
    },

    img: {
        height: '125px'
    },

    navLinks: {
        display: 'flex',
        flexDirection: 'column' as 'column',
        borderTop: '2px solid white',
        padding: '25px',
        marginTop: '25px'
    },
    link: {
        color: 'white',
        marginBottom: '20px',
        fontSize: '25px',
        textDecoration: 'none'
    }
}