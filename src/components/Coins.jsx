import React from "react";

function Coins({name, image, current_price, symbol}) {
    return(
        <div className="coin">
            <h1>{name}</h1>
            <img src={image}></img>
            <h2> Price: ${current_price}</h2>
            <h2> Symbol: {symbol}</h2>
        </div>
    );
}

export default Coins;