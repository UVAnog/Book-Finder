import { useState } from "react";
import axios from "axios";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import SearchResult from "./bookFound";
import { makeStyles } from "@material-ui/core/styles";

const Search = (props) => {
  const [value, setValue] = useState("");
  const [results, setResults] = useState(null);
  const [changed, setChanged] = useState(true);

  const handleSearch = () => {
    axios
      .get("http://localhost:3001/book", {
        params: {
          title: value,
        },
      })
      .then((res) => {
        setChanged(false);
        setResults(res.data);
      })
      .catch((err) => {
        console.log("There was an error");
      });
  };
  const useStyles = makeStyles({
    root: {
        paddingTop: 50,
        
      
    },
    search: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        
    }
  });
  const classes = useStyles();
  return (
    <div className={classes.root}>
    <div className={classes.search}>
      <TextField
        className={classes.search}
        id="outlined-basic"
        label="Search Book Title"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          setChanged(true);
        }}
      />
      <Button
      type="submit"
        className={classes.search}
        style={{ marginLeft: "20px", top: "10px" }}
        variant="contained"
        color="primary"
        onClick={handleSearch}
      >
        Search
      </Button>
    </div>
      {results !== null && !changed && (
        <SearchResult search={value} result={results} />
      )}
    </div>
  );
};

export default Search;
