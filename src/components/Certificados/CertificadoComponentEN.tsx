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
                    {
                        whatIs !== 'Python' && (
                            <>
                                <h2>In this {whatIs} course, I learned how to:</h2>
                                <ul id={`list${id}`} className='listCertificate' style={{ padding: 0, width: '90%' }}></ul>
                            </>
                        )
                    }
                    {
                        whatIs === 'Python' && (
                            <>
                                <h2>I took this Python course to reinforce knowledge:</h2>
                                <ul>
                                    <li className='listItem'>define functions, list/objects comprehension</li>
                                    <li className='listItem'>OOP (Object Oriented Programming)</li>
                                    <li className='listItem'>etc...</li>
                                </ul>
                                <span style={styles.span}>
                                    The course included topics such as: video games, web development with Flask, and the basics for using Pandas, Matplotlib, and NumPy.
                                    Now, in the Tensorflow course, the instructor taught very well and in a more advanced way, to use the aforementioned packages.
                                    And since what I wanted was not to learn how to make video games or learn how to use Flask in a basic way, I had to skip several sections.
                                </span>
                            </>
                        )
                    }
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
    },
    span: {
        lineHeight: '1.3',
        fontSize: '17px'
    }
}