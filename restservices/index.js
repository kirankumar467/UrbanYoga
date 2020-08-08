const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.text());
const port = process.env.REST_SERVICE_PORT || 8081;

mongoose.connect(
  'mongodb://localhost:27017/urbanyoga', { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
)

const db = mongoose.connection;

db.on('error', error => {
  throw new Error('Error while connecting to db')
})

db.once('open', () => console.log('Connected to database'));

app.listen(port, () => {
  console.log(`Rest server running on ${port}`);
});

const { businessOverviewRouter } = require('./routes/businessOverviewRouter')();
app.use('/businessoverview', businessOverviewRouter);
app.all('*', (req, res) => {
  const error = {
    status: 404,
    message: `Requested route ${req.method} ${req.originalUrl} failed: route error`,
    data: `Requested route ${req.method} ${req.originalUrl} Not Found.`
  }
  res.status(404).send(error);
  console.log(new Date(),  `INFO  routing, ${JSON.stringify(error)}`);
});
