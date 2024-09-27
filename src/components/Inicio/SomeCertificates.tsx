import { useEffect } from "react"


export const SomeCertificates = ({ which }: { which: number }) => {

    const names = ['NodeJs', 'ReactJs', 'UI/UX Design']
    const imgs = [
        'https://res.cloudinary.com/chuguscloudinarypersonal/image/upload/v1658275686/Captura_de_pantalla_2022-07-19_190611_mguwlw.jpg',
        'https://res.cloudinary.com/chuguscloudinarypersonal/image/upload/v1658275686/Captura_de_pantalla_2022-07-19_190646_g9imuo.jpg',
        'https://res.cloudinary.com/chuguscloudinarypersonal/image/upload/v1658275687/Captura_de_pantalla_2022-07-19_190737_aoun2t.jpg'
    ]
    const lists = [
        `<li class='listItem'>create RESTful services</li>
            <li class='listItem'>use JWTs (Json Web Tokens)</li>
            <li class='listItem'>deploy my apps to Heroku</li>
            <li class='listItem'>import and export files using NodeJs</li>
            <li class='listItem'>use SocketIO for real-time communication</li>
            <li class='listItem'>develop basic and interactive console applications</li>
            <li class='listItem'>implement third-party services such as Google APIs</li>
            <li class='listItem'>develop non-relational databases like <b>MongoDB</b></li>`,
        `<li class='listItem'>use Redux</li>
            <li class='listItem'>use Firebase</li>
            <li class='listItem'>use the Context API</li>
            <li class='listItem'>use and develop hooks</li>
            <li class='listItem'>use <b>React Router Dom</b></li>
            <li class='listItem'>implement authentication with Google and JWTs</li>
            <li class='listItem'>develop websites using the MERN stack</li>`,
        `<li class='listItem'>master the principles of web and mobile design for UI/UX</li>
            <li class='listItem'>use techniques to work in a team and lead a project</li>
            <li class='listItem'>go from sketches to "Wireframes" and then to hi-fi designs</li>
            <li class='listItem'>use UI/UX best practices that are trending in the industry</li>
            <li class='listItem'>design professional logos and design options for any brand</li>
            <li class='listItem'>design for all types of devices using Figma and other tools</li>
            <li class='listItem'>master Figma for app design and convert them to HTML and CSS</li>`
    ];

    useEffect(() => {
        const imgCertificate = document.querySelector('#imgCertificate') as HTMLImageElement;
        const thingsOfCourse = document.querySelector('#thingsOfCourse') as HTMLDataListElement;
        if (!imgCertificate || !thingsOfCourse) return;

        imgCertificate.src = imgs[which];
        thingsOfCourse.innerHTML = lists[which];
    }, [which])



    return (
        <div id='someCertificatesContainer' style={styles.container}>
            <img
                src=''
                id='imgCertificate'
                style={styles.imgCertificate}
            />

            <div>
                <h2>In the {names[which]} course, I learned how to:</h2>
                <ul id='thingsOfCourse' style={{ padding: 0, width: '90%' }}></ul>
            </div>
        </div>
    )
}



const styles = {
    container: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginTop: '25px'
    },
    imgCertificate: {
        height: '325px',
        width: '450px'
    }
}