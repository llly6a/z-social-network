import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import { Route } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';

const App = (props) => {
  return (
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path='/dialogs' render={ () => <DialogsContainer/>} />
          <Route exact path='/profile' render={ () => <Profile />} />
          <Route exact path='/news' render={ () => <News/>} />    
          <Route exact path='/music' render={ () => <Music/>} /> 
          <Route exact path='/settings' render={ () => <Settings/>} />               
        </div>
      </div>
  );
}

export default App;
