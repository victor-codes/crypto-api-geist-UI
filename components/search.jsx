import { Button, Grid, Input, useInput } from "@geist-ui/react";
import React, { useMemo } from "react";
import { Search as SearchIcon } from "@geist-ui/react-icons";

function Search({ state, setState, bindings, search }) {
  return (
    <Grid.Container gap={1}>
      <Grid xs={21} width={100}>
        <Input
          {...bindings}
          icon={<SearchIcon />}
          width={"100%"}
          scale={1}
          onChange={(e) => {
            setState(e.target.value);
          }}
          onBlur={() => {
            if (state.length < 1) {
              search(false);
            }
          }}
          placeholder="Search For Crypto Assets"
        />
      </Grid>
      <Grid xs={3} width={"100%"}>
        <Button
          onClick={() => {
            if (state.length > 1) {
              search(true);
            } else {
              search(false);
            }
          }}
          scale={0.75}
          style={{ width: "100%" }}
          auto
          type="secondary"
        >
          Search
        </Button>
      </Grid>
    </Grid.Container>
  );
}

export default Search;
