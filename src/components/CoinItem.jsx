import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { Sparklines, SparklinesLine, SparklinesSpots } from 'react-sparklines';
import { UserAuth } from '../context/AuthContext';
import { db } from '../firebase/Config';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';
import { useState } from 'react';

const CoinItem = ({ coin }) => {
  const [savedCoin, setSavedCoin] = useState(false);
  const { user } = UserAuth();
  const coinPath = doc(db, 'users', `${user?.email}`);
  const saveCoin = async () => {
    if (user?.email) {
      setSavedCoin(true);
      await updateDoc(coinPath, {
        watchList: arrayUnion({
          id: coin.id,
          name: coin.name,
          image: coin.image,
          rank: coin.market_cap_rank,
          symbol: coin.symbol,
        }),
      });
    } else {
      alert('Você precisa estar logado para adicionar moedas.');
    }
  };
  return (
    <>
      <tr className="h-[80px] border-b">
        <td onClick={saveCoin}>
          {savedCoin ? <AiFillStar /> : <AiOutlineStar />}
        </td>
        <td>{coin.market_cap_rank}</td>
        <td>
          <Link to={`/moeda/${coin.id}`}>
            <div className="flex items-center">
              <img
                className="w-6 mr-2 rounded-full"
                src={coin.image}
                alt={coin.id}
              />
              <span className="hidden sm:table-cell md:mr-10 lg:mr-0">
                {coin.name}
              </span>
            </div>
          </Link>
        </td>
        <td className="uppercase">{coin.symbol}</td>
        <td>R$ {coin.current_price.toLocaleString('pt-BR')}</td>
        <td>
          {coin.price_change_percentage_24h > 0 ? (
            <p className="text-green-600">
              {coin.price_change_percentage_24h.toFixed(2)}%
            </p>
          ) : (
            <p className="text-red-600">
              {coin.price_change_percentage_24h.toFixed(2)}%
            </p>
          )}
        </td>
        <td className="w-[180px] hidden md:table-cell">
          R$ {coin.total_volume.toLocaleString('pt-BR')}
        </td>
        <td className="w-[180px] hidden sm:table-cell">
          R$ {coin.market_cap.toLocaleString('pt-BR')}
        </td>
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
