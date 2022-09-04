import { useNavigate } from "react-router-dom";
import { FooterEN } from "../../FooterEN";


export const Part5 = () => {

    const navigate = useNavigate();

    return (
        <div id='CV_and_Contact' className="section" style={styles.container}>
            <div style={styles.content}>
                <h2 style={{ textAlign: 'center', width: '80%' }}>
                    ¿What do you think...? Let's get in touch to develop your project
                </h2>

                <p style={styles.text}>
                    This has been a small sample of what I am and what I do, if you want to know more about me,
                    you can continue browsing the site. Now, to contact me, just fill out a small form
                    and thus be able to negotiate and reach an agreement for the development of that project that you have in mind.
                    <br/>
                    <br/>
                    And also, you can see my CV (curriculum vitae) <a style={{color:'white'}} href='https://drive.google.com/file/d/1XJ1noR9Zsufx00HyBGEdT_W_F7cEUDEx/view?usp=sharing'>here</a>
                </p>

                <button
                    onClick={() => {
                        navigate('/contacto')
                    }}
                    style={styles.button}
                >
                    Fill out the form
                    <i className="fa fa-long-arrow-right"></i>
                </button>
            </div>

            <FooterEN />
        </div>
    )
}



const styles = {
    container: {
        marginTop: '150px',
        width: '95%',
        minHeight: '70vh',
        display: 'flex',
        flexDirection: 'column' as 'column',
        alignItems: 'center'
    },

    content: {
        display: 'flex',
        flexDirection: 'column' as 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },

    text: {
        width: '75%',
        textAlign: 'center' as 'center',
        lineHeight: '1.3',
        fontSize: '18px'
    },

    button: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#69BE28',
        width: '350px',
        maxWidth: '85%',
        color: 'white',
        padding: '10px 15px',
        border: '#69BE28',
        borderRadius: '5px',
        fontSize: '22px',
        fontWeight: 'bold',
        marginTop: '25px',
        textShadow: '1px 1px 2px #222',
        cursor: 'pointer'
    }
}