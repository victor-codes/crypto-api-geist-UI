import { Divider, Page, Spacer, Grid, Text, useInput } from "@geist-ui/react";
import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import CryptoContainer from "../components/cryptoContainer";
import Search from "../components/search";
import styles from "../styles/Home.module.css";

export default function Home() {
  const { state, setState, bindings } = useInput("");
  const [search, setSearch] = useState(false);

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
          <Search
            state={state}
            setState={(e) => setState(e)}
            bindings={bindings}
            search={(e) => setSearch(e)}
          />
        </Page.Header>
        <Page.Content>
          <Text h3>Assets</Text>
          <Divider />
          <Spacer />
          <CryptoContainer input={state} search={search} />
        </Page.Content>
      </main>
    </div>
  );
}
