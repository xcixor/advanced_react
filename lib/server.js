import express from 'express';
import config from'./config';

const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res)=> {
  res.render('index', {name: 'peter sasa poa'});
});

app.listen(config.port, function listenHandler(){
  console.info(config.port);
});
