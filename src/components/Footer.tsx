

export const Footer = () => {
    return (
        <div id='footer' style={styles.container}>
            <div style={styles.leftPart}>
                <img
                    src="https://dewey.tailorbrands.com/production/brand_version_mockup_image/872/7596161872_9e1bc302-a4d5-4889-8da9-f5fa4e6ac5d9.png?cb=1657994260"
                    style={styles.img}
                />
                <h3 style={{ marginLeft: '50px' }}>
                    Soy Derek Pérez, Desarrollador de Software, y estoy listo para diseñar, codificar y lanzar tu proyecto
                </h3>
            </div>
            <div style={styles.rightPart}>
                <div style={styles.infoRightPart}>
                    <div style={styles.infoContainers}>
                        <p style={styles.labelContainer}>Correo electrónico:</p>
                        <span style={styles.textContainer}>chugus808106@gmail.com</span>
                    </div>
                    <div style={styles.infoContainers}>
                        <p style={styles.labelContainer}>Número de teléfono:</p>
                        <span style={styles.textContainer}>+52 55 1647 9132</span>
                    </div>
                </div>
                <div style={styles.infoLeftPart}>
                    <span>Derek Pérez - Copyright &copy; 2022</span>
                </div>
            </div>
        </div>
    )
}



const styles = {
    container: {
        width: '100%',
        borderTop: '15px solid #69BE28',
        display: 'flex',
        alignItems: 'center',
        marginTop: '100px'
    },
    leftPart: {
        width: '50%',
        borderRight: '5px solid #69BE28',
        padding: '15px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    img: {
        height: '95px'
    },

    rightPart: {
        width: '50%',
        padding: '15px',
        display: 'flex',
        flexDirection: 'column' as 'column',
        alignItems: 'center'
    },
    infoRightPart: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginBottom: '35px'
    },

    infoContainers: {
        display: 'flex',
        flexDirection: 'column' as 'column',
        alignItems: 'flex-start'
    },
    labelContainer: {
        fontWeight: 'bold',
        marginBottom: '3px',
        fontSize: '18px'
    },
    textContainer: {
        fontSize: '18px'
    },

    infoLeftPart: {
        width: '100%',
        textAlignLast: 'end' as 'end'
    }
}