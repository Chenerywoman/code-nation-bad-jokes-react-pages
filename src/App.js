import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Categories from './components/Categories';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/categories" component={Categories}/>
        </Switch>
      </BrowserRouter>    
    </div>
  );
}

export default App;
