import React, { useState } from "react";
import "./colorpicker.css";
const ColorPicker = ({ setTheme }) => {
  const [selectedButton, setSelectedButton] = useState(
    localStorage.getItem("theme") || "dark"
  );

  const handleTheme = (e) => {
    const selectedTheme = e.target.value;
    e.preventDefault();
    setTheme(selectedTheme);
    setSelectedButton(selectedTheme);
    localStorage.setItem("theme", selectedTheme);
  };

  return (
    <div className="color-picker">
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
