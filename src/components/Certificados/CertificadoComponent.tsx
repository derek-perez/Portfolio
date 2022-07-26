import { useEffect, useState } from "react";
import { Footer } from "../Footer";

interface Props {
    id: string;
    whatIs: string;
    img: string;
    list: string;
}

export const CertificadoComponent = ({ id, whatIs, img, list }: Props) => {

    const [footer, setFooter] = useState(false);

    useEffect(() => {
        const listHTML = document.getElementById(`list${id}`);
        if (!listHTML) return;

        listHTML.innerHTML = list;
        if (id === 'Design_UI-UX') setFooter(true);
    }, [])

    if (id === undefined) return null;

    return (
        <div id={id} className="section" style={styles.container}>
            <h1 style={{ textAlign: 'center' }}>Curso sobre {whatIs}</h1>

            <div className="certificadoComponent" style={styles.content}>
                <img
                    src={img}
                    style={styles.img}
                />

                <div style={{
                    width: '50%'
                }}>
                    <h2 style={{ textAlign: 'center' }}>En este curso sobre {whatIs}, aprendí a:</h2>

                    <ul id={`list${id}`} className='listCertificate' style={{ padding: 0, width: '90%' }}></ul>
                </div>
            </div>
            
            {
                footer && (
                    <Footer />
                )
            }
        </div>
    )
}



const styles = {
    container: {
        width: '90%',
        display: 'flex',
        flexDirection: 'column' as 'column',
        alignItems: 'center',
        marginTop: '100px',
        paddingTop: '50px'
    },

    content: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: '25px'
    },
    img: {
        width: '40%',
    }
}