import { Grid, Loading } from "@geist-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import CryptoItem from "./crytoItem";

function CryptoContainer() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setArr] = useState(false);
  const [limit, setLimit] = useState(0);


  useEffect(() => {
    axios({
      url: "https://api.coinranking.com/v2/coins?limit=16",
      method: "get",
    }).then((res) => {
      if (res.status === 200) {
        setData(res.data.data.coins);
        setLoading(false);
      } else {
        setArr(true);
      }
    });
    return () => {
      setLoading(false);
    };
  }, [loading]);

  if (err) {
    return null;
  }
  if (loading) {
    return <Loading gap={2.5} />;
  }
  return (
    <Grid.Container gap={2} justify="center">
      {data.map((coin, id) => (
        <CryptoItem
          key={id}
          id={coin.id}
          symbol={coin.symbol}
          change={coin.change}
          name={coin.name}
          price={coin.price}
          image={coin.iconUrl}
          uuid={coin.uuid}
        />
      ))}
    </Grid.Container>
  );
}

export default CryptoContainer;
