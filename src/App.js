import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Knowledges from './components/pages/Knowledges';
import Portfolio from './components/pages/Portfolio';
import Contact from './components/pages/Contact';
import NotFound from './components/pages/NotFound';
import Navigation from './components/Navigation';
import Home from './components/pages/Home';

const App = () => {
  return (
    <>
   <Router>
   <Routes>
    <Route  path="/" element={<Navigation />}/>
    <Route  path="/contact" element={<Contact />}/>
    <Route  path="/Knowledges" element={<Knowledges />}/>
    <Route  path="/Portfolio" element={<Portfolio />}/>
    <Route  path="/NotFound" element={<NotFound />}/>
    <Route  path="/Home"     element={<Home />}/>
    
    </Routes>
   </Router>
   
    </>
    
  );

};

export default App;
