import React from 'react';
import Navbar from "./Component/Navbar/Navbar"
import "./Style/App.scss"
import {Switch,Route} from "react-router-dom"
import home from "./Component/Home/Home"
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route path="/" component={home}/>
      </Switch>
    </div>
  );
}

export default App;
