export const FooterEN = () => {

    const lng = localStorage.getItem('lng');

    const handleClick = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const lngSelect = e.target.value

        if (lngSelect === lng) return;

        if (lngSelect !== lng) {
            if (lngSelect === 'es') {
                localStorage.setItem('lng', 'es');
                window.location.reload();
            } else if (lngSelect === 'en') {
                localStorage.setItem('lng', 'en');
                window.location.reload();
            }
        }
    }

    return (
        <div id='footer' style={styles.container}>
            <div id='lngChanger' style={styles.lngChangerDiv}>
                <span style={styles.lngP}>Change language:</span>
                <select style={styles.lngB} onChange={handleClick}>
                    {
                        lng === 'es' ? (
                            <>
                                <option value='es'>Español</option>
                                <option value='en'>Inglés</option>
                            </>
                        ) : (
                            <>
                                <option value='en'>English</option>
                                <option value='es'>Spanish</option>
                            </>
                        )
                    }
                </select>
            </div>

            <div style={styles.content}>
                <div style={styles.leftPart}>
                    <img
                        src="https://dewey.tailorbrands.com/production/brand_version_mockup_image/872/7596161872_9e1bc302-a4d5-4889-8da9-f5fa4e6ac5d9.png?cb=1657994260"
                        style={styles.img}
                    />
                    <h3 style={{ marginLeft: '50px' }}>
                        I'm Derek Pérez, Software Developer, and I'm ready to design, code and launch your project
                    </h3>
                </div>
                <div style={styles.rightPart}>
                    <div style={styles.infoRightPart}>
                        <div style={styles.infoContainers}>
                            <p style={styles.labelContainer}>Email:</p>
                            <span style={styles.textContainer}>derekperez052@gmail.com</span>
                        </div>
                        <div style={styles.infoContainers}>
                            <p style={styles.labelContainer}>Phone number:</p>
                            <span style={styles.textContainer}>+52 55 1647 9132</span>
                        </div>
                    </div>
                    <div style={styles.infoLeftPart}>
                        <span>Derek Pérez - Copyright &copy; 2022</span>
                    </div>
                </div>
            </div>
        </div>
    )
}



const styles = {
    container: {
        width: '95%',
        borderTop: '15px solid #69BE28',
        display: 'flex',
        flexDirection: 'column' as 'column',
        alignItems: 'center',
        marginTop: '100px'
    },

    lngChangerDiv: {
        width: '100%',
        padding: '25px 0',
        borderBottom: '5px solid #69BE28',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    lngP: {
        fontSize: '18px',
        fontWeight: 'bold',
        padding: '0 20px'
    },
    lngB: {
        padding: '5px 10px',
        margin: '0 20px',
        fontSize: '18px',
        color: 'white',
        backgroundColor: '#0d6efd',
        borderColor: 'transparent',
        borderRadius: '3px',
        outline: 'none',
        cursor: 'pointer'
    },

    content: {
        windth: '100%',
        display: 'flex',
        alignItems: 'center'
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