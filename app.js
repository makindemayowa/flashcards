const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const routes = require('./routes')
const cardRoutes = require('./routes/cards')

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/public', express.static('public'))

app.set('view engine', 'pug');

app.use(routes);
app.use('/cards', cardRoutes);

app.get('*', (req, res) => {
  const { name } = req.cookies
  res.status(404).send('Page not found')
})

app.listen(3000, () => {
  console.log('app is listening on port 3000')
})