import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { InicioScreen, CertificadosScreen, ContactoScreen, ProyectosScreen } from '../screens/';


const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<InicioScreen />} />
                <Route path='/proyectos' element={<ProyectosScreen />} />
                <Route path='/certificados' element={<CertificadosScreen />} />
                <Route path='contacto' element={<ContactoScreen />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;