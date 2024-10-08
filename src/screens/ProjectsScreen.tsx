import { useScroll } from "../hooks/useScroll";

import { NavbarColumn } from "../components/Navbars/NavbarColumn"
import { Part1, Proyecto1, Proyecto2, Proyecto3, Proyecto4, Proyecto5, Proyecto6, Proyecto7, Proyecto8 } from "../components/Proyectos"

import { ModalImg } from "../components/ModalImg";
import { FooterEN } from "../components/FooterEN";



export const ProjectsScreen = () => {

  useScroll();

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
        <Proyecto7 />
        <Proyecto8 />
      </>

      <ModalImg  />

      <FooterEN />
    </div>
  )
}