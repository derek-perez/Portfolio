import { useEffect } from "react"
import { Part1 } from "../components/Inicio/Part1"
import { Part2 } from "../components/Inicio/Part2"
import { Part3 } from "../components/Inicio/Part3"
import { Part4 } from "../components/Inicio/Part4"
import { Part5 } from "../components/Inicio/Part5"
import { NavbarColumn } from "../components/Navbars/NavbarColumn"


export const InicioScreen = () => {

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

            document.querySelector(`#navbarColumn > div > a[href*=${id}]`)?.classList.remove('inactiveNavColumn');
            document.querySelector(`#navbarColumn > div > a[href*=${id}]`)?.classList.add('activeNavColumn');
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
      <NavbarColumn whatScreen="InicioScreen" />

      <>
        <Part1 />
        <Part2 />
        <Part3 />
        <Part4 />
        <Part5 />
      </>

    </div>
  )
}