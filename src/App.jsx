import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Navbar from './components/navbar/Navbar';
import Contact from "./components/contact/Contact";
import About from "./components/about/About";
import Footer from './components/footer/Footer';
import ScrollToTop from "./components/scrollTop";
const App = () => {
  return (
    <div>
      
      <BrowserRouter>
      <ScrollToTop/>
      <Navbar/>
      <Routes>
        <Route path = "/" element= {<Home/>}/>
        <Route path = "/About" element= {<About/>}/>
        <Route path = "/Contact" element= {<Contact/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
   
    </div>
   
  )
}

export default App;