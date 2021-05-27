import Paper from "@material-ui/core/Paper";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles({
  root: {
    
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 50,
    paddingRight: 50
  },
});
const SearchResult = ({ search, result }) => {
      const classes = useStyles();

  return (
    // <div className={classes.root}>
    //   <Paper style={{ height: "50px" }} elevation={3}>
    //     <p style={{ fontSize: "20px", top: "15px" }}>
    //       {"Title: " + search} <br></br> {"Author: " + result}
    //     </p>
    //   </Paper>
      <Card className={classes.root}>
      <Paper style={{ height: "50px" }} elevation={3} paddingLeft={30}>
        <p style={{ fontSize: "20px", top: "50px" }}>
          {"Title: " + search} <br></br> {"Author: " + result}
        </p>
      </Paper>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {search}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              The author of {search} is {result}. Find the book at the options below.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
          <Link href={`https://www.amazon.com/s?k=${encodeURIComponent(
                      search
                    )}+${encodeURIComponent(
                      result
                    )}`}
                    rel="noopener noreferrer"
                    target="_blank">
            Amazon
          </Link>
            
          </Button>
          <Button size="small" color="primary">
          <Link href={`https://www.thriftbooks.com/browse/?b.search=${encodeURIComponent(
                      search
                    )}`}
                    rel="noopener noreferrer"
                    target="_blank">
            Thrift Books
          </Link>
          </Button>
        </CardActions>
      </Card>
    // </div>
  );
};

export default SearchResult;
