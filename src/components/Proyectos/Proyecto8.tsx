import { useShow } from "../../hooks/useShow";


export const Proyecto8 = () => {

    useShow({
        p: 'infoSkimLit',
        button: 'infoSkimLitButton',
        width: 1279
    })


    return (
        <div id='AI SkimLit' className="section" style={styles.container}>
            <p style={styles.title}>
                Proyecto #8: <b>SkimLit</b>
            </p>

            <b style={{ margin: '20px 0', width: '80%', textAlign: 'center', overflow: 'hidden' }}>
                Notebook (o Cuaderno) de Google Colab: &nbsp;
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
                    <b>SkimLit</b> es un proyecto que está hecho para el <b>Procesamiento del Lenguaje Natural (NLP)</b>, tiene un modelo de
                    inteligencia artificial que utiliza <b>Redes Neuronales Recurrentes (RNN)</b> y fue entrenado utilizando el conjunto de datos
                    (o Dataset) llamado <a style={{ color: 'white' }} href="https://github.com/Franck-Dernoncourt/pubmed-rct.git">PubMed 200k RCT</a>.
                    PubMed 200k RCT es un nuevo conjunto de datos basado en PubMed para la clasificación secuencial de oraciones. El conjunto de datos
                    consta de aproximadamente 200 000 resúmenes de ensayos controlados aleatorios, con un total de 2,3 millones de oraciones. Cada
                    oración de cada resumen está etiquetada con su función en el resumen utilizando una de las siguientes clases: antecedentes, objetivo,
                    método, resultado o conclusión.
                </p>
                <div id='infoSkimLitButton' style={styles.infoButton}>Ver más +</div>
            </div>

            <div style={{
                width: '90%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <h3 style={{ marginTop: '50px', textAlign: 'center' }}>
                    El siguiente video demuestra más o menos como funciona el modelo en acción &nbsp;
                    <span style={{ fontSize: '16px' }}>(yo no hice la aplicación que aparece en el video)</span>:
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