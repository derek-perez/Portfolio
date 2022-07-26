import { ModalImg } from "../components/ModalImg";

import { NavbarColumn } from "../components/Navbars/NavbarColumn"
import { Part1 } from "../components/Proyectos/Part1"

import { Proyecto1, Proyecto2, Proyecto3, Proyecto4, Proyecto5, Proyecto6 } from "../components/Proyectos/"
import { useScroll } from "../hooks/useScroll";


export const ProyectosScreen = () => {

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
      </>

      <ModalImg  />
    </div>
  )
}