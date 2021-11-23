const { default: axios, Axios } = require("axios");
const express = require("express");
const app = express();
const port = 8000;
let url = "https://openapi.etsy.com/v3/application/listings/active";

app.get("/", (req, res) => {
  //   res.send("Hello World!");
  let min_price = 0;
  let max_price = 0.5;
  let taxonomy_id = 66;
  let count = 0;

  for (let index = 0; index < 100; index++) {
    axios
      .get(
        url +
          `?taxonomy_id=${taxonomy_id}&min_price=${min_price}&max_price=${max_price}`,
        {
          headers: {
            "x-api-key": "uyd8c07q7pcf6wf2qjrbefp3",
          },
        }
      )
      .then((response) => {
        count = response.data.count;
        console.log(min_price, "-", max_price, "=> ", count);
        min_price += 0.5;
        max_price += 0.5;
      });
  }
});

app.listen(port, () => {
  console.log(`Etsyapi listening on port ${port}!`);
});
