require('dotenv').config();
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
const app = express();
const product = require("./api/product");

app.use(express.json({ extended: false }));

var blockRouter = require('./routes/block');
app.use('/blok', blockRouter);
app.use("/api/product", product);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));
