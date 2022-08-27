import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Sparklines, SparklinesLine, SparklinesSpots } from 'react-sparklines';
const CoinPage = () => {
  const [coin, setCoin] = useState({});
  const url =
    'https://api.coingecko.com/api/v3/coins/bitcoin?localization=false&sparkline=true';
  useEffect(() => {
    axios
      .get(url)
      .then((res) => setCoin(res.data))
      .catch((err) => console.log(err));
  }, [url]);
  return (
    <div>
      <div>
        <img src={coin.image?.large} alt="/" />
        <div>
          <p>{coin?.name}</p>
          <p>({coin.symbol?.toUpperCase()} / BRL)</p>
        </div>
      </div>
      <div>
        <div>
          <div>
            {coin.market_data?.current_price ? (
              <p>
                ${coin.market_data.current_price.brl.toLocaleString('pt-BR')}
              </p>
            ) : null}
            <p>Últimos 7 dias</p>
          </div>
          <div>
            <Sparklines data={coin.market_data?.sparkline_7d.price}>
              <SparklinesLine color="teal" />
              <SparklinesSpots />
            </Sparklines>
          </div>
          <div>
            <div>
              <p>Capitalização do Mercado</p>
              {coin.market_data?.market_cap ? (
                <p>
                  R$ {coin.market_data.market_cap.brl.toLocaleString('pt-BR')}
                </p>
              ) : null}
            </div>
            <div>
                <p>Volume 24h</p>
                {coin.market_data?.total_volume ? (
                <p>
                  R$ {coin.market_data.total_volume.brl.toLocaleString('pt-BR')}
                </p>
              ) : null}
            </div>
          </div>
          <div>
            <div>
                <p>Alta 24h</p>
                {coin.market_data?.high_24h ? (
                <p>
                  R$ {coin.market_data.high_24h.brl.toLocaleString('pt-BR')}
                </p>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoinPage;
