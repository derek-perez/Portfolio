import { useShow } from "../../hooks/useShow";


export const Proyecto1 = () => {

    useShow({
        p: 'infoBlogi',
        button: 'infoBlogiButton',
        width: 1028
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

        modalImageCarousel_alt.innerHTML = img.alt;
    }


    return (
        <div id='Blogi' className="section" style={styles.container}>
            <h1 style={{
                color: '#69BE28',
                borderBottom: '2px solid #69BE28',
                textShadow: '2px 2px 2px rgba(0, 0, 0, 0.9)'
            }}
            >
                Desarrollo Web
            </h1>

            <p style={styles.title}>
                Proyecto #1: <b>Blogi</b>
            </p>

            <b style={{ margin: '15px 0', width: '80%', textAlign: 'center' }}>
                URL: <a href="https://blogi-node.herokuapp.com" style={{ color: 'white', fontWeight: '400' }}>https://blogi-node.herokuapp.com</a>
            </b>

            <b style={{ width: '80%', textAlign: 'center', marginBottom: '20px' }}>
                Parte del código fuente: <a href="https://github.com/chugus/blog-node.git" style={{ color: 'white', fontWeight: '400' }}>https://github.com/chugus/blog-node.git</a>
            </b>

            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                <p id='infoBlogi' className="textHidden" style={styles.infoProyect}>
                    <b>Blogi</b>, fue uno de mis primeros proyectos relevantes que hice utilizando como Backend: NodeJs. <b>Blogi</b> utiliza una <b>RESTful </b>
                    que yo mismo desarrollé y en ese momento, aún no implementaba en mis proyectos "React",
                    así que para el Frontend solo utilizo: <b>HTML</b>, <b>CSS</b> y <b>JavaScript</b>. <b>Blogi</b> es un administrador de blogs donde puedes
                    alojar tus blogs personales y también ver los de otros usuarios, tiene un foro y también es una <b>PWA</b> con <b>Notificaciones PUSH</b>,
                    entre otras cosas...
                    <br />
                    <br />
                    Eso sí, para crear un blog, debes escoger un plan, el "Plan Premium" es de pago, y te aparecerá una ventana de MercadoPago, pero solo es para pruebas.
                </p>
                <div id='infoBlogiButton' style={styles.infoButton}>Ver más +</div>
            </div>

            <div id='carouselBlogi' className="carouselProyects" style={styles.carousel}>
                <img
                    style={styles.img}
                    onClick={handleClick}
                    className='imgCarousel'
                    alt='Parte de la página principal de Blogi. En Blogi puedes cambiar el tema de la aplicación a oscuro o claro.'
                    src='https://res.cloudinary.com/chugus/image/upload/v1658607554/Captura_de_pantalla_2022-06-03_115646_q2wnfj.jpg'
                />
                <img
                    style={styles.img}
                    onClick={handleClick}
                    className='imgCarousel'
                    alt='Esta es la página para iniciar sesión. Y la página para registrarse es muy similar. Y también, puedes acceder con tu cuenta de Google.'
                    src='https://res.cloudinary.com/chugus/image/upload/v1658607554/Captura_de_pantalla_2022-06-03_115732_pojbw6.jpg'
                />
                <img
                    style={styles.img}
                    onClick={handleClick}
                    className='imgCarousel'
                    alt='Hay una página dedicada completamente a los artículos, donde podrás ver los más recientes y separados por categorías.'
                    src='https://res.cloudinary.com/chugus/image/upload/v1658607554/Captura_de_pantalla_2022-07-23_151543_sypwsx.jpg'
                />
                <img
                    style={styles.img}
                    onClick={handleClick}
                    className='imgCarousel'
                    alt='Así es como se ve un artículo en Blogi. Puedes ver la información del autor y hasta compartir el artículo en redes sociales.'
                    src='https://res.cloudinary.com/chugus/image/upload/v1658609266/Captura_de_pantalla_2022-07-23_154630_vhouwx.jpg'
                />
                <img
                    style={styles.img}
                    onClick={handleClick}
                    className='imgCarousel'
                    alt='Este es el "Dashboard" (o Panel de control) que tienes cuando creas una cuenta en Blogi y has escogido un plan.'
                    src='https://res.cloudinary.com/chugus/image/upload/v1658607554/Captura_de_pantalla_2022-06-03_115803_xljulf.jpg'
                />
                <img
                    style={styles.img}
                    onClick={handleClick}
                    className='imgCarousel'
                    alt='Desarrollé un pequeño "Word" para la redacción/edición del artículo, puedes cambiar el tamaño de la letra, la alineación del texto,
                    puedes agregar alguna imágen mediante una URL o desde tus archivos.'
                    src='https://res.cloudinary.com/chugus/image/upload/v1658607554/Captura_de_pantalla_2022-06-03_120239_add8w9.jpg'
                />
                <img
                    style={styles.img}
                    onClick={handleClick}
                    className='imgCarousel'
                    alt='Esta es la página de "Configuración". Aquí puedes editar tu información personal y cambiar la contraseña de tu cuenta.'
                    src='https://res.cloudinary.com/chugus/image/upload/v1658607554/Captura_de_pantalla_2022-06-03_115844_epodk0.jpg'
                />
            </div>
        </div>
    )
}



const styles = {
    container: {
        width: '95%',
        marginTop: '50px',
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
        fontSize: '17px',
        minHeight: '175px'
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