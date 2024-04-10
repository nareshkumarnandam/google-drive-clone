
import { useState } from 'react';
import './App.css';
import Data from './components/Data';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Home from './pages/Home';

function App() {
  const [sidebar, setSidebar] = useState(true);
  return (
    <>
      <Header setSidebar={setSidebar} />
      <div className="App">
        <Home sidebar={sidebar} />
      </div>
    </>
    
  );
}

export default App;
