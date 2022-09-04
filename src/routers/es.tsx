import { Routes, Route } from 'react-router-dom';

import { InicioScreen, CertificadosScreen, ContactoScreen, ProyectosScreen } from '../screens/';


export const SpanishRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<InicioScreen />} />
            <Route path='proyectos' element={<ProyectosScreen />} />
            <Route path='certificados' element={<CertificadosScreen />} />
            <Route path='contacto' element={<ContactoScreen />} />
        </Routes>
    )
}
