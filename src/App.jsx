import { useEffect, useState } from "react";

import "./App.css";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

function App() {
  const [theme, setTheme] = useState("regular");

  useEffect(() => {
    document.body.setAttribute("data-selected-theme", theme);
  }, [theme]);

  return (
    <>
      <Header />
      <Navbar />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
      <Footer setTheme={setTheme} />
    </>
  );
}

export default App;
