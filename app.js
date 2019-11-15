const express = require('express');
const path = require('path');
const app = express();

const index = require('./routes/index');
// middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', index);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// routes
// app.get('/', (req, res) => {
//     res.render('index', { title: 'Express' });
// });
// listening
app.listen(8085);