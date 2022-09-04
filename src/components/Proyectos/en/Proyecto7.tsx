import { useShow } from "../../../hooks/useShow";


export const Proyecto7 = () => {

    useShow({
        p: 'infoFood101',
        button: 'infoFood101Button',
        width: 1384
    })


    return (
        <div id='AI Food101' className="section" style={styles.container}>
            <h1 style={{
                color: '#69BE28',
                borderBottom: '2px solid #69BE28',
                textShadow: '2px 2px 2px rgba(0, 0, 0, 0.9)'
            }}
            >
                Deep Learning
            </h1>

            <p style={styles.title}>
                Project #7: <b>Food101</b>
            </p>

            <b style={{ margin: '20px 0', width: '80%', textAlign: 'center', overflow: 'hidden' }}>
                Notebook from Google Colab: &nbsp;
                <a
                    href='https://colab.research.google.com/drive/1LJ6z3JleUMs9Sg8XNWt8n4yyLxHZ5ZMl?usp=sharing'
                    style={{ color: 'white', fontWeight: '400' }}
                >
                    https://colab.research.google.com/drive/1LJ6z3JleUMs9Sg8XNWt8n4yyLxHZ5ZMl?usp=sharing
                </a>
            </b>

            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                <p id='infoFood101' className="textHidden" style={styles.infoProyect}>
                    <b>Food101</b> is a project that is made for <b>Computer Vision</b>, it has an artificial intelligence model that
                    uses <b>Convolutional Neural Networks (CNN)</b> and was trained using the data set (or Dataset) called
                    <a style={{ color: 'white' }} href="https://www.tensorflow.org/datasets/catalog/food101?hl=en"> Food 101</a>.
                    This dataset consists of 101 food categories, with 101,000 images. For each class, 250 images of
                    manually reviewed tests, as well as 750 training images. By the way, the training images were not cleaned and,
                    therefore, they still contain a certain amount of "noise". This mainly comes in the form of intense colors and sometimes incorrect labels.
                    All images were resized to have a maximum side length of 512 pixels.
                </p>
                <div id='infoFood101Button' style={styles.infoButton}>See more +</div>
            </div>

            <div style={{
                width: '90%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <h3 style={{ marginTop: '50px', textAlign: 'center' }}>
                    The following video demonstrates more or less how the model works in action. &nbsp;
                    <span style={{ fontSize: '16px' }}>(I did not make the application that appears in the video)</span>:
                </h3>
                <video style={{ width: '75%', maxHeight: '465px' }} poster="https://res.cloudinary.com/chugus/image/upload/v1661981908/food101-2.0.0_rwg9aq.png" controls>
                    <source src='https://res.cloudinary.com/chugus/video/upload/v1661895927/Demo_Food_Recognizer101_cnhp25.mp4' type='video/mp4' />
                    Your browser doesn't suuport videos
                </video>
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