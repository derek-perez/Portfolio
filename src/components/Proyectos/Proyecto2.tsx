import { useShow } from "../../hooks/useShow";


export const Proyecto2 = () => {

  useShow({
    p: 'infoPizzacodeWeb',
    button: 'infoPizzacodeWebButton',
    width: 749
  })

  const handleClick = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    const img = e.target as HTMLImageElement;

    const modalImageCarousel = document.getElementById('modalImageCarousel') as HTMLElement;
    const modalImageCarousel_img = document.querySelector('#modalImageCarousel > div > img') as HTMLImageElement;
    const modalImageCarousel_alt = document.querySelector('#modalImageCarousel > div > p') as HTMLElement;

    document.querySelector('body')!.style.overflow = 'hidden';
    modalImageCarousel.style.display = 'block';

    modalImageCarousel_img.src = img.src;
    modalImageCarousel_img.style.maxHeight = 'auto';
    modalImageCarousel_img.style.width = '90%';

    modalImageCarousel_alt.innerHTML = img.alt;
  }


  return (
    <div id='Desarrollo_Web Pizzacode_Web' className="section" style={styles.container}>
      <p style={styles.title}>
        Proyecto #2: <b>Pizzacode Web</b>
      </p>

      <b style={{ margin: '20px 0', width: '80%', textAlign: 'center' }}>
        URL: <a href="https://pizzacode-derek.netlify.app" style={{ color: 'white', fontWeight: '400' }}>https://pizzacode-derek.netlify.app</a>
      </b>

      <b style={{ marginBottom: '5px', width: '80%', textAlign: 'center' }}>
        Código fuente del Backend: <a href="https://github.com/chugus/Pizzacode-Backend.git" style={{ color: 'white', fontWeight: '400' }}>https://github.com/chugus/Pizzacode-Backend.git</a>
      </b>

      <b style={{ marginTop: 0, marginBottom: '20px', width: '80%', textAlign: 'center' }}>
        Código fuente del Frontend: <a href="https://github.com/chugus/Pizzacode-Frontend.git" style={{ color: 'white', fontWeight: '400' }}>https://github.com/chugus/Pizzacode-Frontend.git</a>
      </b>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <p id='infoPizzacodeWeb' className="textHidden" style={styles.infoProyect}>
          <b>Pizzacode</b>, fue uno de mis primeros proyectos usando la pila "MERN" (MongoDB, Express, ReactJs, NodeJs). <b>Pizzacode</b> también utiliza
          una <b>RESTful API</b> que yo desarrollé. En este proyecto, desarrollé <b>tres</b> hooks para la aplicación, y en este caso, usé el
          <b>Context API</b> en vez de <b>Redux</b> ya que no es un proyecto muy grande. Y como hize la aplicación móvil, decidí no hacer a
          Pizzacode una PWA.
        </p>
        <div id='infoPizzacodeWebButton' style={styles.infoButton}>Ver más +</div>
      </div>

      <div id='carouselPizzacodeWeb' className="carouselProyects" style={styles.carousel}>
        <img
          style={styles.img}
          onClick={handleClick}
          className='imgCarousel'
          alt='Parte de la página principal de Pizzacode. Pizzacode es capaz de detectar el tema de tu dispositivo y aplicarlo en todo el sitio.'
          src='https://res.cloudinary.com/chugus/image/upload/v1658615284/Captura_de_pantalla_2022-07-23_171703_ahyvua.jpg'
        />
        <img
          style={styles.img}
          onClick={handleClick}
          className='imgCarousel'
          alt='Esto es parte del menú. Desde aquí, puedes escoger los productos que quieras y están separados en tres categorías.'
          src='https://res.cloudinary.com/chugus/image/upload/v1658615284/Captura_de_pantalla_2022-07-23_172415_og36zm.jpg'
        />
        <img
          style={styles.img}
          onClick={handleClick}
          className='imgCarousel'
          alt='Este es el buscador. Aquí puedes buscar los productos por nombre o con alguna palabra clave.'
          src='https://res.cloudinary.com/chugus/image/upload/v1658615284/Captura_de_pantalla_2022-07-23_172556_z7vtp3.jpg'
        />
        <img
          style={styles.img}
          onClick={handleClick}
          className='imgCarousel'
          alt='Así es como se ve el carrito de compras. Tienes la opción de eliminar, modificar la cantidad y agregar productos desde ahí.'
          src='https://res.cloudinary.com/chugus/image/upload/v1658615284/Captura_de_pantalla_2022-07-23_172453_k6dem0.jpg'
        />
        <img
          style={styles.img}
          onClick={handleClick}
          className='imgCarousel'
          alt='Cada vez que eliminas, agregas o modificas algún producto, ya sea desde aquí o desde la página anterior, se calcula todo en tiempo real.'
          src='https://res.cloudinary.com/chugus/image/upload/v1658615285/Captura_de_pantalla_2022-07-23_172523_syug8l.jpg'
        />
        <img
          style={styles.img}
          onClick={handleClick}
          className='imgCarousel'
          alt='Así es la página donde puedes ver la información de tu cuenta. Aquí puedes cambiar tu contraseña, ver el historial de pagos y demás...'
          src='https://res.cloudinary.com/chugus/image/upload/v1658615284/Captura_de_pantalla_2022-07-23_172659_hkqx9z.jpg'
        />
        <img
          style={styles.img}
          onClick={handleClick}
          className='imgCarousel'
          alt='Incluso, puedes editar o añadir tarjetas de credito o débito de una manera muy interactiva y dinámica.'
          src='https://res.cloudinary.com/chugus/image/upload/v1658615285/Captura_de_pantalla_2022-07-23_172740_cgzild.jpg'
        />
      </div>
    </div>
  )
}



const styles = {
  container: {
    width: '95%',
    marginTop: '150px',
    display: 'flex',
    flexDirection: 'column' as 'column',
    alignItems: 'center'
  },
  title: {
    fontSize: '25px',
  },
  infoProyect: {
    width: '80%',
    lineHeight: '1.3',
    fontSize: '17px'
  },
  infoButton: {
    background: 'linear-gradient(#053666, #002244)',
    width: '90%',
    textAlign: 'center' as 'center',
    cursor: 'pointer',
    padding: '10px',
    borderTopLeftRadius: '5px',
    borderTopRightRadius: '5px',
    boxShadow: '0 -10px 10px rgba(0, 0, 0, 0.8)',
    display: 'none'
  },

  carousel: {
    marginTop: '35px',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    overflowX: 'auto' as 'auto',
    padding: '10px'
  },
  img: {
    maxHeight: '20rem',
    marginRight: '40px',
    transition: '0.5s',
    cursor: 'pointer'
  }
}