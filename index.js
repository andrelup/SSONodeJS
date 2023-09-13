// import libraries
const express = require("express");
var bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Ruta para servir el archivo HTML
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/frontend/index.html');
});

app.post('/login', function (req, res) {
  console.log(req.body);
  // answer to the client
  res.send('POST request to homepage')
})


app.listen(3000);
