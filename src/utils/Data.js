import { useEffect, useState } from 'react'
import axios from 'axios'
const FetchData = () => {

    const [coins, setCoins] = useState([]);

    const url =
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=BRL&order=market_cap_desc&per_page=10&page=1&sparkline=true';
      
    useEffect(() => {
      axios.get(url).then((res) => setCoins(res.data)).catch((err) => console.log(err));;
    }, [url]);

  return coins
}

export default FetchData
