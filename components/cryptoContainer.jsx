import { Grid, Loading } from "@geist-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import CryptoItem from "./crytoItem";

function CryptoContainer({ input, search }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setArr] = useState(false);

  const defaultUrl = "https://api.coinranking.com/v2/coins?limit=16";
  const searchUrl = `https://api.coinranking.com/v2/coins?search=${input}`;

  useEffect(() => {
    axios({
      url: input === "" ? defaultUrl : searchUrl,
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
  }, [loading, search]);

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
