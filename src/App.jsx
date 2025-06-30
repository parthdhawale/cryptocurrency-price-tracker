import "./App.css";
import {useEffect, useState} from 'react'
import Axios from "axios";
import Coin from "./components/Coins"
 
function App() {

  const [listOfCoins, setListOfCoins] = useState([])
  const [searchWord, setSearchWord] = useState("");

  useEffect( () => {
    Axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd").then(
      (response) => {
        setListOfCoins(response.data);
      }
    );
  }, []);


  const filteredCoins = listOfCoins.filter((coin) => {
    return coin.name.toLowerCase().includes(searchWord.toLowerCase());
  });

  return( <div className="App">
    <div className="cryptoHeader">
      <input type="text" placeholder="Coin Name" onChange={(event) => {setSearchWord(event.target.value)}}></input>
    </div>
    <div className="cryptoDisplay">
      {filteredCoins.map((coin) => {
        return (
        <Coin 
        name={coin.name} 
        image={coin.image} 
        current_price={coin.current_price} 
        symbol={coin.symbol}
        />
        );
      }
      )}</div>
  </div>
  )
}

export default App;