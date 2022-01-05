import Asset from "../../components/asset";
import React from "react";

function Assets(props) {
  return <Asset coin={props} />;
}

export default Assets;

export async function getStaticPaths() {
  const res = await fetch("https://api.coinranking.com/v2/coins").then(
    (resp) => {
      return resp.json();
    }
  );

  const paths = await res.data.coins.map((id) => ({
    params: {
      id: id.uuid,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const coin = await fetch(
    `https://api.coinranking.com/v2/coin/${params.id}`
  ).then((resp) => resp.json());

  return {
    props: { ...coin.data.coin },
  };
}
