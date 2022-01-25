import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Pages/home';
import Contatos from './Pages/contato';
import Carousel from './components/Carroucel';

const MainRoutes = () => {
    return(
        <Routes>
            <Route
               path="/"
                element={[<Carousel />, <HomePage />]}
                
            />
            
            <Route
                path="/contato"
                element={
                    <div className='row row-cols-1 row-cols-md-2 g-1 mt-2'>
                        <Contatos />
                    </div>
                }
            />
        </Routes>
    )
}

export default MainRoutes;
