import { Routes, Route } from 'react-router-dom'

import './App.scss';
import Home from './Components/Home/Home';

function App() {
  return (
    <div className="App">
      <div className='grid'>
        <Home />
      </div>
    </div>
  )
}

export default App;
