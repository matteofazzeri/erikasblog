import React, { useState } from "react";

const ColorPickerButton = ({ editor }) => {
  const [color, setColor] = useState("#000000"); // Initial color is black

  const applyColor = (event) => {
    const newColor = event.target.value;
    setColor(newColor);
    editor.chain().focus().setColor(newColor).run(); // Apply the chosen color to the text
  };

  return (
    <input
      type="color"
      value={color}
      onChange={applyColor}
      className="bg-inherit m-[2px]"
    />
  );
};

export default ColorPickerButton;
