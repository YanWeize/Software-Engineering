import React from 'react';
import { Route, Routes} from 'react-router-dom';
//import Admin from './container/Clients';
import HomePage from './container/home/HomePage.js';



export default () => (

<Routes>
    <Route path='/' exact element={<HomePage />} />
   
</Routes>
   
);