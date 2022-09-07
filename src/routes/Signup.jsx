import { useForm } from 'react-hook-form';
import { AiFillLock, AiOutlineMail } from 'react-icons/ai';
import { Link } from 'react-router-dom';
// import context already filled
import { UserAuth } from '../context/AuthContext';

const Signup = () => {
  const { signUp, loading, error } = UserAuth();

  const recaptcha = process.env.REACT_APP_RECAPTCHA_SITE_KEY;
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const submitHandler = async ({ email, password, token }) => {
    await signUp(email, password, token);
  };
  console.log(error);
  return (
    <div>
      <div className="max-w-[400px] mx-auto min-h-[600px] px-4 py-20">
        <h1 className="text-2xl font-bold">Registrar</h1>
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
            {errors.password && (
              <div className="text-red-500">{errors.password.message}</div>
            )}
          </div>
          <button
            data-callback="onSubmit"
            data-sitekey={`${recaptcha}`}
            disabled={loading}
            className="text-btnText bg-button w-full my-2 p-3 rounded-2xl shadow-xl opacity-90 hover:opacity-100 hover:shadow-2xl disabled:opacity-20 disabled:cursor-progress g-recaptcha"
          >
            {loading ? 'Aguarde...' : 'Registrar'}
          </button>
        </form>
        <p>
          Já possui uma conta?{' '}
          <Link to="/entrar" className="text-accent hover:underline">
            Entrar
          </Link>
        </p>
        {error && <div className="text-red-500">{error}</div>}
      </div>
    </div>
  );
};

export default Signup;
