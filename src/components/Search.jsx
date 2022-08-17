import React from 'react';
import FetchData from '../utils/Data';
import { AiOutlineStar } from 'react-icons/ai';
import { Sparklines, SparklinesLine, SparklinesSpots } from 'react-sparklines';
const SearchComponent = () => {
  const data = FetchData();

  console.log(data);

  return (
    <div>
      <div>
        <h1>Buscar Crypto</h1>
        <form>
          <input type="text" placeholder="Pesquisar..." />
        </form>
      </div>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>#</th>
            <th>Moeda</th>
            <th></th>
            <th>Preço</th>
            <th>24h</th>
            <th>Volume 24h</th>
            <th>Mercado</th>
            <th>Últimos 7 dias</th>
          </tr>
        </thead>
        <tbody>
          {data.map((coin) => (
            <tr key={coin.id}>
              <td>
                <AiOutlineStar />
              </td>
              <td>{coin.market_cap_rank}</td>
              <td>
                <div>
                  <img src={coin.image} alt={coin.id} />
                  <span>{coin.name}</span>
                </div>
              </td>
              <td>{coin.symbol}</td>
              <td>{coin.current_price}</td>
              <td>{coin.price_change_percentage_24h}</td>
              <td>{coin.total_volume}</td>
              <td>{coin.market_cap}</td>
              <td className='w-56'>
                <Sparklines data={coin.sparkline_in_7d.price}>
                  <SparklinesLine color='teal' />
                  <SparklinesSpots />
                </Sparklines>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchComponent;
