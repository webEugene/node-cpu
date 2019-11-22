const express = require('express');
const sassMiddleware = require('node-sass-middleware');
const postcssMiddleware = require('postcss-middleware');
const autoprefixer = require('autoprefixer');
const path = require('path');
const app = express();

const index = require('./routes/index');
// middleware
app.use(
    sassMiddleware({
        src: __dirname + '/sass', 
        dest: __dirname + '/public/stylesheets',
        debug: true,
        // outputStyle: 'compressed',
        prefix:  '/stylesheets'   
    })
 );
//  app.use(postcssMiddleware({
//     plugins: [
//       /* Plugins */
//       autoprefixer({
//         prefixes: {flexbox: true}
//       })
//     ],
//     src: function(req) {
//       return path.join(__dirname + '/sass', req.url);
//     }
//   }));

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