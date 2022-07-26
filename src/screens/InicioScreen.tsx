import { Part1, Part2, Part3, Part4, Part5 } from "../components/Inicio"

import { NavbarColumn } from "../components/Navbars/NavbarColumn"
import { useScroll } from "../hooks/useScroll"


export const InicioScreen = () => {

  useScroll();

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