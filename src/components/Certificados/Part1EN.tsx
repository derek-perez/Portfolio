import { Navbar } from "../Navbars/Navbar"
import { NavbarResponsive } from "../Navbars/NavbarResponsive"


export const Part1EN = () => {
    return (
        <div id="Introduction" className="section" style={styles.container}>
            <Navbar />
            <NavbarResponsive />

            <div style={styles.containerContent}>
                <h2 style={{ width: '80%', textAlign: 'center' }}>
                    Below, you will see my certificates that I got on Udemy...
                </h2>

                <p style={{ width: '80%', lineHeight: '1.3' }}>
                    These are some of the certificates I have so far. It is true, Udemy is not an accredited institution, these certificates
                    of completion do not have legal or international validity. However, these certificates do show that I have acquired the
                    necessary skills and competencies.
                    <br />
                    <br />
                    I will present you the certificates chronologically. <b>Ah!</b> And one important thing, it says that I completed the certificate in certain hours,
                    but, the truth is that I spent more time, with the tasks, the coding challenges, etc... So it was not just a few days the time that
                    It took me to finish a certain course, in many cases, it even took me <b>months</b>.
                </p>
            </div>
        </div>
    )
}



const styles = {
    container: {
        width: '100%',
        minHeight: '70vh',
        display: 'flex',
        flexDirection: 'column' as 'column',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    containerContent: {
        width: '90%',
        display: 'flex',
        flexDirection: 'column' as 'column',
        alignItems: 'center'
    }
}