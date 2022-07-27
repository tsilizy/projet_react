import React from 'react';
import {NavLink} from 'react-router-dom';
const Navigation = () => {
    return (
        <div className='sidebar'>
            <div className='id'>
                <div className='idContent'>
                    <img src="./media/billGates.jpg" alt="profil-pic"/>
                        <h3>Tsilizy Tanindraza Aimé</h3>
                </div>
            </div>
           <di className="navigation">
              <ul>
                <li>
                <NavLink exact to="/home" activeClassName="navActive">
                    <i className='fas fa-mountain'></i>
                    <span>Accueil</span>
                </NavLink>
                </li>
                <li>
                <NavLink exact to="/knowledges" activeClassName="navActive">
                    <i className='fas fa-home'></i>
                    <span>Compétences</span>
                </NavLink>
                </li>
                <li>
                <NavLink exact to="/portfolio" activeClassName="navActive">
                    <i className='fas fa-images'></i>
                    <span>Portfolio</span>
                </NavLink>
                </li>
                <li>
                <NavLink exact to="/contact" activeClassName="navActive">
                    <i className='fas fa-address-book'></i>
                    <span>Contact</span>
                </NavLink>
                </li>
            
                
              </ul>  

           </di>

           <div className='socialNetwork'>

            <ul>
                <li> 
                    <a href='https://www.google.com' target="blank" rel="noopener noreferrer"><i className='fab fa-linkedin'></i></a>
                </li>
                <li> 
                    <a href='https://www.google.com' target="blank" rel="noopener noreferrer"><i className='fab fa-github'></i></a>
                </li>
                <li> 
                    <a href='https://www.google.com' target="blank" rel="noopener noreferrer"><i className='fab fa-twitter'></i></a>
                </li>
                <li> 
                    <a href='https://www.google.com' target="blank" rel="noopener noreferrer"><i className='fab fa-codepen'></i></a>
                </li>
            </ul>
            <div className='signature'>
                <p> FromScrat - 2022</p>

            </div>
           </div>
        </div>
    );
};

export default Navigation;