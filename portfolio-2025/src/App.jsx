import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import './Aboutme.css'
import Portfolio from "./pages/Portfolio";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Portfolio />
    </div>
  );
}

export default App
