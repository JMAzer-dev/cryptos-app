import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Sparklines, SparklinesLine, SparklinesSpots } from 'react-sparklines';
import { useParams } from 'react-router-dom';

import * as fa from 'react-icons/fa';

const CoinPage = () => {
  const [coin, setCoin] = useState({});

  const params = useParams();

  const url = `https://api.coingecko.com/api/v3/coins/${params.coinId}?localization=false&sparkline=true`;
  useEffect(() => {
    axios
      .get(url)
      .then((res) => setCoin(res.data))
      .catch((err) => console.log(err));
  }, [url]);
  return (
    <div className="rounded-div my-12 py-8">
      <div className="flex py-8">
        <img src={coin.image?.large} alt={coin?.id} className="w-20 mr-8" />
        <div>
          <p className="text-3xl font-bold">{coin?.name}</p>
          <p>({coin.symbol?.toUpperCase()} / BRL)</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <div className="flex justify-between">
            {coin.market_data?.current_price ? (
              <p className="text-3xl font-bold">
                R$ {coin.market_data.current_price.brl.toLocaleString('pt-BR')}
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
          <div className="grid grid-cols-2 py-4">
            <div>
              <p className="text-gray-500 text-sm">Capitalização do Mercado</p>
              {coin.market_data?.market_cap ? (
                <p>
                  R$ {coin.market_data.market_cap.brl.toLocaleString('pt-BR')}
                </p>
              ) : null}
            </div>
            <div>
              <p className="text-gray-500 text-sm">Volume 24h</p>
              {coin.market_data?.total_volume ? (
                <p>
                  R$ {coin.market_data.total_volume.brl.toLocaleString('pt-BR')}
                </p>
              ) : null}
            </div>
          </div>
          <div className="grid grid-cols-2 py-4">
            <div>
              <p className="text-gray-500 text-sm">Maior Valor 24h</p>
              {coin.market_data?.high_24h ? (
                <p>
                  R$ {coin.market_data.high_24h.brl.toLocaleString('pt-BR')}
                </p>
              ) : null}
            </div>
            <div>
              <p className="text-gray-500 text-sm">Menor Valor 24h</p>
              {coin.market_data?.low_24h ? (
                <p>R$ {coin.market_data.low_24h.brl.toLocaleString('pt-BR')}</p>
              ) : null}
            </div>
          </div>
        </div>
        <div>
          <p className="text-xl font-bold">Status do mercado</p>
          <div className="flex justify-between py-4 items-center flex-wrap">
            <div>
              <p className="text-gray-500 text-sm">Ranking do mercado</p>
              {coin.market_cap_rank}
            </div>
            <div>
              <p className="text-gray-500 text-sm">Algorítimo de Hash</p>
              {coin.hashing_algorithm ? <p>{coin.hashing_algorithm}</p> : null}
            </div>
            <div>
              <p className="text-gray-500 text-sm">Pontuação de Confiaça</p>
              {coin.tickers ? <p>{coin.liquidity_score.toFixed(2)}</p> : null}
            </div>
          </div>
          <p className="text-xl font-bold">Preço de Negociação</p>
          <div className="flex justify-between py-4 items-center flex-wrap">
            <div>
              <p className="text-gray-500 text-sm">Mudança (24h)</p>
              {coin.market_data ? (
                <p>
                  {coin.market_data.price_change_percentage_24h.toLocaleString(
                    'pt-BR'
                  )}
                  %
                </p>
              ) : null}
            </div>
            <div>
              <p className="text-gray-500 text-sm">Mudança (7d)</p>
              {coin.market_data ? (
                <p>
                  {coin.market_data.price_change_percentage_7d.toLocaleString(
                    'pt-BR'
                  )}
                  %
                </p>
              ) : null}
            </div>
            <div>
              <p className="text-gray-500 text-sm">Mudança (14d)</p>
              {coin.market_data ? (
                <p>
                  {coin.market_data.price_change_percentage_14d.toLocaleString(
                    'pt-BR'
                  )}
                  %
                </p>
              ) : null}
            </div>
          </div>
          <div className="flex justify-between py-4 items-center flex-wrap">
            <div>
              <p className="text-gray-500 text-sm">Mudança (30d)</p>
              {coin.market_data ? (
                <p>
                  {coin.market_data.price_change_percentage_30d.toLocaleString(
                    'pt-BR'
                  )}
                  %
                </p>
              ) : null}
            </div>
            <div>
              <p className="text-gray-500 text-sm">Mudança (60d)</p>
              {coin.market_data ? (
                <p>
                  {coin.market_data.price_change_percentage_60d.toLocaleString(
                    'pt-BR'
                  )}
                  %
                </p>
              ) : null}
            </div>
            <div>
              <p className="text-gray-500 text-sm">Mudança (1 ano)</p>
              {coin.market_data ? (
                <p>
                  {coin.market_data.price_change_percentage_1y.toLocaleString(
                    'pt-BR'
                  )}
                  %
                </p>
              ) : null}
            </div>
          </div>
          <div className="flex justify-around p-8 text-accent text-2xl">
            <i className="cursor-pointer ease-in duration-200 hover:scale-110">
              <fa.FaTwitter />
            </i>
            <i className="cursor-pointer ease-in duration-200 hover:scale-110">
              <fa.FaFacebook />
            </i>
            <i className="cursor-pointer ease-in duration-200 hover:scale-110">
              <fa.FaReddit />
            </i>
            <i className="cursor-pointer ease-in duration-200 hover:scale-110 ">
              <fa.FaGithub />
            </i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoinPage;
