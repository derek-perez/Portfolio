import { NavbarColumn } from "../components/Navbars/NavbarColumn"
import { useScroll } from "../hooks/useScroll";

import * as data from '../dataCertificadosEN.json';
import { Part1EN, CertificadoComponentEN } from "../components/Certificados/";

import { FooterEN } from "../components/FooterEN";

export const CertificatesScreen = () => {

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

      <Part1EN />

      {
        dataArray.map(certificado => {
          if (certificado.id === undefined) return null;

          return (
            <CertificadoComponentEN
              key={certificado.id}
              id={certificado.id}
              whatIs={certificado.whatIs}
              img={certificado.img}
              list={certificado.list}
            />
          )
        })
      }

      <FooterEN />
    </div>
  )
}