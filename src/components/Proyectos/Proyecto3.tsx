import { useShow } from "../../hooks/useShow";


export const Proyecto3 = () => {

    useShow({
        p: 'infoPizzacodeWeb',
        button: 'infoPizzacodeWebButton',
        width: 749
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
        <div id='Web_Development ChatCTS' className="section" style={styles.container}>
            <p style={styles.title}>
                Project #3: <b>ChatCTS</b> - 2024
            </p>

            <b style={{ margin: '20px 0', width: '80%', textAlign: 'center' }}>
                URL: <a href="https://chatcts.netlify.app" style={{ color: 'white', fontWeight: '400' }}>https://chatcts-derek.netlify.app</a>
            </b>

            <b style={{ marginBottom: '5px', width: '80%', textAlign: 'center' }}>
                Backend source code: <a href="https://github.com/chugus/ChatCTS-Backend.git" style={{ color: 'white', fontWeight: '400' }}>https://github.com/chugus/ChatCTS-Backend.git</a>
            </b>

            <b style={{ marginTop: 0, marginBottom: '20px', width: '80%', textAlign: 'center' }}>
                Frontend source code: <a href="https://github.com/chugus/ChatCTS.git" style={{ color: 'white', fontWeight: '400' }}>https://github.com/chugus/ChatCTS.git</a>
            </b>

            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                <p id='infoPizzacodeWeb' className="textHidden" style={styles.infoProyect}>
                    <b>ChatCTS</b> is an instant messaging and video calling app, built using the MERN Stack (MongoDB, Express, React, and Node.js) and Socket.IO for
                    real-time communication. The app offers advanced functionalities such as real-time chat, video and voice calls using WebRTC, ensuring a smooth and
                    fast experience. It implements custom push notifications, allowing users to receive real-time alerts when they receive messages or calls, which
                    improves the interactivity of the app.
                </p>
                <div id='infoPizzacodeWebButton' style={styles.infoButton}>See more +</div>
            </div>

            <div id='carouselPizzacodeWeb' className="carouselProyects" style={styles.carousel}>
                <img
                    style={styles.img}
                    onClick={handleClick}
                    className='imgCarousel'
                    alt='This is the welcome page. Her you are going to be redirected to the "Register" screen or to the main screen'
                    src='https://res.cloudinary.com/chuguscloudinarypersonal/image/upload/v1727459768/Screenshot_2024-09-27_at_11-55-49_ChatCTS_-_Connect_Talk_Share_bo81ks.png'
                />
                <img
                    style={styles.img}
                    onClick={handleClick}
                    className='imgCarousel'
                    alt='This is the "Explore" section. HEre is where ypu can see the posts of the other users and also from the place you can make your posts.'
                    src='https://res.cloudinary.com/chuguscloudinarypersonal/image/upload/v1727463739/Screenshot_2024-09-27_at_13-02-05_ChatCTS_-_Connect_Talk_Share_awa2mj.png'
                />
                <img
                    style={styles.img}
                    onClick={handleClick}
                    className='imgCarousel'
                    alt='This is the "Chat" page. Managed with real-time communication. This has real-time chat and also calls and videocalls.'
                    src='https://res.cloudinary.com/chuguscloudinarypersonal/image/upload/v1727463830/Screenshot_2024-09-27_at_13-03-39_ChatCTS_-_Connect_Talk_Share_kvtacx.png'
                />
                <img
                    style={styles.img}
                    onClick={handleClick}
                    className='imgCarousel'
                    alt='This is the "Settings" page. Here is highlighted the section of the friend requests. But also you can cahnge the profile picture and some details of your account'
                    src='https://res.cloudinary.com/chuguscloudinarypersonal/image/upload/v1727465530/Screenshot_2024-09-27_at_13-05-35_ChatCTS_-_Connect_Talk_Share_feh1de.png'
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