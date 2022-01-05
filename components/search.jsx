import { Button, Grid, Input, useInput } from "@geist-ui/react";
import React from "react";
import { Search as SearchIcon } from "@geist-ui/react-icons";

function Search() {
  const { state, setState, bindings } = useInput("");
  return (
    <Grid.Container gap={1}>
      <Grid xs={21} width={100}>
        <Input
          {...bindings}
          icon={<SearchIcon />}
          width={"100%"}
          scale={1}
          placeholder="Search For Crypto Assets"
        />
      </Grid>
      <Grid xs={3} width={"100%"}>
        <Button scale={0.75} style={{ width: "100%" }} auto type="secondary">
          Search
        </Button>
      </Grid>
    </Grid.Container>
  );
}

export default Search;
