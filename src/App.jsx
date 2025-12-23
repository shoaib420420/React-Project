import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contacts from './pages/Contacts';
import Hotel from './pages/Hotel';
import Gallery from './pages/Gallery';
import News from './pages/News';
import Navbar from './components/Navbar';



function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='/hotel' element={<Hotel />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/news' element={<News />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
