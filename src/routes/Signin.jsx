import React from 'react';
import { useForm } from 'react-hook-form';
import { AiFillLock, AiOutlineMail } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Signin = () => {
  const { signIn, loading, error } = UserAuth();

  const recaptcha = process.env.REACT_APP_RECAPTCHA_SITE_KEY;
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const submitHandler = async ({ email, password, token }) => {
    await signIn(email, password, token);
  };
  return (
    <div>
      <div className="max-w-[400px] mx-auto min-h-[600px] px-4 py-20">
        <h1 className="text-2xl font-bold">Entrar</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
          <div className="my-4">
            <label htmlFor="email">E-mail</label>
            <div className="my-2 w-full relative rounded-2xl shadow-xl">
              <input
                id="email"
                className="w-full p-2 bg-primary border border-input rounded-2xl"
                type="email"
                {...register('email', {
                  required: 'Porfavor, digite um email.',
                  pattern: {
                    value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9]+.[a-zA-Z0-9-.]+$/i,
                    message: 'Porfavor, digite um email válido.',
                  },
                })}
              />
              <AiOutlineMail className="absolute right-2 top-3 text-gray-400" />
            </div>
          </div>
          {errors.email && (
            <div className="text-red-500">{errors.email.message}</div>
          )}
          <div className="my-4">
            <label htmlFor="pass">Senha</label>
            <div className="my-2 w-full relative rounded-2xl shadow-xl">
              <input
                className="w-full p-2 bg-primary border border-input rounded-2xl"
                id="pass"
                type="password"
                {...register('password', {
                  required: 'Porfavor, digite uma senha.',
                  minLength: {
                    value: 6,
                    message: 'O password precisa de no mínimo 6 caractéres',
                  },
                })}
              />
              <AiFillLock className="absolute right-2 top-3 text-gray-400" />
            </div>
          </div>
          {errors.password && (
            <div className="text-red-500">{errors.password.message}</div>
          )}
          <button
            disabled={loading}
            className="text-btnText bg-button w-full my-2 p-3 rounded-2xl shadow-xl opacity-90 hover:opacity-100 hover:shadow-2xl disabled:opacity-20 disabled:cursor-progress g-recaptcha"
            data-callback="onSubmit"
            data-sitekey={`${recaptcha}`}
          >
            Entrar
          </button>
        </form>
        <p>
          Ainda não tem uma conta?{' '}
          <Link to="/registrar" className="text-accent hover:underline">
            Registre-se
          </Link>
        </p>
        {error && <div className="text-red-500">{error}</div>}
      </div>
    </div>
  );
};

export default Signin;
