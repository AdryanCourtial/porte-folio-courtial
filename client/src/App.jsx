import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
// import { SideBarre } from './components/SideBarre'
// import { ButtonSideBarre } from './components/ButtonSideBarre';
import { Headers } from './components/Header';
import { PageHome } from './components/PageHome';
import { PageCompetence } from './components/PageCompetence';
import { PageContact } from './components/PageContact';
// import { CirlceDecoration } from './components/CirlceDecoration'

const App = () => {
  return ( <div className='flex flex-col h-[100vh] w-[100vw] overflow-x-hidden'>
    <Router>
    <Headers/>
    <main className='flex-1'>
      <Routes>
        <Route path="/" Component={PageHome} />
        <Route path="/competences" element={<PageCompetence />} />
        <Route path="/contact" element={<PageContact />} />
      </Routes>
    </main>
  </Router>
  </div>
);
}

export default App;
