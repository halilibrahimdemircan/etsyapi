const { default: axios, Axios } = require("axios");
const { count } = require("console");
const express = require("express");
const app = express();
const port = 8000;
let url = "https://openapi.etsy.com/v3/application/listings/active";

app.get("/", async (req, res) => {
  //   res.send("Hello World!");

  let taxonomy_id = 66;
  let min_price = 0.976;
  let gap = 0.0111;
  let count = 1;
  for (let index = 0; index < count; index++) {
    await axios
      .get(
        `https://openapi.etsy.com/v3/application/listings/active?taxonomy_id=${taxonomy_id}&min_price=${min_price}&max_price=${
          min_price + gap
        }`,
        {
          headers: {
            "x-api-key": "uyd8c07q7pcf6wf2qjrbefp3",
          },
        }
      )
      .then((response) => {
        console.log(min_price, "-", min_price + gap, " ", response.data.count);
        min_price += gap;

        count = response.data.count;
      })
      .catch((err) => console.log("error", err.data.error));
  }
  JSC.Chart("chartDiv", {});
});

app.listen(port, () => {
  console.log(`Etsyapi listening on port ${port}!`);
});
