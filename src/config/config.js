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
        let propName;
        switch (property.toLowerCase()) {
          case "font-size":
            propName = "fontSize";
            break;
          case "font-family":
            propName = "fontFamily";
            break;
          default:
            propName = property;
            break;
        }
        //const propName = property.toLowerCase() === "font-size" ? "fontSize" : property;
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

// Helper function to check if a string is in 'dd/mm/yyyy' format
function isDate(dateString) {
  const regex = /^\d{2}\/\d{2}\/\d{4}$/;
  return regex.test(dateString);
}

export function orderByProperty(array, prop) {
  // Check if the array is already sorted by the given property
  const isSorted = array.every((item, index, arr) => {
    if (index === 0) return true;
    const prevValue = arr[index - 1][prop];
    const currValue = item[prop];
    if (isDate(prevValue) && isDate(currValue)) {
      return (
        new Date(prevValue.split("/").reverse().join("-")) <=
        new Date(currValue.split("/").reverse().join("-"))
      );
    } else {
      return prevValue <= currValue;
    }
  });

  // If already sorted, reverse the array
  if (isSorted) {
    return array.slice().reverse();
  }

  // Otherwise, sort the array by the given property
  return array.slice().sort((a, b) => {
    const valueA = isDate(a[prop])
      ? new Date(a[prop].split("/").reverse().join("-"))
      : a[prop];
    const valueB = isDate(b[prop])
      ? new Date(b[prop].split("/").reverse().join("-"))
      : b[prop];
    if (isDate(valueA) && isDate(valueB)) {
      return valueA - valueB;
    } else {
      return valueA < valueB ? -1 : valueA > valueB ? 1 : 0;
    }
  });
}
