import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return(
     <div className='navLinks'>
      <div className='linkSet'>
        <h3>UseState</h3>
        <ul>
          <li>
            <Link to="/UseStateArray">UseStateArray</Link>
          </li>
          <li>
            <Link to="/UseStateBasics">UseStateBasics</Link>
          </li>
          <li>
            <Link to="/UseStateCounter">UseStateCounter</Link>
          </li>
          <li>
            <Link to="/UseStateObject">UseStateObjects</Link>
          </li>
          
        </ul>
      </div>
      <div className='linkSet'>
        <h3>UseEffect</h3>
        <ul>
          <li>
            <Link to="/UseEffectBasics">UseEffectBasics</Link>
          </li>
          <li>
            <Link to="/UseEffectCleanup">UseEffectCleanup</Link>
          </li>
          <li>
            <Link to="/UseEffectFetchData">UseEffectFetchData</Link>
          </li>
          
        </ul>
      </div>
      <div className='linkSet'>
        <h3>Conditional Rendering</h3>
        <ul>
          <li>
            <Link to="/MultipleReturns">MultipleReturns</Link>
          </li>
          <li>
            <Link to="/ShortCircuit">ShortCircuit</Link>
          </li>
          <li>
            <Link to="/ShowHide">ShowHide</Link>
          </li>
          
        </ul>
      </div>
      
    </div>
  );
};

export default Navbar;
