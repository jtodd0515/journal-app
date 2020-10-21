import React, { useEffect, useState } from 'react';
import Header from './Components/Header';
// feat/text-input
import Entry from './Components/Entry'

import Nav from './Components/Nav';
// master

export const App = () => {
  const [time, setTime] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchTime() {
      const response = await fetch('/api/current-time');
      if (response.ok) {
        const data = await response.json();
        let date = new Date(data.time);
        date = new Date(date.getTime() + date.getTimezoneOffset() * 1000);
        date.toLocaleString();
        setTime(date);
      } else {
        setError(response.statusText);
      }
    }
    fetchTime();
  }, []);

  return (
    <div className='App'>
      <Header />
      <Entry />
      {!error ? (
        <p className='pt-2 text-center text-success'>
          {!time ? 'Loading...' : `Server time: ${time}`}
        </p>
      ) : (
        <p className='pt-2 text-center text-error'>{error}</p>
      )}
    <Nav />
    </div>
  );
};

export default App;
