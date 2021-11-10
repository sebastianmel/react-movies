import React from 'react';
import Logo from '../components/Logo';
import Add from '../components/MoviesAdd';
import Navigation from '../components/Navigation';

const Ajout = () => {
    return (
            
        <div>
            <Logo/>
            <Navigation/>
           <h1> Ajout de films :</h1>
            <Add/>
        </div>
    );
};

export default Ajout;