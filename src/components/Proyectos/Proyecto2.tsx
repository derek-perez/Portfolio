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
    <div id='Web_Development Pizzacode_Web' className="section" style={styles.container}>
      <p style={styles.title}>
        Project #2: <b>Pizzacode Web</b> - 2022
      </p>

      <b style={{ margin: '20px 0', width: '80%', textAlign: 'center' }}>
        URL: <a href="https://pizzacode-derek.netlify.app" style={{ color: 'white', fontWeight: '400' }}>https://pizzacode-derek.netlify.app</a>
      </b>

      <b style={{ marginBottom: '5px', width: '80%', textAlign: 'center' }}>
        Backend source code: <a href="https://github.com/chugus/Pizzacode-Backend.git" style={{ color: 'white', fontWeight: '400' }}>https://github.com/chugus/Pizzacode-Backend.git</a>
      </b>

      <b style={{ marginTop: 0, marginBottom: '20px', width: '80%', textAlign: 'center' }}>
        Frontend source code: <a href="https://github.com/chugus/Pizzacode-Frontend.git" style={{ color: 'white', fontWeight: '400' }}>https://github.com/chugus/Pizzacode-Frontend.git</a>
      </b>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <p id='infoPizzacodeWeb' className="textHidden" style={styles.infoProyect}>
          <b>Pizzacode</b> is a fictional pizzeria website developed using the MERN Stack (MongoDB, Express, React, and Node.js). This project features a
          user-friendly shopping cart that allows customers to easily add and manage their orders. Additionally, it incorporates customizable themes based
          on user preferences, enhancing the overall user experience. Pizzacode marked a significant milestone in my development journey as it was my
          first major project utilizing React and Context after completing a UI/UX design course.
        </p>
        <div id='infoPizzacodeWebButton' style={styles.infoButton}>See more +</div>
      </div>

      <div id='carouselPizzacodeWeb' className="carouselProyects" style={styles.carousel}>
        <img
          style={styles.img}
          onClick={handleClick}
          className='imgCarousel'
          alt='Part of the main page of Pizzacode. Pizzacode is able to detect the theme of your device and apply it throughout the site.'
          src='https://res.cloudinary.com/chuguscloudinarypersonal/image/upload/v1658615284/Captura_de_pantalla_2022-07-23_171703_ahyvua.jpg'
        />
        <img
          style={styles.img}
          onClick={handleClick}
          className='imgCarousel'
          alt='This is part of the menu. From here, you can choose the products you want and they are separated into three categories.'
          src='https://res.cloudinary.com/chuguscloudinarypersonal/image/upload/v1658615284/Captura_de_pantalla_2022-07-23_172415_og36zm.jpg'
        />
        <img
          style={styles.img}
          onClick={handleClick}
          className='imgCarousel'
          alt='This is the seeker. Here you can search for products by name or with a keyword.'
          src='https://res.cloudinary.com/chuguscloudinarypersonal/image/upload/v1658615284/Captura_de_pantalla_2022-07-23_172556_z7vtp3.jpg'
        />
        <img
          style={styles.img}
          onClick={handleClick}
          className='imgCarousel'
          alt='This is what the shopping cart looks like. You have the option to delete, modify the quantity and add products from there.'
          src='https://res.cloudinary.com/chuguscloudinarypersonal/image/upload/v1658615284/Captura_de_pantalla_2022-07-23_172453_k6dem0.jpg'
        />
        <img
          style={styles.img}
          onClick={handleClick}
          className='imgCarousel'
          alt='Every time you delete, add or modify a product, either from here or from the previous page, everything is calculated in real time.'
          src='https://res.cloudinary.com/chuguscloudinarypersonal/image/upload/v1658615285/Captura_de_pantalla_2022-07-23_172523_syug8l.jpg'
        />
        <img
          style={styles.img}
          onClick={handleClick}
          className='imgCarousel'
          alt='This is the page where you can see your account information. Here you can change your password, view payment history and more...'
          src='https://res.cloudinary.com/chuguscloudinarypersonal/image/upload/v1658615284/Captura_de_pantalla_2022-07-23_172659_hkqx9z.jpg'
        />
        <img
          style={styles.img}
          onClick={handleClick}
          className='imgCarousel'
          alt='You can even edit or add credit or debit cards in a very interactive and dynamic way.'
          src='https://res.cloudinary.com/chuguscloudinarypersonal/image/upload/v1658615285/Captura_de_pantalla_2022-07-23_172740_cgzild.jpg'
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