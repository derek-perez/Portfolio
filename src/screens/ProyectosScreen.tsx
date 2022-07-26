import { useEffect } from "react";
import { ModalImg } from "../components/ModalImg";

import { NavbarColumn } from "../components/Navbars/NavbarColumn"
import { Part1 } from "../components/Proyectos/Part1"

import { Proyecto1 } from "../components/Proyectos/Proyecto1"
import { Proyecto2 } from "../components/Proyectos/Proyecto2";
import { Proyecto3 } from "../components/Proyectos/Proyecto3";
import { Proyecto4 } from "../components/Proyectos/Proyecto4";
import { Proyecto5 } from "../components/Proyectos/Proyecto5";
import { Proyecto6 } from "../components/Proyectos/Proyecto6";


export const ProyectosScreen = () => {

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

            document.querySelector(`#navbarColumnProyectos > div > a[href*=${id}]`)?.classList.remove('inactiveNavColumn');
            document.querySelector(`#navbarColumnProyectos > div > a[href*=${id}]`)?.classList.add('activeNavColumn');
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
      alignItems: 'flex-end',
      minHeight: '300vh'
    }}>
      <NavbarColumn whatScreen="ProyectosScreens" />

      <>
        <Part1 />
        <Proyecto1 />
        <Proyecto2 />
        <Proyecto3 />
        <Proyecto4 />
        <Proyecto5 />
        <Proyecto6 />
      </>

      <ModalImg  />
    </div>
  )
}