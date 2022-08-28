import React from 'react';
import { AiOutlineInstagram } from 'react-icons/ai';
import * as fa from 'react-icons/fa';
import ThemeToggle from './ThemeToggle';

const Footer = () => {
  return (
    <div className="rounded-div mt-8 pt-8 text-primary">
      <div className="grid md:grid-cols-2">
        <div className="flex justify-evenly w-full md:max-w-[350px] uppercase">
          <div>
            <h2 className="font-bold">Suporte</h2>
            <ul>
              <li className="cursor-pointer text-sm py-2 hover:underline">Call Center</li>
              <li className="cursor-pointer text-sm py-2 hover:underline">Contato</li>
              <li className="cursor-pointer text-sm py-2 hover:underline">Status da API</li>
              <li className="cursor-pointer text-sm py-2 hover:underline">Documentação</li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold">Informações</h2>
            <ul>
              <li className="cursor-pointer text-sm py-2 hover:underline">Sobre nós</li>
              <li className="cursor-pointer text-sm py-2 hover:underline">Carreiras</li>
              <li className="cursor-pointer text-sm py-2 hover:underline">Investimento</li>
              <li className="cursor-pointer text-sm py-2 hover:underline">Políticas</li>
            </ul>
          </div>
        </div>
        <div className='text-right'>
          <div className='w-full flex justify-end'>
            <div className='w-full md:w-[350px] py-4 relative'>
              <div className='flex justify-center md:justify-end py-4 md:py-0 md:pb-4 mt-[-1rem]'>
                <ThemeToggle />
              </div>
              <p className='text-center md:text-right'>Cadastre-se para novidades sobre Cryptos</p>
              <div className='py-4'>
                <form>
                  <input className='bg-primary border border-input p-2 mr-2 w-full shadow-xl rounded-2xl md:w-auto' type="email" placeholder="Digite seu email..." />
                  <button className='p-2 bg-button text-btnText px-4 w-full rounded-2xl shadow-xl hover:shadow-2xl opacity-90 hover:opacity-100 md:w-auto my-4'>Registrar</button>
                </form>
              </div>
              <div className='flex py-4 justify-around text-accent '>
                <i className='hover:scale-110 cursor-pointer'>
                  <AiOutlineInstagram />
                </i>
                <i className='hover:scale-110 cursor-pointer'>
                  <fa.FaTiktok />
                </i>
                <i className='hover:scale-110 cursor-pointer'>
                  <fa.FaTwitter />
                </i>
                <i className='hover:scale-110 cursor-pointer'>
                  <fa.FaFacebookF />
                </i>
                <i className='hover:scale-110 cursor-pointer'>
                  <fa.FaGithub />
                </i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center py-4">Powered by Coin Gecko</p>
    </div>
  );
};

export default Footer;
