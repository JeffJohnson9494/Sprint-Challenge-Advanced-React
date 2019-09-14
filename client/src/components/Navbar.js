import React from 'react';
import {useDarkMode} from './useDarkMode';

const Navbar=()=>{
    const[darkMode,setDarkMode]=useDarkMode(false);
    //dark mode toggle
    const toggleMode=e=>{
        e.preventDefault();
        setDarkMode(!darkMode);
    };
    return(
        <nav className="Nav">
            <h2>Advanced React</h2>
            <div className='DModeTog'>
                <button onClick={toggleMode}
                     className={darkMode ? 'toggled':'toggle'}/>
            </div>
        </nav>
    );
};
export default Navbar;