import { useShow } from "../../hooks/useShow";


export const Proyecto9 = () => {

    useShow({
        p: 'infoBitPredict',
        button: 'infoBitPredictButton',
        width: 1280
    })


    return (
        <div id='AI BitPredict' className="section" style={styles.container}>
            <p style={styles.title}>
                Proyecto #9: <b>BitPredict</b>
            </p>

            <b style={{ margin: '20px 0', width: '80%', textAlign: 'center', overflow: 'hidden' }}>
                Notebook (o Cuaderno) de Google Colab: &nbsp;
                <a
                    href='https://colab.research.google.com/drive/1l6bVZ-cAieJfCYiL4xaFTkXVAXtmbs0e?usp=sharing'
                    style={{ color: 'white', fontWeight: '400' }}
                >
                    https://colab.research.google.com/drive/1l6bVZ-cAieJfCYiL4xaFTkXVAXtmbs0e?usp=sharing
                </a>
            </b>

            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                <p id='infoBitPredict' className="textHidden" style={styles.infoProyect}>
                    <b>BitPredict</b> es un proyecto que está hecho para resolver un <b>Problema de serie de tiempo</b>, tiene un modelo de
                    inteligencia artificial que recibe el precio del Bitcoin de el año 2013 al 2021 como entrada y trata de predecir el precio del Bitcoin
                    del día siguiente o de los días que se le indiquen. Fue entrenado mediante &nbsp;
                    <a
                        style={{ color: 'white' }}
                        href='https://raw.githubusercontent.com/mrdbourke/tensorflow-deep-learning/main/extras/BTC_USD_2013-10-01_2021-05-18-CoinDesk.csv'
                    >
                        este CSV
                    </a>
                    &nbsp; que contiene toda la información historica necesaria.
                </p>
                <div id='infoBitPredictButton' style={styles.infoButton}>Ver más +</div>
            </div>

            <div style={{
                width: '90%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <h3 style={{ marginTop: '50px' }}>
                    La siguiente imagen muestra cómo funciona el modelo:
                </h3>
                <div style={{ backgroundColor: 'white', width: '90%' }}>
                    <img style={{ width: '100%' }} src="https://res.cloudinary.com/chugus/image/upload/v1661983416/n29piefkjyrzc1fxe8x1.png"></img>
                </div>
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