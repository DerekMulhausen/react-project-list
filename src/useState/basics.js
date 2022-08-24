import React, { useState } from 'react';
//useState is a hook in React returns [<state value>,<function>]
//cannot call the hook conditionally
const UseStateBasics = () => { //must begin with uppercase to use the hook
  // console.log(useState('hello world'));
  // const value=useState(1)[0];
  // const handler = useState(1)[1];
  // console.log(value, handler);
  const[text, setText]=useState('random title'); //must be invoked in the functoin body

  const handleClick=()=>{
    if(text==='random title'){
      setText('hello world');
    }else{
      setText('random title');
    }
    
  }
  return <React.Fragment>
    <h1>{text}</h1>
    <button className='btn' onClick={handleClick}>change title</button>
  </React.Fragment>
};

export default UseStateBasics;
