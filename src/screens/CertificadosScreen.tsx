import { useEffect } from "react";

import { NavbarColumn } from "../components/Navbars/NavbarColumn"
import { Part1 } from "../components/Certificados/Part1"
import { CertificadoComponent } from "../components/Certificados/CertificadoComponent"

import * as data from '../dataCertificados.json';


export const CertificadosScreen = () => {

  const dataArray = Object.values(data);

  useEffect(() => {
    const section = document.querySelectorAll('.section') as NodeListOf<HTMLElement>;
    const navLinks = document.querySelectorAll('.columnNavLinks');

    document.addEventListener('scroll', () => {

      section.forEach(sec => {
        sec.classList.remove('sectionActive');
        let top = window.scrollY;
        let offset = sec.offsetTop - 350;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');


        if (top >= offset && top < offset + height) {
          window.history.pushState({}, "", `#${id}`)
          sec.classList.add('sectionActive')

          navLinks.forEach(links => {
            links.classList.remove('activeNavColumn');

            document.querySelector(`#navbarColumnCertificados > div > a[href*=${id}]`)?.classList.remove('inactiveNavColumn');
            document.querySelector(`#navbarColumnCertificados > div > a[href*=${id}]`)?.classList.add('activeNavColumn');
          })

        } else if (top! >= offset && top > offset + height) {
          sec.classList.remove('sectionActive');

          navLinks.forEach(links => {
            links.classList.add('inactiveNavColumn');
          })
        }
      })
    })
  }, []);

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
