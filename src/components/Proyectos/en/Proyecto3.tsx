import { useShow } from "../../../hooks/useShow";


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
    <div id='Mobile_Development NasaDex' className="section" style={styles.container}>
      <h1 style={{
        color: '#69BE28',
        borderBottom: '2px solid #69BE28',
        textShadow: '2px 2px 2px rgba(0, 0, 0, 0.9)'
      }}
      >
        Mobile Development
      </h1>

      <p style={styles.title}>
        Project #3: <b>NasaDex</b>
      </p>

      <b style={{ margin: '20px 0', width: '80%', textAlign: 'center' }}>
        Source code: <a href='https://github.com/chugus/NasaDex.git' style={{ color: 'white', fontWeight: '400' }}>https://github.com/chugus/NasaDex.git</a>
      </b>

      <b style={{ width: '80%', textAlign: 'center', marginBottom: '20px' }}>
        Application only available for Android
      </b>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <p id='infoNasadex' className="textHidden" style={styles.infoProyect}>
          This was one of my first apps that I developed with React Native. This application shows images of one of
          the NASA databases that exist to obtain images of it. This application has an "Infinite Scroll" (or Infinite Scroll).
          The truth is that it is fun to navigate through it from time to time...
        </p>
        <div id='infoNasadexButton' style={styles.infoButton}>See more +</div>
      </div>

      <div id='carouselNasadex' className="carouselProyects" style={styles.carousel}>
        <img
          style={styles.img}
          onClick={handleClick}
          className='imgCarousel'
          alt='This is what the main screen of the app looks like. They are small cards that have the primary color as the background (well, it is expected).'
          src='https://res.cloudinary.com/chugus/image/upload/v1658697521/20220724_155019_fciswo.jpg'
        />
        <img
          style={styles.img}
          onClick={handleClick}
          className='imgCarousel'
          alt='When you click on any card, this screen is overlaid, where you see the image, the title and additional data on it.'
          src='https://res.cloudinary.com/chugus/image/upload/v1658697522/20220724_155046_luft9r.jpg'
        />
        <img
          style={styles.img}
          onClick={handleClick}
          className='imgCarousel'
          alt='This is the application search engine. Here you can search for some cards and see their content.'
          src='https://res.cloudinary.com/chugus/image/upload/v1658697521/20220724_155054_sreamw.jpg'
        />
        <img
          style={styles.img}
          onClick={handleClick}
          className='imgCarousel'
          alt='When you click on any card, this screen is overlaid, where you see the image, the title and additional data on it.
          The best thing is that the state is maintained so that, even if you continue browsing the main page, when you return, everything continues as it was.'
          src='https://res.cloudinary.com/chugus/image/upload/v1658697522/20220724_155103_hi2cdp.jpg'
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
    maxHeight: '35rem',
    marginRight: '40px',
    transition: '0.5s',
    cursor: 'pointer'
  }
}