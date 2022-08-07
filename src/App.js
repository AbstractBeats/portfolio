import { Container } from 'react-bootstrap';
import './App.css';
import Navbarz from './components/Nav';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import About from './pages/About';
import Ports from './pages/Portfolio';
import Home from './pages/Home.js';
import Contact from './pages/Contact';

function App() {
  return (
      <Router>
      <Container className="p-0"fluid={true}>
      <Navbarz/>
      <Home/>
      <Routes>
        <Route path = "/" exact component={Home}></Route>
        <Route path = "/about" exact component={About}></Route>
        <Route path = "/portfolio" exact component={Ports}></Route>
        <Route path = "/contact" exact component={Contact}></Route>
      </Routes>
      </Container>
    </Router>
  );
}

export default App;
