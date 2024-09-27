
export const Proyecto7 = () => {

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
        <div id='UI_UX Portfolio' className="section" style={styles.container}>
            <p style={styles.title}>
                Project #7: <b>This portfolio</b> - 2022
            </p>

            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                <p id='infoPortafolio' className="textHidden" style={styles.infoProyect}>
                    As you can see, this portfolio that you are seeing right now, I designed it. I designed it from scratch, starting from the sketches, to the "Wireframes",
                    to high-fidelity design. Do you want to see it? Look down...
                </p>
            </div>

            <div id='carouselPortafolio' className="carouselProyects" style={styles.carousel}>
                <img
                    style={styles.img}
                    onClick={handleClick}
                    className='imgCarousel verticalImg'
                    alt='In this sketch you can see the user flow if you press the "Certificates" item in the menu.'
                    src='https://res.cloudinary.com/chuguscloudinarypersonal/image/upload/v1658705392/Captura_de_pantalla_2022-07-24_182823_bmfmsb.jpg'
                />
                <img
                    style={styles.img}
                    onClick={handleClick}
                    className='imgCarousel'
                    alt='Now, this is the "Wireframe" of the user flow that you see in the previous image.'
                    src='https://res.cloudinary.com/chuguscloudinarypersonal/image/upload/v1658705392/Captura_de_pantalla_2022-07-24_182917_mqolyl.jpg'
                />
                <img
                    style={styles.img}
                    onClick={handleClick}
                    className='imgCarousel verticalImg'
                    alt='Lastly, this is the high-fidelity design of the user flow from the previous images. Now yes, with luxury of details.'
                    src='https://res.cloudinary.com/chuguscloudinarypersonal/image/upload/v1658705393/To_Certificates_From_HS_kvtroz.svg'
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