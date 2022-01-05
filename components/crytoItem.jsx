/* eslint-disable @next/next/no-img-element */
import { Card, Grid, Text } from "@geist-ui/react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { ArrowUp } from "@geist-ui/react-icons";
import { ArrowDown } from "@geist-ui/react-icons";

function CryptoItem({ name, price, change, symbol, image, uuid }) {
  let changeInd;
  if (Number(change) < 0) {
    changeInd = false;
  } else {
    changeInd = true;
  }
  return (
    <Link href={`/assets/[id]`} as={`/assets/${uuid}`} passHref>
      <a>
        <Grid xs={6}>
          <Card width={"200px"} hoverable>
            <Card.Content>
              <Image
                width="32px"
                height="32px"
                layout="fixed"
                alt={name}
                lazyBoundary="10px"
                src={image}
                className="img"
              />
              <div className="flex">
                <Text p font="12px" style={{ margin: "0", color: "#333" }}>
                  {symbol}
                </Text>
                <Text font="12px" style={{ margin: "0", color: "#333" }} p>
                  {trim(price)}
                </Text>
              </div>
              <div className="flex2">
                <Text
                  font="14px"
                  h4
                  style={{ margin: 0, color: "#333", fontWeight: 500 }}
                >
                  {name}
                </Text>
                <Text
                  font="12px"
                  p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    margin: "0",
                    color: `${
                      !changeInd ? "rgb(207, 48, 74)" : "rgb(3, 166, 109)"
                    }`,
                  }}
                >
                  {changeInd ? <ArrowUp size={12} /> : <ArrowDown size={12} />}
                  {change}
                </Text>
              </div>
            </Card.Content>
          </Card>
        </Grid>
      </a>
    </Link>
  );
}

export default CryptoItem;

const trim = (str) => {
  let arr = str.split("");
  let index = arr.indexOf(".");
  let newStr = arr.slice(0, index + 3);
  return newStr;
};
