import { Navbar } from "../../Navbars/Navbar"
import { NavbarResponsive } from "../../Navbars/NavbarResponsive"


export const Part1 = () => {
    return (
        <div id="Introduction" className="section" style={styles.container}>
            <Navbar />
            <NavbarResponsive />

            <div style={styles.containerContent}>
                <h2 style={{ width: '80%', textAlign: 'center' }}>
                    Below, you will see some of my most relevant projects...
                </h2>

                <p style={{ width: '80%', lineHeight: '1.3' }}>
                    These are some of my most relevant projects in terms of <b>Web and Mobile Development</b>, because I have done more, but,
                    or they used <b>PHP</b> as Backend (and I do not present these because I no longer use PHP, I have migrated to NodeJs) or they were part of some course
                    in order to practice and learn. That is why I have decided not to show them.
                    <br />
                    <br />
                    And something important to highlight is that these projects have been done by myself
                    from absolutely <b>scratch</b>. All projects have <b>NodeJs</b> as backend.
                    And as for <b>UI/UX Design</b>, they are all that I have done, and here I show them to you.
                    <br />
                    <br />
                    Now, the artificial intelligence models that I will present to you are models for different <b>Deep Learning</b> tasks.
                    They are not all the models I made, but they are the most relevant and those that solve "relatively" more complex tasks than the
                    other models I developed.
                    <br />
                    <br />
                    I will present you the projects chronologically in their corresponding categories. And sorry, the projects are just in Spanish 🤭
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