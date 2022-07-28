import { useShow } from "../../hooks/useShow";


export const Proyecto3 = () => {

  useShow({
    p: 'infoNasadex',
    button: 'infoNasadexButton',
    width: 608
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
    <div id='NasaDex' className="section" style={styles.container}>
      <h1 style={{
        color: '#69BE28',
        borderBottom: '2px solid #69BE28',
        textShadow: '2px 2px 2px rgba(0, 0, 0, 0.9)'
      }}
      >
        Desarrollo Móvil
      </h1>

      <p style={styles.title}>
        Proyecto #3: <b>NasaDex</b>
      </p>

      <b style={{ margin: '20px 0', width: '80%', textAlign: 'center' }}>
        Código fuente: <a href='https://github.com/chugus/NasaDex.git' style={{ color: 'white', fontWeight: '400' }}>https://github.com/chugus/NasaDex.git</a>
      </b>

      <b style={{ width: '80%', textAlign: 'center', marginBottom: '20px' }}>
        Aplicación solo disponible para Android
      </b>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <p id='infoNasadex' className="textHidden" style={styles.infoProyect}>
          Esta fue una de mis primeras aplicaciones que desarrollé con React Native. Esta aplicación muestra imágenes de una de
          las bases de datos de la NASA que hay para obtener imagenes de ella. Esta aplicación tiene un "Infinite Scroll" (o Desplazamiento infinito).
          La verdad es que es divertido navegar por ella de vez en cuando...
        </p>
        <div id='infoNasadexButton' style={styles.infoButton}>Ver más +</div>
      </div>

      <div id='carouselNasadex' className="carouselProyects" style={styles.carousel}>
        <img
          style={styles.img}
          onClick={handleClick}
          className='imgCarousel'
          alt='Así es como se ve la pantalla principal de la aplicación. Son pequeñas tarjetas que tienen como fondo el color primario (bueno, es lo esperado).'
          src='https://res.cloudinary.com/chugus/image/upload/v1658697521/20220724_155019_fciswo.jpg'
        />
        <img
          style={styles.img}
          onClick={handleClick}
          className='imgCarousel'
          alt='Cuando se presiona en alguna tarjeta, se sobrepone esta pantalla, donde se ve la imagen, el titulo y datos adicionales sobre esta.'
          src='https://res.cloudinary.com/chugus/image/upload/v1658697522/20220724_155046_luft9r.jpg'
        />
        <img
          style={styles.img}
          onClick={handleClick}
          className='imgCarousel'
          alt='Este es el buscador de la aplicación. Aquí puedes buscar algunas tarjetas y ver su contenido.'
          src='https://res.cloudinary.com/chugus/image/upload/v1658697521/20220724_155054_sreamw.jpg'
        />
        <img
          style={styles.img}
          onClick={handleClick}
          className='imgCarousel'
          alt='Cuando se presiona en alguna tarjeta, se sobrepone esta pantalla, donde se ve la imagen, el titulo y datos adicionales sobre esta.
          Lo mejor, es que se mantiene el estado para que, aunque sigas navegando en la página principal, cuando vuelvas, siga todo como estaba.'
          src='https://res.cloudinary.com/chugus/image/upload/v1658697522/20220724_155103_hi2cdp.jpg'
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