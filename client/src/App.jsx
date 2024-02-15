import { useState } from 'react'
import RichTextEditor from './components/RichTextEditor'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='p-2'>
      <RichTextEditor />
    </main>
  )
}

export default App
