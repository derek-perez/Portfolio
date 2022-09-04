

export const Part2 = () => {
  return (
    <div id='Skills_and_Capabilities' className="section" style={styles.container}>
      <div
        className='someSkill'
        style={styles.skillContainer}
      >
        <img
          style={styles.iconSkill}
          src='https://res.cloudinary.com/chugus/image/upload/v1658190023/Web_pwhrgs.svg'
        />
        <h3 style={styles.titleSkill}>Backend/Frontend <br />Developer</h3>

        <div style={styles.partSkill}>
          <b>Tools/Languages I use:</b>
          <ul>
            <li style={styles.itemListSkill}>Heroku</li>
            <li style={styles.itemListSkill}>Postman</li>
            <li style={styles.itemListSkill}>MongoDB Compass</li>
            <li style={styles.itemListSkill}>Command terminal</li>
            <li style={styles.itemListSkill}>Bootstrap (just sometimes)</li>
            <li style={styles.itemListSkill}>SocketIO (if required)</li>
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
        <h3 style={styles.titleSkill}>Mobile <br /> Developer</h3>

        <b style={{ width: '80%', margin: '15px 0 25px 0', textAlign: 'center' }}>At the moment, I can only develop apps for Android</b>

        <div style={styles.partSkill}>
          <b>Tools/Languages I use:</b>
          <ul>
            <li style={styles.itemListSkill}>Command terminal</li>
            <li style={styles.itemListSkill}>Android Emulator</li>
            <li style={styles.itemListSkill}>JavaScript/TypeScript</li>
            <li style={styles.itemListSkill}>React Native CLI (not Expo)</li>
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
        <h3 style={styles.titleSkill}>Web & Móvil <br /> Designer</h3>

        <div style={styles.partSkill}>
          <b>What I design:</b>
          <p style={{ marginTop: '2px', marginBottom: '25px' }}>UI, UX, websites & mobile applications</p>

          <b>Tools I use:</b>
          <ul>
            <li style={styles.itemListSkill}>Figma</li>
            <li style={styles.itemListSkill}>Concepts</li>
            <li style={styles.itemListSkill}>Pencil & paper</li>
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
        <h3 style={styles.titleSkill}>Machine/Deep Learning</h3>

        <div style={styles.partSkill}>
          <b>Tools I use:</b>
          <ul style={{ padding: 0 }}>
            <li style={{ listStyle: 'none', fontWeight: 'bold' }}>TensorFlow</li>
            <ul>
              <li>Keras</li>
              <li>Numpy</li>
              <li>Pandas</li>
              <li>Scikit-Learn</li>
            </ul>
          </ul>

          <b>I develop models for:</b>
          <ul>
            <li style={styles.itemListSkill}>Regression</li>
            <li style={styles.itemListSkill}>Classification</li>
            <li style={styles.itemListSkill}>Computer Vision</li>
            <li style={styles.itemListSkill}>Time series problems</li>
            <li style={styles.itemListSkill}>Natural Language processing (NLP)</li>
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