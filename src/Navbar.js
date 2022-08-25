import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return(
     <div className='navLinks'>
      <div className='linkSet'>
        <h4>UseState</h4>
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
        <h4>UseEffect</h4>
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
        <h4>Conditional Rendering</h4>
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
      <div className='linkSet'>
        <h4>Single Items</h4>
        <ul>
          <li>
            <Link to="/UseRefBasics">UseRefBasics</Link>
          </li>
          <li>
            <Link to="/UseReducer">UseReducer</Link>
          </li>
          <li>
            <Link to="/ContextAPI">ContextAPI</Link>
          </li>
          <li>
            <Link to="/CustomHook">CustomHook</Link>
          </li>
          <li>
            <Link to="/PropTypes">PropTypes</Link>
          </li>
        </ul>
      </div>

      <div className='linkSet'>
        <h4>Projects</h4>
        <ul>
          <li>
            <Link to="/BirthdayReminder">BirthdayReminder</Link>
          </li>
          <li>
            <Link to="/ToursProject">ToursProject</Link>
          </li>
          <li>
            <Link to="/ReviewsProject">ReviewsProject</Link>
          </li>
          <li>
            <Link to="/AccordianProject">AccordianProject</Link>
          </li>
          <li>
            <Link to="/MenuProject">MenuProject</Link>
          </li>
          <li>
            <Link to="/TabsProject">TabsProject</Link>
          </li>
          <li>
            <Link to="/LoremIpsumProject">LoremIpsumProject</Link>
          </li>

          
        </ul>
      </div>





      
    </div>
  );
};

export default Navbar;
