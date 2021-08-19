import TextField from "@material-ui/core/TextField";
import { SearchOutlined } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/";
import { Button } from "@material-ui/core";
import { useState } from "react";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "600px",
    },
  },
}));
const Searchbar = () => {
  const classes = useStyles();
  const [search, setSearch] = useState("");
  //   function handleSearch(e) {
  //     e.preventDefault();
  //     setSearch(e.target.value());
  //   }

  return (
    <div
      className={classes.root}
      style={{
        display: "flex",
        margin: "auto",
        width: "100%",
        // position: "fixed",
      }}
      noValidate
      autoComplete="off"
    >
      <div style={{ padding: "15px", display: "flex", margin: "auto" }}>
        <TextField
          style={{ width: "100%" }}
          id="filled-secondary"
          label="Search"
          variant="filled"
          color="primary"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          typeof="submit"
        />{" "}
        <Button style={{ backgroundColor: "white" }} variant="contained">
          {" "}
          <SearchOutlined></SearchOutlined>{" "}
        </Button>
      </div>
    </div>
  );
};

export default Searchbar;
