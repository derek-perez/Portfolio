import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { EnglishRouter } from './en';
import { SpanishRouter } from './es';


const Router = () => {

    useEffect(() => {
        const detectLng = () => {
            const ln = window.navigator.language;
            const currentPage = window.location.pathname;
            const lsLNG = localStorage.getItem('lng');

            if (lsLNG) {
                if (lsLNG === 'es' && !currentPage.includes('/es/')) {
                    window.location.href = '/es/'
                } else if (lsLNG === 'en' && !currentPage.includes('/en/')) {
                    window.location.href = '/en/'
                }
            } else {
                if ((ln === 'es-ES' || ln === 'es-US') && !currentPage.includes('/es/')) {
                    localStorage.setItem('lng', 'es');
                    window.location.href = '/es/'
                } else if ((ln === 'en-US' || ln === 'en-EN') && !currentPage.includes('/en/')) {
                    localStorage.setItem('lng', 'en');
                    window.location.href = '/en/'
                } else {
                    localStorage.setItem('lng', 'en');
                    window.location.href = '/en/'
                }
            }

        }

        return () => {
            detectLng();
        }
    }, [])

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/es/*' element={<SpanishRouter />} />
                <Route path='/en/*' element={<EnglishRouter />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;