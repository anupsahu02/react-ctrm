const express = require("express");
const bodyParser = require("body-parser");
const os = require("os");
const request = require("request");
const base64 = require("base-64");

const app = express();

// parse application/x-www-form-urlencoded
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

// parse application/json
app.use(bodyParser.json());

app.use(express.static("dist"));

app.get("/api/getUsername", (req, res) =>
  res.send({ username: os.userInfo().username })
);

app.get("/api/derivatives", (req, res) => {
  var options = {
    method: "GET",
    url: "http://172.16.0.133:7001/api/derivatives",
    qs: {
      type: "LIST_FUT_TRADES",
      limit: "10",
      start: "0",
      sort: "tradeDate DESC",
      tradeTypeId: "Buy"
    },
    headers: {
      "cache-control": "no-cache",
      authorization:
        "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOlsicmVzdF9hcGkiXSwidXNlcl9uYW1lIjoiYWRtaW4iLCJzY29wZSI6WyJ0cnVzdCIsInJlYWQiLCJ3cml0ZSJdLCJleHAiOjE1NDEwMDA2OTcsImF1dGhvcml0aWVzIjpbIjE3Mi4xNi4wLjEwNiJdLCJqdGkiOiJmYTAxYTcyNi1hNTNlLTRkZDctYmJlMi0yYzU4NWMwMTU4MzYiLCJjbGllbnRfaWQiOiIyIn0.RUS3dsGhnN6OTXSC1e6K1a3hWflI6wCn71e4rOa6Neg",
      accept: "application/json"
    }
  };

  request(options, function(error, response, body) {
    if (error) res.status(500).send(error);

    res.send(body);
  });
});

app.post("/api/authenticate", (req, res) => {
  if (req.body.email && req.body.password) {
    var options = {
      method: "POST",
      url:
        "http://reference.qa2.ekaanalytics.com:2390/cac-security/api/oauth/token",
      qs: { client_id: "2", grant_type: "cloud_credentials" },
      headers: {
        Authorization:
          "Basic " + base64.encode(req.body.email + ":" + req.body.password),
        "cache-control": "no-cache",
        Accept: "application/json"
      }
    };

    request(options, function(error, response, body) {
      if (error) res.status(500).send(error);
      var data = JSON.parse(body);
      if (data.error) res.status(401).send(body);
      else {
        //res.status(200).send(body);
        tokenValidation(data, res);
      }
    });
  } else res.status(500).send("Username and Password parameters mising");
});

function tokenValidation(token, res) {
  var options = {
    method: "POST",
    url:
      "http://reference.qa2.ekaanalytics.com:2390/cac-security/api/oauth/validate_token",
    qs: {
      deviceIdentifier: "1",
      token: token.auth2AccessToken.access_token
    },
    headers: {
      "Postman-Token": "d864373b-e38d-42bf-93af-3aa93476ef46",
      "cache-control": "no-cache",
      Accept: "application/json"
    }
  };

  request(options, function(error, response, body) {
    if (error) throw new Error(error);

    var result = JSON.parse(body);
    result.token = token.auth2AccessToken.access_token;

    res.send(result);
  });
}

app.listen(8080, () => console.log("Listening on port 8080!"));
