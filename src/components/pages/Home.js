import React from 'react';
import Navigation from '../Navigation';

const Home = () => {
    return (
        <div className='home'>
            <Navigation/>
              <div className='homeContent'>
                <div className='content'>
                    <h1>Jean Scratch</h1>
                    <h2>Developeir Front-end</h2>
                    <div className='pdf'> 
                        <a href='./media/CV.pdf' target='blank'>Télecharger</a>                    
                    </div>
                </div>
              </div>
              
        </div>
    );
};

export default Home;