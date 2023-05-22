import React, { useState, useRef, useEffect } from "react";
import "./colorpicker.css";
import { gsap } from "gsap";

const ColorPicker = ({ setTheme }) => {
  const [selectedButton, setSelectedButton] = useState(
    localStorage.getItem("theme") || "dark"
  );
  
  const colorRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(colorRef.current, { opacity: 0 }, {opacity: 1, duration: 1, delay: 1.5});
  }, []);


  const handleTheme = (e) => {
    const selectedTheme = e.target.value;
    e.preventDefault();
    setTheme(selectedTheme);
    setSelectedButton(selectedTheme);
    localStorage.setItem("theme", selectedTheme);
  };

  return (
    <div className="color-picker" ref={colorRef}>
      <div className="theme-switcher">
        <button
          className="btn-switch"
          aria-pressed={selectedButton === "dark"}
          value="dark"
          onClick={handleTheme}
        >
          Dark
        </button>
        <button
          className="btn-switch"
          aria-pressed={selectedButton === "ligth"}
          value="ligth"
          onClick={handleTheme}
        >
          Ligth
        </button>
      </div>
    </div>
  );
};

export default ColorPicker;
