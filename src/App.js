import Home from "./components/Home";
import NavBar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './components/About'
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path='/' element={
            <div className="App">
              <Home/>
            </div>
          } />
          <Route path='/about' element={<About/>} />
          <Route path='/projects' element={<Projects/>} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
      </BrowserRouter>
      <Footer/>
      </div>
  );
}

export default App;
