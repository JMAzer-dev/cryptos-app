import React, { useState } from 'react';
import FetchData from '../utils/Data';
import CoinItem from './CoinItem';

const SearchComponent = () => {
  const [search, setSearch] = useState('');

  const data = FetchData();

  return (
    <div className="rounded-div my-4 overflow-x-auto">
      <div className="flex flex-col md:flex-row justify-between pt-4 pb-6 md:text-right items-center">
        <h1 className="text-2xl font-bold my-2">Buscar Crypto</h1>
        <form>
          <input
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-primary border-input px-4 py-2 rounded-2xl shadow-xl "
            type="text"
            placeholder="Pesquisar..."
          />
        </form>
      </div>
      <table className='w-full border-collapse text-center '>
        <thead>
          <tr className='border-b'>
            <th></th>
            <th className='px-4'>#</th>
            <th className='text-left'>Moeda</th>
            <th></th>
            <th>Preço</th>
            <th>24h</th>
            <th className='hidden md:table-cell'>Volume 24h</th>
            <th className='hidden sm:table-cell'>Mercado</th>
            <th>Últimos 7 dias</th>
          </tr>
        </thead>
        <tbody>
          {data
            .filter((value) => {
              if (search === '') {
                return value;
              } else if (
                value.name.toLowerCase().includes(search.toLowerCase())
              ) {
                return value;
              }
            })
            .map((coin) => (
              <CoinItem key={coin.id} coin={coin} />
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchComponent;
