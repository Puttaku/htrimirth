import React from 'react';
import Navbar from "./Component/Navbar/Navbar"
import "./Style/App.scss"
import {Switch,Route} from "react-router-dom"
import home from "./Component/Home/Home"
import AnimateBG from "./Component/Animate-bg/animate"
import Threedot from "./Component/Three-dot/Three-dot"
import profile from "./Component/Profile/Profile"
import skill from "./Component/Skill/Skill"
import work from "./Component/Work/Work"
import contact from "./Component/Contact/Contact"
function App() {
  return (
    <div className="App">
      <Navbar/>
      <AnimateBG/>
      <Threedot/>
      <Switch>
        <Route exact path="/profile" component={profile}/>
        <Route exact path="/skill" component={skill}/>
        <Route exact path="/work" component={work}/>
        <Route exact path="/contact" component={contact}/>
        <Route path="/" component={home}/>
      </Switch>
    </div>
  );
}

export default App;
