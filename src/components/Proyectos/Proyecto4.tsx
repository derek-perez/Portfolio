import { useShow } from "../../hooks/useShow";


export const Proyecto4 = () => {

  useShow({
    p: 'infoPizzacodeMovil',
    button: 'infoPizzacodeMovilButton',
    width: 921
  })

  const handleClick = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    const img = e.target as HTMLImageElement;

    const modalImageCarousel = document.getElementById('modalImageCarousel') as HTMLElement;
    const modalImageCarousel_img = document.querySelector('#modalImageCarousel > div > img') as HTMLImageElement;
    const modalImageCarousel_alt = document.querySelector('#modalImageCarousel > div > p') as HTMLElement;

    document.querySelector('body')!.style.overflow = 'hidden';
    modalImageCarousel.style.display = 'block';

    modalImageCarousel_img.src = img.src;
    modalImageCarousel_img.style.maxHeight = '412px';
    modalImageCarousel_img.style.width = 'auto';

    modalImageCarousel_alt.innerHTML = img.alt;
  }


  return (
    <div id='Pizzacode_Movil' className="section" style={styles.container}>
      <p style={styles.title}>
        Proyecto #4: <b>Pizzacode Móvil</b>
      </p>

      <b style={{ margin: '20px 0', width: '80%', textAlign: 'center' }}>
        Código fuente: <a href="https://github.com/chugus/Pizzacode-RN.git" style={{ color: 'white', fontWeight: '400' }}>https://github.com/chugus/Pizzacode-RN.git</a>
      </b>

      <b style={{ width: '80%', textAlign: 'center', marginBottom: '20px' }}>
        Aplicación solo disponible para Android
      </b>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <p id='infoPizzacodeMovil' className="textHidden" style={styles.infoProyect}>
          También desarrollé la aplicación móvil para <b>Pizzacode</b> desde cero (actualmente solo para Android). Esta está desarrollada utilizando
          el <b>CLI</b> de <b>React Native</b> (no uso Expo). Utilizé el mismo Backend, los mismos Hooks y algunos <b>Contexts</b> que utilizé para
          el sitio web. La ventaja de utilizar React para desarrollar aplicación web y móvil, es que practicamente, puedes utilizar casi el mismo
          código para las dos aplicaciones, así que te ahorras mucho tiempo, recursos y código para desarrollar ambas aplicaciones.
        </p>
        <div id='infoPizzacodeMovilButton' style={styles.infoButton}>Ver más +</div>
      </div>

      <div id='carouselPizzacodeMovil' className="carouselProyects" style={styles.carousel}>
        <img
          style={styles.img}
          onClick={handleClick}
          className='imgCarousel'
          alt='Parte de la página principal de la aplicación móvil Pizzacode. Aquí, a diferencia del sitio web, hay carruseles en la página principal.'
          src='https://res.cloudinary.com/chugus/image/upload/v1658632450/Screenshot_20220723-180621_Pizzacode_f7onr8.jpg'
        />
        <img
          style={styles.img}
          onClick={handleClick}
          className='imgCarousel'
          alt='En la aplicación móvil, también es capaz de detectar el tema del dispositivo y aplicarlo en el tema de la aplicación.'
          src='https://res.cloudinary.com/chugus/image/upload/v1658632478/Screenshot_20220723-180634_Pizzacode_l9rgov.jpg'
        />
        <img
          style={styles.img}
          onClick={handleClick}
          className='imgCarousel'
          alt='Así es como se ve el menú. Está dividido en tres categorias y algo característico es su "Navigator" (o navegador)'
          src='https://res.cloudinary.com/chugus/image/upload/v1658632543/Screenshot_20220723-180626_Pizzacode_i5guby.jpg'
        />
        <img
          style={styles.img}
          onClick={handleClick}
          className='imgCarousel'
          alt='Este es el buscador de la aplicación. Aquí puedes buscar los productos por nombre o por una palabra clave.'
          src='https://res.cloudinary.com/chugus/image/upload/v1658632567/Screenshot_20220723-180645_Pizzacode_r4w7up.jpg'
        />
        <img
          style={styles.img}
          onClick={handleClick}
          className='imgCarousel'
          alt='Cada vez que eliminas, agregas o modificas algún producto, ya sea desde aquí o desde la página anterior, se calcula todo en tiempo real.'
          src='https://res.cloudinary.com/chugus/image/upload/v1658632512/Screenshot_20220723-180708_Pizzacode_wr1d06.jpg'
        />
        <img
          style={styles.img}
          onClick={handleClick}
          className='imgCarousel'
          alt='Así es la página donde puedes ver la información de tu cuenta. Aquí puedes cambiar tu contraseña, ver el historial de pagos y demás...'
          src='https://res.cloudinary.com/chugus/image/upload/v1658632597/Screenshot_20220723-180738_Pizzacode_k8x519.jpg'
        />
      </div>
    </div>
  )
}



const styles = {
  container: {
    width: '95%',
    marginTop: '50px',
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
    maxHeight: '35rem',
    marginRight: '40px',
    transition: '0.5s',
    cursor: 'pointer'
  }
}