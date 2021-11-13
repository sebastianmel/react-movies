import React from 'react';
import { NavLink } from "react-router-dom";


// Navigation
const Navigation = () => {
    return (
        <div className="navigation">
            <NavLink exact to="/" activeClassName="nav-active">Acceuil</NavLink>
            <NavLink exact to="/add-movies" activeClassName="nav-active">Ajouter</NavLink>
            <NavLink exact to="/a-propos" activeClassName="nav-active">Le site</NavLink>
            
        </div>
    );
};

export default Navigation;