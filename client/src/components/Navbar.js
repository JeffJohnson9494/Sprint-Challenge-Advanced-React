import React from 'react';
import {useDarkMode} from './useDarkMode';

const Navbar=()=>{
    const[darkMode,setDarkMode]=useDarkMode(false);
    const toggleMode=e=>{
        e.preventDefault();
        setDarkMode(!darkMode);
    };
    return(
        <nav className="Nav">
            <h2>Advanced React</h2>
            <div className='DModeTog'>
                <div onClick={toggleMode}
                     className={darkMode ? 'toggle toggled':'toggle'}/>
            </div>
        </nav>
    );
};
export default Navbar;