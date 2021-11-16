import React from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';

const About = () => {
    return (
        <div>
            <Logo/>
            <Navigation/>
           
            <p className="wit">
            Film <br></br>
La structure d’un film au sein du serveur REST est composée des champs suivants :<br></br>

Un identifiant (automatiquement généré par le serveur lors d’un ajout)<br></br>
Un titre<br></br>
Une date de sortie<br></br>
Une liste de catégories de films<br></br>
Une description<br></br>
Une photo de l’affiche du film (optionnel)<br></br>
Une photo d’arrière plan (optionnel)<br></br>
Une liste d’acteurs avec leur photo, nom et rôle<br></br>
Une liste de films reliés avec leur titre, affiche et date de sortie<br></br>

Pages<br></br>
L’application devra comporter au minimum les pages suivantes :<br></br>

Page listant les films de la bibliothèque, avec un formulaire offrant des possibilités de filtrage (plus d’infos ci-après)<br></br>
Page affichant le détail d’un film<br></br>
Page d’ajout d’une nouveau film à la bibliothèque, utilisant les informations de TheMovieDatabase<br></br>
Page de modification d’un film existant via un formulaire d’édition<br></br><br></br>
<a href="https://docs.google.com/document/d/1zOyn-BnvNxvREA2rXzJkAWb-wpkR8pDrlYlN5_ghRe4/edit#heading=h.6x6ue6j8nkua" target="blank"> Brief_MoviesBoard </a>

            </p>

        </div>
    );
};

export default About;