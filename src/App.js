import React, {useState} from 'react'
import './App.css';


import {Route, Switch} from "react-router";

import Day from "./pages/Day/Day";
import Week from "./pages/Week/Week";
import Home from "./pages/Home/Home";
import Sandbox from "./pages/Sandbox/Sandbox";




function App() {

  return (
      <div className="App">
        <Switch>
            <Route path={'/week'} component={Week}/>
            <Route path={'/day'} component={Day}/>
            <Route path={'/sandbox'} component={Sandbox}/>
            <Route path={'/'} component={Home}/>
        </Switch>
      </div>

  );
}

export default App;