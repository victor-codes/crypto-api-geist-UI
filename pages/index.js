import { Divider, Page, Spacer, Grid, Text } from "@geist-ui/react";
import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import CryptoContainer from "../components/cryptoContainer";
import Search from "../components/search";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Crypto Assets</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Page.Header>
          <Text h1>
            <Link href="/" passHref>
              <a>Cryto Assets</a>
            </Link>
          </Text>
          <Search />
        </Page.Header>
        <Page.Content>
          <Text h3>Assets</Text>
          <Divider />
          <Spacer />
          <CryptoContainer />
        </Page.Content>
      </main>
    </div>
  );
}

// export async function getStaticProps() {
//   let data = axios.get("https://api.coincap.io/v2/assets").then((res) => {
//     res.data;
//   });
//   return {
//     props: {
//       data: { ...data },
//     },
//   };
// }
