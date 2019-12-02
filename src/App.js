import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import NotFound from './components/NotFound'


const App = () => {
  return (
    <div className="app">
      <Router>
        <div className="header">
          <Header />
        </div>
        <div className="main">
          <Switch>
            <Route exact path='/portfolio'>
              <About />
            </Route>
            <Route exact path='/projects'>
              <Projects />
            </Route>
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
      <div className="footer">
        <Contact />
      </div>
    </div>
  );
}

export default App;
