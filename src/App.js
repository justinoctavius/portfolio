import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import './App.css';

import HomeScreen from './screens/home/HomeScreen';
import AboutScreen from './screens/about/AboutScreen';
import ContactScreen from './screens/contact/ContactScreen';
import ProjectsScreen from './screens/projects/ProjectsScreen';
import Navbar from './components/navbar/Navbar';
import NextButton from './components/buttons/NextButton';
import PrevButton from './components/buttons/PrevButton';

function App() {
  const [ select, setSelect ] = useState('home')
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar select={select} ></Navbar>
        </header>
        <main>
          <Switch>
            <Route  exact path="/" render={(props) => <HomeScreen {...props} select={select} setSelect={setSelect} />} ></Route>
            <Route  path="/about" render={(props) => <AboutScreen {...props} select={select} setSelect={setSelect} />} ></Route>
            <Route  path="/contact" render={(props) => <ContactScreen {...props} select={select} setSelect={setSelect} />} ></Route>
            <Route  path="/Projects" render={(props) => <ProjectsScreen {...props} select={select} setSelect={setSelect} />} ></Route>
            <Route  render={(props) => <HomeScreen {...props} select={select} setSelect={setSelect} />} ></Route>
          </Switch>
        </main>
        <footer className="text-center p-5">
          <div>
            <PrevButton select={select} />
            <NextButton select={select} />
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
