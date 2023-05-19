import "./App.css";
// import caricature  from './assets/caricature.png'
// import logoma from './assets/logomargb.png'
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'


function App() {
  return (
  <>
  <Header />
  <Navbar />
  <About />
  <Portfolio />
  <Experience />
  <Contact />
  <Footer />
  </>
  )
}

export default App;

