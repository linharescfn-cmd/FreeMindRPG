const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const pageRoutes = require('./routes/pageRoutes');

const app = express();

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, '..', 'views'));

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(pageRoutes);

module.exports = app;
