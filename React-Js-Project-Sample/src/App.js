import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

//    THIS IS COMPONENT CLASS IMPORT

import Hello from './Component/Hello';
import Props from './Component/Props';
import State from './Component/State';
import SetState from './Component/SetState';
import DestructuringPropsandState from './Component/DestructuringPropsandState';
import EventHandling from './Component/EventHandling';
import EventBinding from './Component/EventBinding';
import ParentComponent from './Component/ParentComponent';
import ConditionalRendering from './Component/ConditionalRendering';

//    /THIS IS COMPONENT CLASS IMPORT


//   THIS IS PAGE CLASS IMPORT

import Home from './Pages/Home';
import About from './Pages/About';
import ContactUs from './Pages/ContactUs';

//   /THIS IS PAGE CLASS IMPORT


class App extends React.Component{
  
  render(){
    return (
      <div className="App">
          <Hello />
          <Props name="kiran" developer="programmer">
            <h1>This is superman</h1>
          </Props>
          <State />
          <SetState />
          <DestructuringPropsandState  name="DestructuringPropsandState" asa="Destructuring Props and State" />
          <EventHandling />
          <EventBinding />
          <ParentComponent />
          <br />
          <ConditionalRendering />

        <Router>
          <div>
            <h2>Welcome to React Router</h2>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
              <ul className="navbar-nav mr-auto">
                <li><Link to={'/'} className="nav-link">Home</Link></li>
                <li><Link to={'/About'} className="nav-link">About</Link></li>
                <li><Link to={'/ContactUs'} className="nav-link">ContactUs</Link></li>
              </ul>
            </nav>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/About' component={About} />
              <Route path='/ContactUs' component={ContactUs} />
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}


export default App;
