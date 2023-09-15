import { useState } from 'react';
import './App.css';
import { Router } from 'react-router-dom';

const App = () => {
  return (
    <>
    <nav className="bg-indigo-500 py-5">
      <ul>
        <li>
          <a href="shop">Shop page</a>
        </li>
      </ul>
      <div className=''>
        <h1>Logo</h1>
      </div>
    </nav>
    <div className="grid grid-cols-6 gap-4 m-6" >
      <div>
        <h1>Hello from the main page of the app!</h1>
        <p>Here are some examples of links to other pages</p>
      </div>
      <div className='col-start-3 col-span-3'>
        <h1>Hello from the main page of the app!</h1>
        <p>Here are some examples of links to other pages</p>
      </div>
      <div>
        <h1>Hello from the main page of the app!</h1>
        <p>Here are some examples of links to other pages</p>
      </div>
    </div>
    </>
  );
};

export default App;
