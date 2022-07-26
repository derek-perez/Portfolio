

export const ModalImg = () => {

    const handleClose = () => {
        document.getElementById('modalImageCarousel')!.style.display = 'none';
        document.querySelector('body')!.style.overflow = 'visible';
    }

    return (
        <div id="modalImageCarousel" style={styles.container}>
            <i style={styles.iconClose} className="fa fa-close" onClick={handleClose}></i>

            <div style={styles.content}>
                <img src='' style={styles.img}/>
                <p style={styles.text}></p>
            </div>
        </div>
    )
}



const styles = {
    container: {
        position: 'fixed' as 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(0, 0, 0, 0.7)',
        display: 'none'
    },

    iconClose: {
        position: 'absolute' as 'absolute',
        top: '15px',
        right: '15px',
        fontSize: '45px',
        cursor: 'pointer'
    },

    content: {
        position: 'fixed' as 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        display: 'flex',
        flexDirection: 'column' as 'column',
        alignItems: 'center',
        width: '80%',
        maxHeight: '90%',
        background: '#002244',
        borderTop: '20px solid #69BE28',
        overflowY: 'auto' as 'auto'
    },
    img: {
        width: '90%',
        margin: '25px 0',
        borderRadius: '5px'
    },
    text: {
        fontSize: '20px',
        padding: '0 25px',
        textAlign: 'center' as 'center'
    }
}