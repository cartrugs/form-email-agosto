const express = require('express');
const bodyParser = require('body-parser');
const path = require('path'); // Importa el módulo path
const routes = require('./routes');
require('dotenv').config();

const app = express();

app.set('view engine', 'ejs'); 
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/', routes);

app.use((req, res, next) => {
    res.setHeader("Content-Security-Policy", "default-src 'self';"); // Esto permite cargar recursos desde el mismo dominio
    next();
  });
  

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`SERVIDOR ${PORT}`);
});
