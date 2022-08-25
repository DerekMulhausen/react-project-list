import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//pages
import UseStateArray from './useState/array';
import UseStateBasics from './useState/basics';
import UseStateCounter from './useState/counter';
import UseStateObject from './useState/object';

import UseEffectBasics from './useEffect/basics';
import UseEffectFetchData from './useEffect/fetch-data';
import UseEffectCleanup from './useEffect/cleanup';

import MultipleReturns from './conditionalRendering/multiple-returns';
import ShortCircuit from './conditionalRendering/short-circuit';
import ShowHide from './conditionalRendering/show-hide';

import ControlledInputs from './forms/controlled-inputs';
import MultipleInputs from './forms/multiple-inputs';

import UseRefBasics from './useRef/basics';

import UseReducer from './useReducer/index';

import ContextAPI from './useContext/context-api';

import CustomHook from './customHooks/1-fetch-example';

import PropTypes from './propTypes';



import Navbar from './Navbar';

function App() {
  return (
    <div className='container'>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/useStateArray">
            <UseStateArray />
          </Route>
          <Route path="/UseStateBasics">
            <UseStateBasics />
          </Route>
          <Route path="/UseStateCounter">
            <UseStateCounter />
          </Route>
          <Route path="/UseStateObject">
            <UseStateObject />
          </Route>

          <Route path="/UseEffectBasics">
            <UseEffectBasics />
          </Route>
          <Route path="/UseEffectFetchData">
            <UseEffectFetchData />
          </Route>
          <Route path="/UseEffectCleanup">
            <UseEffectCleanup />
          </Route>

          <Route path="/MultipleReturns">
            <MultipleReturns />
          </Route>
          <Route path="/ShortCircuit">
            <ShortCircuit />
          </Route>
          <Route path="/ShowHide">
            <ShowHide />
          </Route>

          <Route path="/ControlledInputs">
            <ControlledInputs />
          </Route>
          <Route path="/MultipleInputs">
            <MultipleInputs />
          </Route>
          
          <Route path="/UseRefBasics">
            <UseRefBasics />
          </Route>
          <Route path="/UseReducer">
            <UseReducer />
          </Route>
          <Route path="/ContextAPI">
            <ContextAPI />
          </Route>
          <Route path="/CustomHook">
            <CustomHook />
          </Route>
          <Route path="/PropTypes">
            <PropTypes />
          </Route>
        </Switch>


      </Router>
    </div>
  );
}
export default App;





