import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
// import { SideBarre } from './components/SideBarre'
// import { ButtonSideBarre } from './components/ButtonSideBarre';
import { Headers } from './components/Header';
import { PageHome } from './components/PageHome';
import { PageCompetence } from './components/PageCompetence';
import { PageContact } from './components/PageContact';

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
);
}

export default App;
