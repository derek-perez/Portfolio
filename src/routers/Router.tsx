import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { EnglishRouter } from './en';


const Router = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/*' element={<EnglishRouter />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;