export function convertToJSX(htmlString) {
  // Regular expression to match inline style attributes in HTML
  const styleRegex = /style="(.*?)"/g;

  // Replace inline style attributes with JSX style objects
  const jsxString = htmlString.replace(styleRegex, (match, styleAttribute) => {
    // Extract CSS properties from inline style attribute
    const styles = styleAttribute.split(";").reduce((acc, style) => {
      const [property, value] = style.split(":").map((s) => s.trim());
      if (property && value) {
        // Convert font-size to fontSize
        const propName = property.toLowerCase() === 'font-size' ? 'fontSize' : property;
        acc[propName] = value;
      }
      return acc;
    }, {});

    // Convert CSS properties to JSX style object
    const jsxStyleString = Object.keys(styles)
      .map((property) => `${property}: '${styles[property]}'`)
      .join(", ");
    return `style={{ ${jsxStyleString} }}`;
  });

  return jsxString;
}

export const setLink = (editor) => {
  const previousUrl = editor.getAttributes("link").href;
  let url = window.prompt("URL", previousUrl);
  
  // Cancelled
  if (url === null) {
    return;
  }
  
  // Empty
  if (url === "") {
    editor.chain().focus().extendMarkRange("link").unsetLink().run();
    return;
  }
  
  // Check if the URL starts with "http://" or "https://"
  if (!/^https?:\/\//i.test(url)) {
    // If not, prepend "https://"
    url = "https://" + url;
  }

  // Update link
  editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
};

export default setLink;
