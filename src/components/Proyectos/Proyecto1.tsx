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
        <div id='Web_Development Blogi' className="section" style={styles.container}>
            <h1 style={{
                color: '#69BE28',
                borderBottom: '2px solid #69BE28',
                textShadow: '2px 2px 2px rgba(0, 0, 0, 0.9)'
            }}
            >
                Web Development
            </h1>

            <p style={styles.title}>
                Project #1: <b>Blogi</b> - 2021
            </p>

            <b style={{ margin: '15px 0', width: '80%', textAlign: 'center' }}>
                URL: <a href="https://blogi-node.herokuapp.com" style={{ color: 'white', fontWeight: '400' }}>https://blogi-node.herokuapp.com</a>
            </b>

            <b style={{ width: '80%', textAlign: 'center', marginBottom: '20px' }}>
                Part of the source code: <a href="https://github.com/chugus/blog-node.git" style={{ color: 'white', fontWeight: '400' }}>https://github.com/chugus/blog-node.git</a>
            </b>

            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                <p id='infoBlogi' className="textHidden" style={styles.infoProyect}>
                    <b>Blogi</b>, is an interactive blog management platform developed using Node.js for the backend and a frontend built with HTML, CSS, and JavaScript.
                    This project enables users to create their own blogs and publish articles that are accessible to others. I implemented a rich text editor,
                    allowing users to format their content with bold, italic, and underline options, as well as align text and add images to enhance their articles.
                    Additionally, Blogi features a forum for user interaction, which notifies users of new comments via push notifications, fostering community engagement.
                    Notably, Blogi is my first Progressive Web App (PWA), providing improved accessibility and performance.
                </p>
                <div id='infoBlogiButton' style={styles.infoButton}>See more +</div>
            </div>

            <div id='carouselBlogi' className="carouselProyects" style={styles.carousel}>
                <img
                    style={styles.img}
                    onClick={handleClick}
                    className='imgCarousel'
                    alt='Part of the main page of Blogi. In Blogi you can change the app theme to dark or light.'
                    src='https://res.cloudinary.com/chuguscloudinarypersonal/image/upload/v1658607554/Captura_de_pantalla_2022-06-03_115646_q2wnfj.jpg'
                />
                <img
                    style={styles.img}
                    onClick={handleClick}
                    className='imgCarousel'
                    alt='This is the login page. And the register page is very similar. And also, you can sign in with your Google account.'
                    src='https://res.cloudinary.com/chuguscloudinarypersonal/image/upload/v1658607554/Captura_de_pantalla_2022-06-03_115732_pojbw6.jpg'
                />
                <img
                    style={styles.img}
                    onClick={handleClick}
                    className='imgCarousel'
                    alt='There is a page completely dedicated to the articles, where you can see the most recent and separated by categories.'
                    src='https://res.cloudinary.com/chuguscloudinarypersonal/image/upload/v1658607554/Captura_de_pantalla_2022-07-23_151543_sypwsx.jpg'
                />
                <img
                    style={styles.img}
                    onClick={handleClick}
                    className='imgCarousel'
                    alt="This is what an article looks like on Blogi. You can see the author's information and even share the article on social networks."
                    src='https://res.cloudinary.com/chuguscloudinarypersonal/image/upload/v1658609266/Captura_de_pantalla_2022-07-23_154630_vhouwx.jpg'
                />
                <img
                    style={styles.img}
                    onClick={handleClick}
                    className='imgCarousel'
                    alt='This is the "Dashboard" (or Control Panel) that you have when you create a Blogi account and have chosen a plan.'
                    src='https://res.cloudinary.com/chuguscloudinarypersonal/image/upload/v1658607554/Captura_de_pantalla_2022-06-03_115803_xljulf.jpg'
                />
                <img
                    style={styles.img}
                    onClick={handleClick}
                    className='imgCarousel'
                    alt='I developed a small "Word" for the writing/editing of the article, you can change the size of the font, the alignment of the text,
                    you can add some image through a URL or from your files.'
                    src='https://res.cloudinary.com/chuguscloudinarypersonal/image/upload/v1658607554/Captura_de_pantalla_2022-06-03_120239_add8w9.jpg'
                />
                <img
                    style={styles.img}
                    onClick={handleClick}
                    className='imgCarousel'
                    alt='This is the "Settings" page. Here you can edit your personal information and change your account password.'
                    src='https://res.cloudinary.com/chuguscloudinarypersonal/image/upload/v1658607554/Captura_de_pantalla_2022-06-03_115844_epodk0.jpg'
                />
            </div>
        </div>
    )
}



const styles = {
    container: {
        width: '95%',
        marginTop: '150px',
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