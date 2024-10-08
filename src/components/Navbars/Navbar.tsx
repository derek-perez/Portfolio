import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


export const Navbar = () => {

    const [lng, setLng] = useState('');

    useEffect(() => {
        const currentPage = window.location.pathname;
        currentPage.includes('/es/') ? setLng('es') : setLng('en');

        const iconNavbarResponsive = document.getElementById('iconNavbarResponsive');
        const listener = () => {
            document.getElementById('navbarResponsive')!.style.display = 'flex';
            document.getElementById('navbarResponsive')!.classList.remove('animate__fadeOut');
            document.getElementById('navbarResponsive')!.classList.add('animate__fadeIn');
        };

        iconNavbarResponsive!.addEventListener('click', listener);

        return () => iconNavbarResponsive!.removeEventListener('click', listener);
    }, []);


    return (
        <div id='navbar' style={styles.container}>
            <Link to='/#Introduction'>
                <img
                    src='https://dewey.tailorbrands.com/production/brand_version_mockup_image/872/7596161872_9e1bc302-a4d5-4889-8da9-f5fa4e6ac5d9.png?cb=1657994260'
                    style={styles.img}
                />
            </Link>

            <div id='linksNavbar' style={{ marginTop: '40px' }}>
                <Link to='/#Introduction' className='links' style={styles.link}>Home</Link>
                <Link to='projects/#Introduction' className='links' style={styles.link}>Projects</Link>
                <Link to='/certificates/#Introduction' className='links' style={styles.link}>Certificates</Link>
                <Link to='/contact/' className='links' style={styles.link}>Contact</Link>
            </div>

            <div style={{ display: 'none' }} id='iconNavbarResponsive'>
                <i style={styles.iconNavbar} className='fa fa-bars'></i>
            </div>
        </div>
    )
}



const styles = {
    container: {
        width: '90%',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        paddingLeft: '50px',
        marginTop: '25px'
    },

    img: {
        width: '100px',
        height: '140px'
    },
    link: {
        textDecoration: 'none',
        color: 'white',
        fontSize: '20px',
        marginLeft: '40px'
    },

    iconNavbar: {
        fontSize: '40px',
        marginTop: '35px',
        cursor: 'pointer'
    }
}