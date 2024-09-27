
export const Proyecto8 = () => {

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
        <div id='UI_UX ChatCTS-Design' className="section" style={styles.container}>
            <p style={styles.title}>
                Project #8: <b>ChatCTS UI/UX</b> - 2024
            </p>

            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                <p id='infoPortafolio' className="textHidden" style={styles.infoProyect}>
                    I designed ChatCTS using Figma. I thought anout the idea of mix X and WhatsApp (Posts and Chat).
                    I tried to improve the style based on the knowledge I have about UI/UX design.
                    I have to admit I dind´t made a skectch and then the user flows, I just went right to the design and there it is.
                </p>
            </div>

            <div id='carouselPortafolio' className="carouselProyects" style={styles.carousel}>
                <img
                    style={styles.img}
                    onClick={handleClick}
                    className='imgCarousel verticalImg'
                    alt='This is how it looks on Figma.'
                    src='https://res.cloudinary.com/chuguscloudinarypersonal/image/upload/v1727465565/Captura_de_pantalla_2024-09-27_133147_rsduwz.png'
                />
            </div>
        </div>
    )
}



const styles = {
    container: {
        width: '95%',
        marginTop: '150px',
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
        justifyContent: 'center',
        alignItems: 'center',
        padding: '10px'
    },
    img: {
        width: '80%',
        transition: '0.5s',
        cursor: 'pointer'
    }
}