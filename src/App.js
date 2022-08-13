import { Container } from 'react-bootstrap';
import './App.css';
import Navbarz from './components/Nav';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import About from './pages/About';
import Ports from './pages/Portfolio';
import Home from './pages/Home.js';
import Contact from './pages/Contact';
import Footer from './components/Footer';

function App() {
  return (
      <div><Router>
      <Container className="p-0"fluid={true}>
      <Navbarz/>
      <Routes>
        <Route path = "/" element={<Home/>}></Route>
        <Route path = "/about" element={<About/>}></Route>
        <Route path = "/portfolio" exact component={Ports}></Route>
        <Route path = "/contact" exact component={Contact}></Route>
      </Routes>
      </Container>
    </Router>
    <Footer/>
    </div>
  );
}

export default App;
