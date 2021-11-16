import React from 'react';
import Films from '../components/Films';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';


const Home = () => {
    return (
        <div>
            <Logo/>
            <Navigation/>
            <h1>Les films :</h1>
            <br></br>
            <Films/>
            
        </div>
    );
};

export default Home;