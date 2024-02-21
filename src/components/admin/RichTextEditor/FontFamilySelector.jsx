import React from "react";

const FontFamilySelector = ({ editor }) => {
  const currentFontFamily = editor.getAttributes("textStyle").fontFamily;

  return (
    <select
      className="rounded-md border-solid border-[1px] m-[2px]"
      onChange={(e) => {
        const fontFamily = e.target.value;
        editor.chain().focus().setFontFamily(fontFamily).run();
      }}
      value={currentFontFamily}
    >
      <option value="">Font family</option>
      <option value="Arial">Arial</option>
      <option value="Verdana">Verdana</option>
      <option value="Times New Roman">Times New Roman</option>
      {/* Add more font family options as needed */}
    </select>
  );
};

export default FontFamilySelector;
