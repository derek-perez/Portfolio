import { useShow } from "../../../hooks/useShow";


export const Proyecto8 = () => {

    useShow({
        p: 'infoSkimLit',
        button: 'infoSkimLitButton',
        width: 1279
    })


    return (
        <div id='AI SkimLit' className="section" style={styles.container}>
            <p style={styles.title}>
                Project #8: <b>SkimLit</b>
            </p>

            <b style={{ margin: '20px 0', width: '80%', textAlign: 'center', overflow: 'hidden' }}>
                Notebook from Google Colab: &nbsp;
                <a
                    href='https://colab.research.google.com/drive/1qzGZTI_5wvjit3uyDNCpHTNN3d9MpP_u?usp=sharing'
                    style={{ color: 'white', fontWeight: '400' }}
                >
                    https://colab.research.google.com/drive/1qzGZTI_5wvjit3uyDNCpHTNN3d9MpP_u?usp=sharing
                </a>
            </b>

            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                <p id='infoSkimLit' className="textHidden" style={styles.infoProyect}>
                    <b>SkimLit</b> is a project that is made for <b>Natural Language Processing (NLP)</b>, it has a model of
                    artificial intelligence that uses <b>Recurrent Neural Networks (RNN)</b> and was trained using the dataset
                    (or Dataset) named <a style={{ color: 'white' }} href="https://github.com/Franck-Dernoncourt/pubmed-rct.git">PubMed 200k RCT</a>.
                    PubMed 200k RCT is a new PubMed-based dataset for sentence sequential classification. The data set
                    consists of approximately 200,000 abstracts of randomized controlled trials, totaling 2.3 million sentences. Each
                    sentence of each abstract is tagged with its function in the abstract using one of the following classes: background, objective,
                    method, result or conclusion.
                </p>
                <div id='infoSkimLitButton' style={styles.infoButton}>See more +</div>
            </div>

            <div style={{
                width: '90%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <h3 style={{ marginTop: '50px', textAlign: 'center' }}>
                    The following video more or less demonstrates how the model works in action. &nbsp;
                    <span style={{ fontSize: '16px' }}>(I did not make the application that appears in the video)</span>:
                </h3>
                <video width='75%' controls>
                    <source src='https://res.cloudinary.com/chugus/video/upload/v1661981758/Dise%C3%B1o_sin_t%C3%ADtulo_gfewsk.mp4' type='video/mp4' />
                    Tu navegador no soporta videos
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