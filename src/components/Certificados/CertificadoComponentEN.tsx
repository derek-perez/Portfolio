import { useEffect, useState } from "react";

interface Props {
    id: string;
    whatIs: string;
    img: string;
    list: string;
}

export const CertificadoComponentEN = ({ id, whatIs, img, list }: Props) => {


    useEffect(() => {
        const listHTML = document.getElementById(`list${id}`);
        if (!listHTML) return;

        listHTML.innerHTML = list;
    }, [])

    if (id === undefined) return null;

    return (
        <div id={id} className="section" style={styles.container}>
            <h1 style={{ textAlign: 'center' }}>Course on {whatIs}</h1>

            <div className="certificadoComponent" style={styles.content}>
                <img
                    src={img}
                    style={styles.img}
                />

                <div style={{
                    width: '50%'
                }}>
                    <h2>In this {whatIs} course, I learned how to:</h2>

                    <ul id={`list${id}`} className='listCertificate' style={{ padding: 0, width: '90%' }}></ul>
                </div>
            </div>
        </div>
    )
}



const styles = {
    container: {
        width: '90%',
        display: 'flex',
        flexDirection: 'column' as 'column',
        alignItems: 'center',
        marginTop: '150px',
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