import './App.css';

import BorderInfo from "./views/border/borderInfo"
import BorderEnkat from "./views/border/borderEnkat"
import BorderTest from "./views/border/borderTest"

import Enkat1 from "./views/enkat/enkat1"
import Enkat2 from "./views/enkat/enkat2"

import Test1of3 from "./views/testing/test/Test1of3"
import Test2of3 from "./views/testing/test/Test2of3"
import Test3of3 from "./views/testing/test/Test3of3"

import Testinfo1of3 from "./views/testing/TestInfo/Testinfo1of3"
import Testinfo2of3 from "./views/testing/TestInfo/Testinfo2of3"
import Testinfo3of3 from "./views/testing/TestInfo/Testinfo3of3"

import Info from "./views/info"



import React from 'react';
import ReactDOM from 'react-dom';
import Feelings1 from "./views/testing/Feelings/feelings1"
import Feelings2 from "./views/testing/Feelings/feelings2"
import Feelings3 from "./views/testing/Feelings/feelings3"
import Feelings4 from "./views/testing/Feelings/feelings4"

import { useSelector } from "react-redux"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link, 
  Redirect
} from "react-router-dom";



function App() {
  const id = useSelector(state => state)
  console.log(id)
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <BorderInfo/>
            <Info/>
          </Route>
          <Route path="/enkat1">
            <BorderEnkat/>
            <Enkat1/>
          </Route>
          <Route path="/enkat2">
            <BorderEnkat/>
            <Enkat2/>
          </Route>
          <Route path="/feelings1">
            <BorderTest/>
            <Feelings1/>
          </Route>
          <Route path="/feelings2">
            <BorderTest/>
            <Feelings2/>
          </Route>
          <Route path="/feelings3">
            <BorderTest/>
            <Feelings3/>
          </Route>
          <Route path="/feelings4">
            <BorderTest/>
            <Feelings4/>
          </Route>
          <Route path="/Testinfo1of3">
            <BorderTest/>
            <Testinfo1of3/>
          </Route>
          <Route path="/Testinfo2of3">
            <BorderTest/>
            <Testinfo2of3/>
          </Route>
          <Route path="/Testinfo3of3">
            <BorderTest/>
            <Testinfo3of3/>
          </Route>
          <Route path="/Test1of3">
            <BorderTest/>
            <Test1of3/>
          </Route>
          <Route path="/Test2of3">
            <BorderTest/>
            <Test2of3/>
          </Route>
          <Route path="/Test3of3">
            <BorderTest/>
            <Test3of3/>
          </Route>
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;


  