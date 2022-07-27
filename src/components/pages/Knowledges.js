import React from 'react';
import Experience from '../knowledges/Experience';
import Hobbies from '../knowledges/Hobbies';
import Languages from '../knowledges/Languages';
import OrtSkills from '../knowledges/OrtSkills';
import Navigation from '../Navigation';



const knowledges = () => {
    return (
        <div className='knowledges'>
            <Navigation/>
               <div className='knowledgesContent'>
                <Languages />
                <Experience />
                <OrtSkills />
                <Hobbies />


               </div>
                    
               
           
        </div>
    );
};

export default knowledges;