import React from 'react';
import { useDarkMode } from './useDarkMode';

export default function Nav() {
  const [darkMode, setDarkMode] = useDarkMode(false);

  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  return (
    <div className='Navbar'>
      <h1>Advanced React</h1>
      {/*button to toggle my dark mode
            the toggle is working but not changing my display i think that is because my player card isnt displaying*/}
      <button onClick={toggleMode}>Dark Mode: {darkMode ? 'On' : 'Off'}</button>
    </div>
  );
}