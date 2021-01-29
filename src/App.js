import React, { useState } from 'react';

import './App.css';
import Teachers from './pages/Teachers';
import Register from './pages/Register';
import Schools from './pages/Schools';

const App = () => {
  const [page, setPage] = useState('teachers'); //hold data from API

  return (
    <div className='App'>
      <button
        onClick={() => setPage('teachers')}
      >
        Teachers
      </button>
      <button
        onClick={() => setPage('register')}
      >
        Register
      </button>
      <button
        onClick={() => setPage('schools')}
      >
        Schools
      </button>
      {page === 'teachers' ? <Teachers/> : page === 'register' ? <Register/> : <Schools/>}
    </div>
  );
}
export default App;
