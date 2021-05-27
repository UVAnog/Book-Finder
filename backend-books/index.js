// setting up the server
let axios = require("axios");
const express = require("express");
const cors = require("cors");
const app = express();

// using cors to get past HTTP restrictions
app.use(cors());

// performing the search, the main function of the whole shit
app.get("/book/", cors(), (req, res) => {
  const title = req.query.title;
  //link to api documentation and use https://developers.google.com/books/docs/v1/using
  axios
    .get("https://www.googleapis.com/books/v1/volumes", {
      params: {
        q: title,
      },
    })
    .then((response) => {
      // if not successful
      if (response.status !== 200) {
        res.send("Request to the server failed.");
      }
      // if successful send the info to the api request
      else {
        res.send(response.data.items[0].volumeInfo.authors[0]);
      }
    })
    // send an error if there is one
    .catch((err) => {
      res.send(err);
    });
});

// actually didn't know what this was for but found this
// https://www.geeksforgeeks.org/express-js-app-listen-function/#:~:text=The%20app.,is%20identical%20to%20Node's%20http.&text=The%20app%20returned%20by%20express,a%20callback%20to%20handle%20requests.
// but basically app.listen() is used to bind and listen the connections on the specified host and port.
app.listen(3001, () => {
  console.log("Server started on port 3001");
});
