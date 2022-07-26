import { useEffect } from "react"


export const SomeCertificates = ({ which }: { which: number }) => {

    const names = ['NodeJs', 'ReactJs', 'Diseño UI/UX']
    const imgs = [
        'https://res.cloudinary.com/chugus/image/upload/v1658275686/Captura_de_pantalla_2022-07-19_190611_mguwlw.jpg',
        'https://res.cloudinary.com/chugus/image/upload/v1658275686/Captura_de_pantalla_2022-07-19_190646_g9imuo.jpg',
        'https://res.cloudinary.com/chugus/image/upload/v1658275687/Captura_de_pantalla_2022-07-19_190737_aoun2t.jpg'
    ]
    const lists = [
        `<li class='listItem'>crear servicios RESTful</li>
            <li class='listItem'>utilizar JWTs (Json Web Tokens)</li>
            <li class='listItem'>desplegar mis aplicaciones en Heroku</li>
            <li class='listItem'>importar y exportar archivos mediante NodeJs</li>
            <li class='listItem'>utilizar SocketIO para comunicación en tiempo real</li>
            <li class='listItem'>desarrollar aplicaciones de consola básicas e interativas</li>
            <li class='listItem'>implementar servicios de terceros como las APIs de Google</li>
            <li class='listItem'>desarrollar bases de datos no relacionales como <b>MongoDB</b></li>`,
        `<li class='listItem'>utilizar Redux</li>
            <li class='listItem'>utilizar Firebase</li>
            <li class='listItem'>utilizar el Context API</li>
            <li class='listItem'>uso y desarrollo de hooks</li>
            <li class='listItem'>utilizar <b>React Router Dom</b></li>
            <li class='listItem'>implementar autenticación con Google y JWTs</li>
            <li class='listItem'>desarrollar sitios web usando la pila MERN</li>`,
        `<li class='listItem'>dominar los principios de diseño web y móvil para UI/UX</li>
            <li class='listItem'>utilizar técnicas para trabajar en equipo y liderear algún proyecto</li>
            <li class='listItem'>pasar de bocetos a "Wireframes" y después a diseños de alta fidelidad</li>
            <li class='listItem'>utilizar las mejores prácticas de UI/UX que son tendencia en la industria</li>
            <li class='listItem'>diseñar logotipos profesionales y opciones de diseño para cualquier marca</li>
            <li class='listItem'>diseñar para todo tipo de dispositivos utilizando Figma y otras herramientas</li>
            <li class='listItem'>dominar Figma para el diseño de aplicaciones y convertirlos en HTML y CSS</li>`
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
                <h2>En el curso sobre {names[which]}, aprendí a:</h2>
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