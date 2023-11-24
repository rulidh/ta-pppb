import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

// Pages
import Home from './pages/Home';
import Detail from './pages/Detail';
import Tutorial from './pages/TutorialPage';
import TutorialDetail from './pages/TutorialDetailPage';
import Profile from './pages/Profile';

// Components
import Navbar from './components/navbar';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' Component={Home}/>
          <Route path='/detail/:name' Component={Detail}/>
          <Route path='/tutorial' Component={Tutorial}/>
          <Route path='/tutorial/:userId' Component={TutorialDetail}/>
          <Route path='/profile' Component={Profile}/>
        </Routes>
      </Router>
      <Navbar/>
    </div>
  );
}

export default App;
