import React from 'react';
import Films from '../components/Films';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer'

const Home = () => {
    return (
        <div>
            <Logo/>
            <Navigation/>
            <h1>Les films :</h1>
            <br></br>
            <Films/>
            <Footer/>
        </div>
    );
};

export default Home;