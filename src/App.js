import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

// Pages
import Home from './pages/Home';
import Detail from './pages/Detail';

// Components
import Navbar from './components/navbar';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' Component={Home}/>
          <Route path='/detail/:name' Component={Detail}/>
        </Routes>
      </Router>
      <Navbar/>
    </div>
  );
}

export default App;
