import React from 'react';
import NavBar from './components/Navbar/NavBar';
import './App.css';
import Banner from './components/Banner/Banner';
import Post from './components/Post/Post';
import {action, originals, comedy} from '../src/components/urls'


function App() {
  
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Post url={originals} title='Netflix Originals'/>
      <Post url={action} title='Action' isSmall/>
      <Post url={comedy} title='Comedy' isSmall/>
    </div>
  );
}

export default App;
