const path = require('path');
const express = require('express');
const routes = require('./routes/');

const server = () => {
  const viewsPath = path.join(__dirname, '../views');
  const publicPath = path.join(__dirname, '../public');
  const app = express();
  const router = express.Router();
  app.use(express.json());
  app.use(express.urlencoded({
    extended: true
  }));
  app.set('view engine', 'ejs');
  app.set('views', viewsPath);
  app.use(express.static(publicPath));
  app.use(routes(router));
  return app;
}

module.exports = server;
