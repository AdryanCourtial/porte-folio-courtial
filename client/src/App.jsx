import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import { Headers } from './components/Header';
import { PageHome } from './components/PageHome';
import { PageCompetence } from './components/PageCompetence';
import { PageContact } from './components/PageContact';
import { useState } from 'react';
import { PageExperiences } from './components/PageExperience';
import { CircleDecoration } from './components/CircleDecoration';

// Ici mes Variants pour les swap de fenettre 
// Un de gauche a droite et l'autre de droite a gauche

const pageVariantLeft = {
  hidden: {
    x: -2000,
  },
  visible: {
    x: 0,
    transition: {
      duration: 0.3,
      type: 'linear'
    }
  },
  leave: {
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
      duration: 0.3,
      type: 'linear'
    }
  },
  leave: {
    x: -2000
  }
}


export const tabPage = ['/', '/competence', '/experiences',  '/contact']



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
      <div className='flex flex-col h-screen'>
        <Headers OnChooseVariant={ChooseVariants}  className="flex-none"/>
        <main className={`flex-grow overflow-auto max-h-[92vh]`}>
          <Routes>
            <Route path="/" element={<PageHome animation={variant}/>} /> {/* Je lui envoie en fonction de ce que j'ai recup dans le Header le dans le sens convenue de transition */}
            <Route path="/competence" element={<PageCompetence animation={variant}/>} />
            <Route path="/experiences" element={<PageExperiences animation={variant}/>} />
            <Route path="/contact" element={<PageContact animation={variant}/>} />
          </Routes>
        </main>
      </div>
      <CircleDecoration size={'20vh'} top={'20vh'} left={'10vw'}/>
      <CircleDecoration size={'15vh'} top={'32vh'} left={'45vw'}/>
      <CircleDecoration size={'15vh'} top={'86vh'} left={'17vw'}/>
      <CircleDecoration size={'60vh'} top={'-15vh'} left={'80vw'}/>
      <CircleDecoration size={'50vh'} top={'56vh'} left={'63vw'}/>
  </Router>
);
}


export default App;