import { Navbar } from "../Navbars/Navbar"
import { NavbarResponsive } from "../Navbars/NavbarResponsive"

export const Part1 = () => {
    return (
        <div id='Introduction' className="section" style={{ width: '100%' }}>
            <Navbar />
            <NavbarResponsive />

            <div id='textIntro' style={styles.contentPart1}>
                <img
                    src='https://res.cloudinary.com/chuguscloudinarypersonal/image/upload/v1658094282/istockphoto-628332486-612x612_preview_rev_1_b2jawy_preview_rev_1_cf1igb.png'
                    style={styles.img}
                />

                <div style={{ marginLeft: '50px', width: '80%' }}>
                    <h2>
                        Hi!, I'm Derek Pérez, a Software Developer and I'm eager to help you...
                    </h2>
                    <p style={{ lineHeight: '1.3' }}>
                        How are you...? I am a Web & Mobile Designer/Developer ready and prepared to be able to design, code and launch your project.
                        I am a Full Stack Web Developer using the "MERN Stack" for website development,
                        and I use React Native CLI for mobile app development, (currently only Android apps).
                    </p>
                </div>
            </div>
        </div>
    )
}


const styles = {
    contentPart1: {
        height: '60vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 50px'
    },
    img: {
        width: '500px'
    }
}