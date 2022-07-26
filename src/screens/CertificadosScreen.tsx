import { NavbarColumn } from "../components/Navbars/NavbarColumn"
import { Part1 } from "../components/Certificados/Part1"
import { CertificadoComponent } from "../components/Certificados/CertificadoComponent"

import * as data from '../dataCertificados.json';
import { useScroll } from "../hooks/useScroll";


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
    </div>
  )
}
