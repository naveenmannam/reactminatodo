const express = require('express');
// const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const app = express();

const todoRouter = require('./routes');

const port = process.env.PORT || 5001;
const ip = process.env.IP;
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser());
app.use(cors());


app.use((req, res, next) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'Application/JSON');
  next();
})

app.get('/', (req, res) => {
  res.json({'message':'Express Started'})
});
app.use('/api', todoRouter);

app.get('*', (req, res) => {
  res.statusCode = 404;
  res.send({'Message':'404 Error, Page not Found'});
})

app.listen(port, ip, () => console.log(`Express on port ${port}`));