import { useShow } from "../../hooks/useShow";


export const Proyecto6 = () => {

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
        UI/UX Design
      </h1>

      <p style={styles.title}>
        Project #6: <b>Habitual</b> - 2022
      </p>

      <b style={{ width: '80%', textAlign: 'center', margin: '20px' }}>
        This project has not been coded yet, just designed...
      </b>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <p id='infoHabitual' className="textHidden" style={styles.infoProyect}>
          This is the first project that I designed from a sketch, to hi-fi design. It is an application that works like Amazon or
          MercadoLibre where there is a main page, a wish list, a search engine and a cart. I designed it with the help of <b>Figma</b>, where there is a
          propotype...
        </p>
        <div id='infoHabitualButton' style={styles.infoButton}>See more +</div>
      </div>

      <div id='carouselHabitual' className="carouselProyects" style={styles.carousel}>
        <img
          style={styles.img}
          onClick={handleClick}
          className='imgCarousel'
          alt='This is one of the sketches of the application, this is what is done first. It is an example of a user flow.'
          src='https://res.cloudinary.com/chuguscloudinarypersonal/image/upload/v1658701093/Sketch_03_dex7nm.svg'
        />
        <img
          style={styles.img}
          onClick={handleClick}
          className='imgCarousel'
          alt='This is an example of a user flow in a "Wireframe" (or Wire Frame). It is a design with more details but not with many.'
          src='https://res.cloudinary.com/chuguscloudinarypersonal/image/upload/v1658702127/Searching_for_a_product_twuaw8.svg'
        />
        <img
          style={styles.img}
          onClick={handleClick}
          className='imgCarousel verticalImg'
          alt='This is part of the high fidelity design of the main page. As you can see, it even has images.'
          src='https://res.cloudinary.com/chuguscloudinarypersonal/image/upload/v1658635571/Home_Logged_In_sc30qc.png'
        />
        <img
          style={styles.img}
          onClick={handleClick}
          className='imgCarousel verticalImg'
          alt='This is an example of the wishlist or "Wishlist", and it shows what you want it to look like encoded.'
          src='https://res.cloudinary.com/chuguscloudinarypersonal/image/upload/v1658635571/Wishlist_Logged_In_No_List_s76zo3.png'
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