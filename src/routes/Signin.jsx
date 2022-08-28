import React from 'react';
import { AiFillLock, AiOutlineMail } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Signin = () => {
  return (
    <div>
      <div className="max-w-[400px] mx-auto min-h-[600px] px-4 py-20">
        <h1 className="text-2xl font-bold">Entrar</h1>
        <form>
          <div className="my-4">
            <label htmlFor="email">E-mail</label>
            <div className="my-2 w-full relative rounded-2xl shadow-xl">
              <input
                id="email"
                className="w-full p-2 bg-primary border border-input rounded-2xl"
                type="email"
              />
              <AiOutlineMail className="absolute right-2 top-3 text-gray-400" />
            </div>
          </div>
          <div className="my-4">
            <label htmlFor="pass">Senha</label>
            <div className="my-2 w-full relative rounded-2xl shadow-xl">
              <input
                className="w-full p-2 bg-primary border border-input rounded-2xl"
                id="pass"
                type="password"
              />
              <AiFillLock className="absolute right-2 top-3 text-gray-400" />
            </div>
          </div>
          <button className="text-btnText bg-button w-full my-2 p-3 rounded-2xl shadow-xl opacity-90 hover:opacity-100 hover:shadow-2xl">
            Entrar
          </button>
        </form>
        <p>
          Ainda não tem uma conta?{' '}
          <Link to="/signup" className="text-accent hover:underline">
            Registre-se
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signin;
