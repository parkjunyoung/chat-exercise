import express from 'express';
import path from 'path';
import logger from 'morgan';
import ejs from 'ejs';

const app = express();
 
let port = 3000;

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});

// logger
app.use(logger('dev'));

const server = app.listen(port, () => {
    console.log('Express listening on port', port);
});

