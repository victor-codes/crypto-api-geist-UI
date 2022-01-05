import {
  Description,
  Divider,
  Grid,
  Page,
  Spacer,
  Text,
  Tooltip,
} from "@geist-ui/react";
import { ExternalLink } from "@geist-ui/react-icons";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import styles from "../styles/Home.module.css";
import Search from "./search";

import { ArrowUp } from "@geist-ui/react-icons";
import { ArrowDown } from "@geist-ui/react-icons";

function Asset({ coin }) {
  const {
    name,
    iconUrl: image,
    description,
    links,
    numberOfMarkets,
    price,
    change,
    rank,
    allTimeHigh,
  } = coin;

  let changeInd;
  if (Number(change) < 0) {
    changeInd = false;
  } else {
    changeInd = true;
  }

  return (
    <>
      <Head>
        <title>{name} | Crypto Assets</title>
      </Head>
      <div className={styles.container}>
        <Page.Header>
          <Text h1>
            <Link href="/" passHref>
              <a>Cryto Assets</a>
            </Link>
          </Text>
          <Divider />
        </Page.Header>
        <Page.Content>
          <div className="glex">
            <div className="maxw">
              <Image
                width={300}
                height={300}
                layout="fixed"
                alt={name}
                lazyBoundary="100px"
                src={image}
              />
            </div>
            <div className="maxw2">
              <Text h3>{name}</Text>
              <Divider />
              <Spacer />
              <Grid.Container gap={2}>
                <Grid>
                  <Description title="rank" content={rank} />
                </Grid>
                <Grid>
                  <Description
                    title="Price"
                    content={<div>{trim(price)}</div>}
                  />
                </Grid>
                <Grid>
                  <Description
                    title="change"
                    content={
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          margin: "0",
                          color: `${
                            !changeInd ? "rgb(207, 48, 74)" : "rgb(3, 166, 109)"
                          }`,
                        }}
                      >
                        {changeInd ? (
                          <ArrowUp size={12} />
                        ) : (
                          <ArrowDown size={12} />
                        )}
                        {change}
                      </div>
                    }
                  />
                </Grid>
                <Grid>
                  <Description title="market price" content={numberOfMarkets} />
                </Grid>
                <Grid>
                  <Description
                    title="All time high"
                    content={trim(allTimeHigh.price)}
                  />
                </Grid>
                <Grid>
                  <Description title="Description" content={description} />
                </Grid>
                <Grid>
                  <Description
                    title="Links"
                    content={<AssetLink links={links} />}
                  />
                </Grid>
              </Grid.Container>
            </div>
          </div>
        </Page.Content>
      </div>
    </>
  );
}

export default Asset;

const trim = (str) => {
  let arr = str.split("");
  let index = arr.indexOf(".");
  let newStr = arr.slice(0, index + 3);
  return newStr;
};

const AssetLink = ({ links }) => {
  return (
    <Grid.Container gap={2.5}>
      {links.map((link, id) => (
        <Grid key={id}>
          <p>
            <p style={{ fontSize: 12, color: "#555" }}>
              {link.type.toUpperCase()}
            </p>
            <Tooltip text={link.url} type="dark" >
              <a
                style={{ color: "#333", textTransform: "capitalize" }}
                target="_blank"
                rel="noreferrer"
                href={link.url}
              >
                {link.name} <ExternalLink size={14} />
              </a>
            </Tooltip>
          </p>
        </Grid>
      ))}
    </Grid.Container>
  );
};
