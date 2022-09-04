import { useShow } from "../../../hooks/useShow";


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
    <div id='Mobile_Development Pizzacode_Mobile' className="section" style={styles.container}>
      <p style={styles.title}>
        Project #4: <b>Pizzacode Mobile</b>
      </p>

      <b style={{ margin: '20px 0', width: '80%', textAlign: 'center' }}>
        Source code: <a href="https://github.com/chugus/Pizzacode-RN.git" style={{ color: 'white', fontWeight: '400' }}>https://github.com/chugus/Pizzacode-RN.git</a>
      </b>

      <b style={{ width: '80%', textAlign: 'center', marginBottom: '20px' }}>
        Application only available for Android
      </b>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <p id='infoPizzacodeMovil' className="textHidden" style={styles.infoProyect}>
          I also developed the mobile app for <b>Pizzacode</b> from scratch (currently only for Android). This is developed using
          the <b>CLI</b> of <b>React Native</b> (I don't use Expo). I used the same Backend, the same hooks and some <b>Contexts</b> that I used for
          the website. The advantage of using React to develop web and mobile applications is that practically, you can use almost everything the same
          code for both applications, so you save a lot of time, resources and code to develop both applications.
        </p>
        <div id='infoPizzacodeMovilButton' style={styles.infoButton}>See more +</div>
      </div>

      <div id='carouselPizzacodeMovil' className="carouselProyects" style={styles.carousel}>
        <img
          style={styles.img}
          onClick={handleClick}
          className='imgCarousel'
          alt='Part of the home page of the Pizzacode mobile app. Here, unlike the website, there are carousels on the main page.'
          src='https://res.cloudinary.com/chugus/image/upload/v1658632450/Screenshot_20220723-180621_Pizzacode_f7onr8.jpg'
        />
        <img
          style={styles.img}
          onClick={handleClick}
          className='imgCarousel'
          alt='In the mobile app, it is also able to detect the device theme and apply it in the app theme.'
          src='https://res.cloudinary.com/chugus/image/upload/v1658632478/Screenshot_20220723-180634_Pizzacode_l9rgov.jpg'
        />
        <img
          style={styles.img}
          onClick={handleClick}
          className='imgCarousel'
          alt='This is what the menu looks like. It is divided into three categories and something characteristic is its "Navigator" (or browser).'
          src='https://res.cloudinary.com/chugus/image/upload/v1658632543/Screenshot_20220723-180626_Pizzacode_i5guby.jpg'
        />
        <img
          style={styles.img}
          onClick={handleClick}
          className='imgCarousel'
          alt='This is the application search engine. Here you can search for products by name or by keyword.'
          src='https://res.cloudinary.com/chugus/image/upload/v1658632567/Screenshot_20220723-180645_Pizzacode_r4w7up.jpg'
        />
        <img
          style={styles.img}
          onClick={handleClick}
          className='imgCarousel'
          alt='Every time you delete, add or modify a product, either from here or from the previous page, everything is calculated in real time.'
          src='https://res.cloudinary.com/chugus/image/upload/v1658632512/Screenshot_20220723-180708_Pizzacode_wr1d06.jpg'
        />
        <img
          style={styles.img}
          onClick={handleClick}
          className='imgCarousel'
          alt='This is the page where you can see your account information. Here you can change your password, view payment history and more...'
          src='https://res.cloudinary.com/chugus/image/upload/v1658632597/Screenshot_20220723-180738_Pizzacode_k8x519.jpg'
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