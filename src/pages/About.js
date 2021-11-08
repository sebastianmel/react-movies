import React from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';

const About = () => {
    return (
        <div>
            <Logo/>
            <Navigation/>
            <p>
            Le streaming est utilisé pour visionner ou écouter des contenus en ligne. Ce protocole permet la lecture instantanée de
             vidéos ou de musiques, directement dans le navigateur web. ... Le streaming permet ainsi simplement de regarder des vidéos
              ou d'écouter de la musique sur Internet, sans avoir à télécharger de fichier.
            </p>

        </div>
    );
};

export default About;