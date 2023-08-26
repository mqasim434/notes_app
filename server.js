// app.js
const express = require('express');
const bodyParser = require('body-parser');

const router = require('./Routes/routes');
const dbConnect = require("./Database/index");

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(router);
app.use(express.json);
dbConnect();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
