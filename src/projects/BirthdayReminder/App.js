/*
  Thank you to John Smilga and Freecodecamp for providing this project at https://www.youtube.com/watch?v=a_7Z7C_JCyo
*/
import React, { useState } from 'react';
import data from './data';
import List from './List';
function BirthdayReminder() {
  const [people, setPeople]=useState(data);
  return <main>
    <section className="container">
      <h3>{people.length} birthdays today</h3>
      <List people={people}/>
      <button onClick={()=>setPeople([])}>clear all</button>
    </section>
  </main>
}

export default BirthdayReminder;
