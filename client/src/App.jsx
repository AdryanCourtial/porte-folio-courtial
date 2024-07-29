import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
// import { SideBarre } from './components/SideBarre'
// import { ButtonSideBarre } from './components/ButtonSideBarre';
import { Headers } from './components/Header';
import { PageHome } from './components/PageHome';
import { PageCompetence } from './components/PageCompetence';
import { PageContact } from './components/PageContact';
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
  const [variant, setVariant] = useState(pageVariantLeft)

  const ChooseVariants = (actualPage, nextPage) => {
    if (nextPage > actualPage) {
      setVariant(pageVariantRight)
    } else if (nextPage < actualPage){
      setVariant(pageVariantLeft)
    }
  }


  return (
    <Router>
    <Headers OnChooseVariant={ChooseVariants}/> { /* Mon Header me renvoie si je clique sur un bouton : 1 l'index de ma route actuelle 2 L'index de la route ou je vais */}
    <main>
      <Routes>
        <Route path="/" element={<PageHome animation={variant}/>} /> {/* Je lui envoie en fonction de ce que j'ai recup dans le Header le dans le sens convenue de transition */}
        <Route path="/competence" element={<PageCompetence animation={variant}/>} />
        <Route path="/contact" element={<PageContact animation={variant}/>} />
      </Routes>
    </main>
  </Router>
);
}

export default App;
