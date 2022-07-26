import { useEffect } from "react"
import { Link } from "react-router-dom"


export const NavbarResponsive = () => {

    useEffect(() => {
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

                <img
                    src='https://dewey.tailorbrands.com/production/brand_version_mockup_image/872/7596161872_9e1bc302-a4d5-4889-8da9-f5fa4e6ac5d9.png?cb=1657994260'
                    style={styles.img}
                />

                <div style={styles.navLinks}>
                    <Link to='/#intro' className='links' style={styles.link}>
                        <i className="fa fa-home"></i> &nbsp; Inicio
                    </Link>
                    <Link to='/proyectos#intro' className='links' style={styles.link}>
                        <i className="fa fa-address-book"></i> &nbsp; Proyectos
                    </Link>
                    <Link to='/certificados#intro' className='links' style={styles.link}>
                        <i className="fa fa-vcard"></i> &nbsp; Certificados
                    </Link>
                    <Link to='/contacto' className='links' style={styles.link}>
                        <i className="fa fa-phone"></i> &nbsp; Contacto
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