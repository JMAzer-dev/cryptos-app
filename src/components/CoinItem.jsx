import { AiOutlineStar } from 'react-icons/ai';
import { Sparklines, SparklinesLine, SparklinesSpots } from 'react-sparklines';

const CoinItem = ({ coin }) => {
  return (
    <>
      <tr className="h-[80px] border-b">
        <td>
          <AiOutlineStar />
        </td>
        <td>{coin.market_cap_rank}</td>
        <td>
          <div className="flex items-center">
            <img
              className="w-6 mr-2 rounded-full"
              src={coin.image}
              alt={coin.id}
            />
            <span className="hidden sm:table-cell md:mr-10 lg:mr-0">{coin.name}</span>
          </div>
        </td>
        <td className='uppercase'>{coin.symbol}</td>
        <td>R$ {coin.current_price.toLocaleString('pt-BR')}</td>
        <td>
          {coin.price_change_percentage_24h > 0 ? (
            <p className="text-green-600">{coin.price_change_percentage_24h.toFixed(2)}%</p>
          ) : (
            <p className='text-red-600'>{coin.price_change_percentage_24h.toFixed(2)}%</p>
          )}
        </td>
        <td className="w-[180px] hidden md:table-cell">R$ {coin.total_volume.toLocaleString('pt-BR')}</td>
        <td className="w-[180px] hidden sm:table-cell">R$ {coin.market_cap.toLocaleString('pt-BR')}</td>
        <td className="w-56">
          <Sparklines data={coin.sparkline_in_7d.price}>
            <SparklinesLine color="teal" />
            <SparklinesSpots />
          </Sparklines>
        </td>
      </tr>
    </>
  );
};

export default CoinItem;
