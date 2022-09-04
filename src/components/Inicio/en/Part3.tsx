import { useState } from "react";
import { PreviewProject } from "./PreviewProject"


export const Part3 = () => {

    const [which, setWhich] = useState(0);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const button = e.target as HTMLButtonElement;

        if (button.title === 'Blogi') setWhich(0);
        if (button.title === 'Pizzacode Web') setWhich(1);
        if (button.title === 'Pizzacode Mobile') setWhich(2);
    }


    return (
        <div id='Some_projects' className="section" style={styles.container}>
            <h2 style={{ textAlign: 'center', width: '80%' }}>
                Look, I'm going to show you some of my projects so you can get an idea of why I say I'm a Software Developer
            </h2>

            <div id='preview_projects' style={styles.previewProjects}>
                <div id='buttonsProjectContainer' style={styles.buttonsGroup}>
                    <button
                        title='Blogi'
                        onClick={handleClick}
                        className='buttonProject'
                        style={{
                            ...(which === 0) ? styles.button : styles.inactiveButton,
                            transition: '0.5s'
                        }}
                    >
                        Blogi
                    </button>
                    <button
                        title='Pizzacode Web'
                        onClick={handleClick}
                        className='buttonProject'
                        style={{
                            ...(which === 1) ? styles.button : styles.inactiveButton,
                            transition: '0.5s'
                        }}
                    >
                        Pizzacode Web
                    </button>
                    <button
                        title='Pizzacode Mobile'
                        onClick={handleClick}
                        className='buttonProject'
                        style={{
                            ...(which === 2) ? styles.button : styles.inactiveButton,
                            transition: '0.5s'
                        }}
                    >
                        Pizzacode Mobile
                    </button>
                </div>

                <PreviewProject which={which} />
            </div>
        </div>
    )
}



const styles = {
    container: {
        width: '95%',
        display: 'flex',
        flexDirection: 'column' as 'column',
        alignItems: 'center',
        marginTop: '150px',
        paddingTop: '25px'
    },

    previewProjects: {
        width: '90%',
        display: 'flex',
        flexDirection: 'column' as 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '25px'
    },
    buttonsGroup: {
        width: '85%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '25px'
    },
    inactiveButton: {
        border: '1px solid #333',
        backgroundColor: '#A5ACAF',
        padding: '10px',
        borderRadius: '10px',
        height: '50px',
        width: '225px',
        color: '#555',
        fontSize: '22px',
        fontWeight: 'bold',
        opacity: 0.6,
        cursor: 'pointer',
        marginRight: '15px'
    },
    button: {
        border: '1px solid #333',
        backgroundColor: '#69BE28',
        padding: '10px',
        borderRadius: '10px',
        height: '50px',
        width: '225px',
        color: 'white',
        fontSize: '22px',
        fontWeight: 'bold',
        boxShadow: '5px 5px 5px #222',
        cursor: 'pointer',
        marginRight: '15px'
    }
}