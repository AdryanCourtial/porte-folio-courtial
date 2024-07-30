import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
// import { SideBarre } from './components/SideBarre'
// import { ButtonSideBarre } from './components/ButtonSideBarre';
import { Headers } from './components/Header';
import { PageHome } from './components/PageHome';
import { PageCompetence } from './components/PageCompetence';
import { PageContact } from './components/PageContact';
// import { CirlceDecoration } from './components/CirlceDecoration'
import { useState } from 'react';

// Ici mes Variants pour les swap de fenettre 
// Un de gauche a droite et l'autre de droite a gauche

const pageVariantLeft = {
  hidden: {
    x: -2000,
  },
  visible: {
    x: 0,
    transition: {
      duration: 0.5,
      type: 'linear'
    }
  },
  exit: {
    x: 2000
  }
}

const pageVariantRight = {
  hidden: {
    x: 2000,
  },
  visible: {
    x: 0,
    transition: {
      duration: 0.5,
      type: 'linear'
    }
  },
  exit: {
    x: -2000
  }
}


export const tabPage = ['/', '/competence', '/contact']

const App = () => {
  return (
    <Router>
    <Headers />
    <main>
      <Routes>
        <Route path="/" Component={PageHome} />
        <Route path="/competence" element={<PageCompetence />} />
        <Route path="/contact" element={<PageContact />} />
      </Routes>
    </main>
  </Router>
  </div>
);
}

export default App;
