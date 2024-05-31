import Nav from "./components/Navbar/Nav";
import Home from "./components/Home/Home"
import Industries from "./components/Industries/Industries"
import About from "./components/About/About";
import Training from "./components/Training/Training"
import Services from "./components/Serv/Services"
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
const App = () => {
  return (
    
   <>
   <Nav />
   <Home />
   <Industries/>
   <About/>
   <Training/>
   <Services/>
   <Contact/>
   <Footer/>
   </>
    
  );
};

export default App