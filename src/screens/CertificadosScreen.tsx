import { NavbarColumn } from "../components/Navbars/NavbarColumn"
import { Part1, CertificadoComponent } from "../components/Certificados/"

import * as data from '../dataCertificados.json';
import { useScroll } from "../hooks/useScroll";
import { Footer } from "../components/Footer";


export const CertificadosScreen = () => {

  useScroll();
  
  const dataArray = Object.values(data);


  return (
    <div style={{
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end'
    }}>
      <NavbarColumn whatScreen="CertificadosScreen" />

      <Part1 />

      {
        dataArray.map(certificado => {
          if (certificado.id === undefined) return null;

          return (
            <CertificadoComponent
              key={certificado.id}
              id={certificado.id}
              whatIs={certificado.whatIs}
              img={certificado.img}
              list={certificado.list}
            />
          )
        })
      }

      <Footer />
    </div>
  )
}
