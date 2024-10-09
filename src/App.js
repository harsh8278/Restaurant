import './App.css';
import "./Css/Style.css"
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import About from './Component/About';
import Menu from './Component/Menu';
import Prodct from './Component/Prodct';
import Review from './Component/Review';
import Contact from './Component/Contact';
import Blog from './Component/Blog';
import Footer from './Component/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Menu />
      <Prodct />
      <Review />
      <Contact />
      <Blog />
      <Footer />
    </>
  );
}

export default App;
