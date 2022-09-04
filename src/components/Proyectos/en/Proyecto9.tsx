import { useShow } from "../../../hooks/useShow";


export const Proyecto9 = () => {

    useShow({
        p: 'infoBitPredict',
        button: 'infoBitPredictButton',
        width: 1280
    })


    return (
        <div id='AI BitPredict' className="section" style={styles.container}>
            <p style={styles.title}>
                Project #9: <b>BitPredict</b>
            </p>

            <b style={{ margin: '20px 0', width: '80%', textAlign: 'center', overflow: 'hidden' }}>
                Notebook from Google Colab: &nbsp;
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
                    <b>BitPredict</b> is a project that is made to solve a <b>Time series problem</b>, it has a model of
                    artificial intelligence that receives the price of Bitcoin from the year 2013 to 2021 as input and tries to predict the price of Bitcoin
                    the next day or the days indicated. He was trained by &nbsp;
                    <a
                        style={{ color: 'white' }}
                        href='https://raw.githubusercontent.com/mrdbourke/tensorflow-deep-learning/main/extras/BTC_USD_2013-10-01_2021-05-18-CoinDesk.csv'
                    >
                        this CSV
                    </a>
                    &nbsp; that contains all the necessary historical information.
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
                    The following image shows how the model works:
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