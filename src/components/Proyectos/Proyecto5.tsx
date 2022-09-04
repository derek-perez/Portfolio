import { useShow } from "../../hooks/useShow";


export const Proyecto5 = () => {

  useShow({
    p: 'infoHabitual',
    button: 'infoHabitualButton',
    width: 554
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

    if (img.classList.contains('verticalImg')) {
      modalImageCarousel_img.style.maxHeight = '412px';
      modalImageCarousel_img.style.width = 'auto';
    }

    modalImageCarousel_alt.innerHTML = img.alt;
  }


  return (
    <div id='UI_UX Habitual' className="section" style={styles.container}>
      <h1 style={{
        color: '#69BE28',
        borderBottom: '2px solid #69BE28',
        textShadow: '2px 2px 2px rgba(0, 0, 0, 0.9)'
      }}
      >
        Diseño UI/UX
      </h1>

      <p style={styles.title}>
        Proyecto #5: <b>Habitual</b>
      </p>

      <b style={{ width: '80%', textAlign: 'center', margin: '20px' }}>
        Este proyecto aún no ha sido codificado, solo diseñado...
      </b>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <p id='infoHabitual' className="textHidden" style={styles.infoProyect}>
          Este es el primer proyecto que diseñé desde un boceto, hasta el diseño de alta fidelidad. Se trata de una aplicación que funciona como Amazon o
          MercadoLibre donde está una página principal, una lista de deseos, un buscador y un carrito. Lo diseñé con ayuda de <b>Figma</b>, donde hay un
          propotipo...
        </p>
        <div id='infoHabitualButton' style={styles.infoButton}>Ver más +</div>
      </div>

      <div id='carouselHabitual' className="carouselProyects" style={styles.carousel}>
        <img
          style={styles.img}
          onClick={handleClick}
          className='imgCarousel'
          alt='Este es uno de los bocetos de la aplicación, esto es lo que se hace primero. Es un ejemplo de un flujo de usuario'
          src='https://res.cloudinary.com/chugus/image/upload/v1658701093/Sketch_03_dex7nm.svg'
        />
        <img
          style={styles.img}
          onClick={handleClick}
          className='imgCarousel'
          alt='Este es un ejemplo de un flujo de usuario en un "Wireframe" (o Marco de Alambre). Es un diseño con más detalles pero no con muchos.'
          src='https://res.cloudinary.com/chugus/image/upload/v1658702127/Searching_for_a_product_twuaw8.svg'
        />
        <img
          style={styles.img}
          onClick={handleClick}
          className='imgCarousel verticalImg'
          alt='Este es parte del diseño de alta fidelidad de la página principal. Como puedes ver, hasta imágenes tiene.'
          src='https://res.cloudinary.com/chugus/image/upload/v1658635571/Home_Logged_In_sc30qc.png'
        />
        <img
          style={styles.img}
          onClick={handleClick}
          className='imgCarousel verticalImg'
          alt='Este es un ejemplo de la lista de deseos o "Wishlist", y muestra como quiere que se vea ya codificado.'
          src='https://res.cloudinary.com/chugus/image/upload/v1658635571/Wishlist_Logged_In_No_List_s76zo3.png'
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