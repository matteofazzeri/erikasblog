import { useState } from "react";
import RichTextEditor from "./components/RichTextEditor";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="p-2 w-[600px]">
      <RichTextEditor />

      <div id="campo-di-prova"></div>
    </main>
  );
}

export default App;

