import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
    return (
       <div className='notFound'>
            <di className='notFoundContent'>
                <h3>Désolé cette page n'existe pas!</h3>
                <NavLink exact to="/">
                    <i className='fas fa-home'></i>
                    <span>Accueil</span>
                </NavLink>
            </di>

       </div>
    );
};

export default NotFound;