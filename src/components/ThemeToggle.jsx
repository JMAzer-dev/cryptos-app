import React, { useContext } from 'react';
import * as Hi from 'react-icons/hi';
import { ThemeContext } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className='cursor-pointer'>
      {theme === 'dark' ? (
        <div className='p-2 flex items-center gap-2 text-primary' onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
          <Hi.HiSun size={25}/> Modo Claro
        </div>
      ) : (
        <div className='p-2 flex items-center gap-2 text-primary' onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
          <Hi.HiMoon size={25}/> Modo Escuro
        </div>
      )}
    </div>
  );
};

export default ThemeToggle;
