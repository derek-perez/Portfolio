

export const Part2 = () => {
  return (
    <div id='skills' className="section" style={styles.container}>
      <div
        className='someSkill'
        style={styles.skillContainer}
      >
        <img
          style={styles.iconSkill}
          src='https://res.cloudinary.com/chugus/image/upload/v1658190023/Web_pwhrgs.svg'
        />
        <h3 style={styles.titleSkill}>Desarrollador <br /> Backend/Frontend</h3>

        <div style={styles.partSkill}>
          <b>Herramientas/Lenguajes que utilizo:</b>
          <ul>
            <li style={styles.itemListSkill}>Heroku</li>
            <li style={styles.itemListSkill}>Postman</li>
            <li style={styles.itemListSkill}>Terminal</li>
            <li style={styles.itemListSkill}>MongoDB Compass</li>
            <li style={styles.itemListSkill}>Bootstrap (algunas veces)</li>
            <li style={styles.itemListSkill}>SocketIO (si es necesario)</li>
            <li style={styles.itemListSkill}>HTML/CSS/JavaScript/TypeScript</li>
            <li style={styles.itemListSkill}>MongoDB/Express/ReactJS/NodeJS (MERN)</li>
          </ul>
        </div>
      </div>
      <div
        className='someSkill'
        style={styles.skillContainer}
      >
        <img
          style={styles.iconSkill}
          src='https://res.cloudinary.com/chugus/image/upload/v1658190023/Mobile_rcsnlb.svg'
        />
        <h3 style={styles.titleSkill}>Desarrollador <br /> Móvil</h3>

        <b style={{ width: '80%', margin: '15px 0 25px 0', textAlign: 'center' }}>Por el momento, solo puedo desarrollar aplicaciones para Android</b>

        <div style={styles.partSkill}>
          <b>Herramientas/Lenguajes que utilizo:</b>
          <ul>
            <li style={styles.itemListSkill}>Terminal</li>
            <li style={styles.itemListSkill}>Android Emulator</li>
            <li style={styles.itemListSkill}>JavaScript/TypeScript</li>
            <li style={styles.itemListSkill}>React Native CLI (no Expo)</li>
          </ul>
        </div>
      </div>
      <div
        className='someSkill'
        style={styles.skillContainer}
      >
        <img
          style={styles.iconSkill}
          src='https://res.cloudinary.com/chugus/image/upload/v1658190023/Design_m5qkm4.svg'
        />
        <h3 style={styles.titleSkill}>Diseñador <br /> Web & Móvil</h3>

        <div style={styles.partSkill}>
          <b>Lo que desarrollo:</b>
          <p style={{ marginTop: '2px', marginBottom: '25px' }}>UI, UX, Aplicaciones Web & Móvil</p>

          <b>Herrmientas que utilizo:</b>
          <ul>
            <li style={styles.itemListSkill}>Figma</li>
            <li style={styles.itemListSkill}>Concepts</li>
            <li style={styles.itemListSkill}>Lápiz y papel</li>
          </ul>
        </div>
      </div>
      <div
        id="dpSkill"
        className='someSkill'
        style={styles.skillContainer}
      >
        <img
          style={styles.iconSkill}
          src='https://res.cloudinary.com/chugus/image/upload/v1658190023/NN_eny7wg.svg'
        />
        <h3 style={styles.titleSkill}>Ingeniero de <br /> Deep Learning</h3>

        <div style={styles.partSkill}>
          <b>Lo que desarrollo:</b>
          <ul>
            <li style={styles.itemListSkill}>Machine/Deep Learning</li>
            <li style={styles.itemListSkill}>Redes Neuronales para resolver problemas de regresión</li>
            <li style={styles.itemListSkill}>Redes Neuronales para resolver problemas de clasificación</li>
            <li style={styles.itemListSkill}>Redes Neuronales Convolucionales</li>
            <li style={styles.itemListSkill}>Redes Neuronales para el NLP</li>
          </ul>
        </div>
      </div>
    </div>
  )
}



const styles = {
  container: {
    width: '95%',
    display: 'grid',
    gridTemplateColumns: '50% 50%',
    gridTemplateRows: 'auto auto',
    alignItems: 'center',
    justifyItems: 'center',
    gap: '10px 10px',
    marginTop: '150px',
    paddingTop: '35px',
    backgroundColor: '#69BE28',
    backgroundClip: 'content-box',
  },
  skillContainer: {
    width: '100%',
    minHeight: '450px',
    display: 'flex',
    flexDirection: 'column' as 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#002244'
  },

  iconSkill: {
    height: '50px',
    minWidth: '60px'
  },
  titleSkill: {
    textAlign: 'center' as 'center',
    letterSpacing: '1px'
  },
  partSkill: {
    width: '75%',
    display: 'flex',
    flexDirection: 'column' as 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemListSkill: {
    marginBottom: '3px',
    fontFamily: 'Roboto Mono',
    fontWeight: 'bold'
  },
}