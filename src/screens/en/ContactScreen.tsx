import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser';

import { FooterEN } from "../../components/FooterEN";
import { Navbar } from "../../components/Navbars/Navbar"
import { NavbarResponsive } from "../../components/Navbars/NavbarResponsive";


export const ContactScreen = () => {

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const regExp = /^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/i;

    const nombre = document.getElementById('nombre')! as HTMLInputElement;
    const presupuesto = document.getElementById('presupuesto')! as HTMLInputElement;
    const telefono = document.getElementById('telefono')! as HTMLInputElement;
    const email = document.getElementById('email')! as HTMLInputElement;
    const mensaje = document.getElementById('mensaje')! as HTMLInputElement;
    const proyecto = document.getElementById('proyecto')! as HTMLInputElement;

    if (nombre.value === '' ||
      presupuesto.value === 'Escoje tu presupuesto' ||
      telefono.value === '' ||
      email.value === '' ||
      mensaje.value === '' ||
      proyecto.value === 'Tipo de proyecto'
    ) {
      Swal.fire({
        icon: 'error',
        title: 'Hubo un error',
        text: 'Todos los campos se deben completar'
      })
    }

    if (email.value !== '') {
      if (!regExp.test(email.value)) {
        return Swal.fire({
          title: 'Error',
          text: 'Por favor, introduzca un correo válido',
          icon: 'error',
          confirmButtonText: 'Ok'
        })
      }
    }

    emailjs.sendForm('service_7u04kqd', 'template_snt82x8', document.getElementById('formContacto') as HTMLFormElement, '_moZ1HIC4CbJSNlO0')
      .then(() => {
        Swal.fire({
          title: '¡Listo!',
          text: '¡Listo! Se ha enviado exitósamente la solicitud',
          icon: 'success',
          confirmButtonText: 'Ok'
        })
      }, (err) => {
        console.log(JSON.stringify(err));
      });




  }

  return (
    <div style={styles.container}>
      <Navbar />
      <NavbarResponsive />

      <h2 style={{ textAlign: 'center' }}>
        Just fill out this form to contact me and be able to chat
      </h2>

      <form id="formContacto" onSubmit={handleSubmit} style={styles.form}>

        <div style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <div style={styles.divForm}>
            <div style={styles.divInput}>
              <label htmlFor="nombre" style={styles.label}>
                <i className="fa fa-user"></i> &nbsp; Name:
              </label>
              <input id='nombre' name='nombre' type='text' className="inputContainer" placeholder="Name" style={styles.input} required />
            </div>
            <div style={styles.divInput}>
              <label htmlFor="presupuesto" style={styles.label}>
                <i className="fa fa-money"></i> &nbsp; Budget: (USD)
              </label>
              <select id='presupuesto' name='presupuesto' className="inputContainer" style={styles.input} required>
                <option defaultValue='Presupuesto'>Choose your budget (USD)</option>
                <option value='-2500'>-$2500</option>
                <option value='5-10'>$5000 - $10,000</option>
                <option value='10-25'>$10,000 - $25,000</option>
                <option value='25-50'>$25,000 - $50,000</option>
                <option value='+50'>+$50,000</option>
              </select>
            </div>
            <div style={styles.divInput}>
              <label htmlFor="telefono" style={styles.label}>
                <i className="fa fa-phone"></i> &nbsp; Phone number:
              </label>
              <input id='telefono' name='telefono' type='tel' className="inputContainer" placeholder="+1 55 5555 5555" style={styles.input} required />
            </div>
            <div style={styles.divInput}>
              <label htmlFor="email" style={styles.label}>
                <i className="fa fa-envelope"></i> &nbsp; Email:
              </label>
              <input id='email' name='email' type='email' className="inputContainer" placeholder="example@domain.com" style={styles.input} required />
            </div>
          </div>

          <div style={styles.divForm}>
            <div style={styles.divInput}>
              <label htmlFor="proyecto" style={styles.label}>
                <i className="fa fa-object-ungroup"></i> &nbsp; Project type:
              </label>
              <select id="proyecto" name='proyecto' className="inputContainer" style={styles.input} required>
                <option defaultValue='proyecto'>Project type</option>
                <option value='sitio_web'>Website or Web Application</option>
                <option value='aplicacion_movil'>Mobile app</option>
                <option value='web_movil'>Web and Mobile Application</option>
                <option value='ia'>Artificial intelligence project</option>
              </select>
            </div>

            <div style={styles.divInput}>
              <label htmlFor="mensaje" style={styles.label}>
                <i className="fa fa-newspaper-o"></i> &nbsp; Message:
              </label>
              <textarea id="mensaje" name="mensaje" className="inputContainer" placeholder="Write your message" style={styles.textarea} required></textarea>
            </div>
          </div>
        </div>


        <button style={styles.button}>Send request</button>
      </form>

      <FooterEN />
    </div>
  )
}



const styles = {
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column' as 'column',
    alignItmes: 'cemter'
  },

  form: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column' as 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '25px'
  },
  divForm: {
    width: '50%',
    display: 'flex',
    flexDirection: 'column' as 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between'
  },
  divInput: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column' as 'column',
    alignItems: 'center',
    marginBottom: '25px'
  },
  label: {
    width: '50%',
    fontSize: '20px',
    marginBottom: '5px',
    textAlign: 'left' as 'left'
  },
  input: {
    width: '50%',
    padding: '5px',
    fontSize: '18px',
    borderRadius: '3px',
    backgroundColor: '#ACACAC',
    border: '2px solid gray'
  },
  textarea: {
    width: '50%',
    padding: '5px',
    fontSize: '16px',
    borderRadius: '3px',
    backgroundColor: '#ACACAC',
    border: '1px solid #ACACACac',
    minHeight: '200px',
    resize: 'none' as 'none'
  },

  button: {
    margin: '30px 0',
    padding: '10px',
    fontSize: '18px',
    borderRadius: '5px',
    backgroundColor: '#69BE28',
    border: 'none',
    cursor: 'pointer'
  }
}