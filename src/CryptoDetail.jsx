import React from "react";
import { useParams } from "react-router-dom";

function CryptoDetail() {
  // Here name of the parameter should be same as supplied in Route.
  const { cryptoSymbol, id } = useParams();
  console.log({ cryptoSymbol });
  return (
    <div>
      <h4>CyrptoDetail</h4>
      <p>Symbol : {cryptoSymbol}</p>
      <p>Id : {id}</p>
    </div>
  );
}

export default CryptoDetail;
