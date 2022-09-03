import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import * as Ai from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="rounded-div flex items-center justify-between h-20 transition duration-300">
      <Link to="/">
        <h1 className="text-2xl ml-4">Cryptobase</h1>
      </Link>
      <div className="hidden md:block">
        <ThemeToggle />
      </div>
      <div className="hidden md:block mr-4 ">
        <Link to="/entrar" className="p-4 hover:text-accent">
          Entrar
        </Link>
        <Link
          to="/registrar"
          className="bg-button text-btnText px-5 py-2 ml-2 rounded-2xl shadow-lg hover:shadow-2xl opacity-90 hover:opacity-100"
        >
          Registrar
        </Link>
      </div>
      {/* Menu Icon */}
      <div
        onClick={handleNav}
        className="md:hidden block mr-4 z-10 cursor-pointer"
      >
        {nav ? <Ai.AiOutlineClose size={25} /> : <Ai.AiOutlineMenu size={25} />}
      </div>
      {/* Mobile Menu */}
      <div
        className={
          nav
            ? 'md:hidden flex flex-col fixed  items-center left-0 top-20 cursor-pointer justify-between w-full h-[90%] bg-primary ease-in duration-300 z-10 text-xl'
            : 'flex flex-col fixed  items-center left-[-100%] top-20 cursor-pointer justify-between w-full h-[90%] duration-300 ease-in transition'
        }
      >
        <ul className="w-full p-4">
          <li className="border-b py-6">
            <Link onClick={handleNav} to="/">
              Inicio
            </Link>
          </li>
          <li className="border-b py-6">
            <Link onClick={handleNav} to="/minha-conta">
              Minha Conta
            </Link>
          </li>
          <li className="py-6">
            <ThemeToggle />
          </li>
        </ul>
        <div className="flex flex-col w-full p-4 ">
          <Link to="/entrar">
            <button
              onClick={handleNav}
              className="w-full my-2 p-3 bg-primary text-primary border border-secondary rounded-2xl shadow-xl"
            >
              Entrar
            </button>
          </Link>
          <Link to="/registrar">
            <button
              onClick={handleNav}
              className="w-full my-2 p-3 bg-button text-btnText border border-secondary rounded-2xl shadow-xl "
            >
              Registrar
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
