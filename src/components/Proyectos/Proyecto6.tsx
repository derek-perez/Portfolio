import { useShow } from "../../hooks/useShow";


export const Proyecto6 = () => {

    useShow({
        p: 'infoPortafolio',
        button: 'infoPortafolioButton',
        width: 446
    })

    const handleClick = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
        const img = e.target as HTMLImageElement;

        const modalImageCarousel = document.getElementById('modalImageCarousel') as HTMLElement;
        const modalImageCarousel_img = document.querySelector('#modalImageCarousel > div > img') as HTMLImageElement;
        const modalImageCarousel_alt = document.querySelector('#modalImageCarousel > div > p') as HTMLElement;

        document.querySelector('body')!.style.overflow = 'hidden';
        modalImageCarousel.style.display = 'block';

        modalImageCarousel_img.src = img.src;
        modalImageCarousel_img.style.maxHeight = 'auto';
        modalImageCarousel_img.style.width = '90%';

        if (img.classList.contains('verticalImg')) {
            modalImageCarousel_img.style.maxHeight = '412px';
            modalImageCarousel_img.style.width = 'auto';
        }

        modalImageCarousel_alt.innerHTML = img.alt;
    }


    return (
        <div id='Portafolio' className="section" style={styles.container}>
            <p style={styles.title}>
                Proyecto #6: <b>Este portafolio</b>
            </p>

            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                <p id='infoPortafolio' className="textHidden" style={styles.infoProyect}>
                    Como puedes ver, este portafolio que ahorita estás viendo, lo diseñé yo. Lo diseñé desde cero, empezando desde los bocetos, a los "Wireframes"
                    (o Marcos de Alambre), hasta un diseño de alta fidelidad. ¿Quiéres verlo? Mira abajo
                </p>
                <div id='infoPortafolioButton' style={styles.infoButton}>Ver más +</div>
            </div>

            <div id='carouselPortafolio' className="carouselProyects" style={styles.carousel}>
                <img
                    style={styles.img}
                    onClick={handleClick}
                    className='imgCarousel verticalImg'
                    alt='En este boceto se ve el flujo de usuario si presiona en el menú el item de Certificados.'
                    src='https://res.cloudinary.com/chugus/image/upload/v1658705392/Captura_de_pantalla_2022-07-24_182823_bmfmsb.jpg'
                />
                <img
                    style={styles.img}
                    onClick={handleClick}
                    className='imgCarousel'
                    alt='Ahora, este es el "Wireframe" (o Marco de Alambre) de el flujo de usuario que se ve en la imagen anterior.'
                    src='https://res.cloudinary.com/chugus/image/upload/v1658705392/Captura_de_pantalla_2022-07-24_182917_mqolyl.jpg'
                />
                <img
                    style={styles.img}
                    onClick={handleClick}
                    className='imgCarousel verticalImg'
                    alt='Por último, este es el diseño de alta fidelidad del flujo de usuario de las imagenes anteriores. Ahora sí, con lujo de detalles.'
                    src='https://res.cloudinary.com/chugus/image/upload/v1658705393/To_Certificates_From_HS_kvtroz.svg'
                />
            </div>
        </div>
    )
}



const styles = {
    container: {
        width: '95%',
        marginTop: '100px',
        minHeight: '80vh',
        display: 'flex',
        flexDirection: 'column' as 'column',
        alignItems: 'center'
    },
    title: {
        fontSize: '25px',
    },
    infoProyect: {
        width: '80%',
        lineHeight: '1.3',
        fontSize: '17px'
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

    carousel: {
        marginTop: '35px',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        overflowX: 'auto' as 'auto',
        padding: '10px'
    },
    img: {
        maxHeight: '20rem',
        marginRight: '40px',
        transition: '0.5s',
        cursor: 'pointer'
    }
}