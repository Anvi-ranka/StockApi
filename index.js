const express    = require('express');
const bodyParser = require('body-parser');
const fetch      = require('node-fetch');

const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.get('/', (req,res) => {
  res.sendFile(__dirname +  "/web.html");
});

app.post('/id', (req,res) => {
    var symbol_ = req.body.ssymbol;
    var option_ = req.body.options;
    const API_KEY ='2DJ28WBDOFEOC4V8';

    if(option_==="DAILY"){
      let API_CALL = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol_}&apikey=${API_KEY}`;
      res.setHeader('Content-Type', 'application/json');
      fetch(API_CALL)
      .then(function(response){
        return response.json();
      })
      .then(function(data){
        res.send(data);
      })
    }


    else if(option_==="WEEK"){
      let API_CALL = `https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=${symbol_}&apikey=${API_KEY}`;
      res.setHeader('Content-Type', 'application/json');
      fetch(API_CALL)
      .then(function(response){
        return response.json();
      })
      .then(function(data){
        res.send(data);
      })
    }


    else if(option_==="MONTH"){
      let API_CALL = `https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=${symbol_}&apikey=${API_KEY}`;
      res.setHeader('Content-Type', 'application/json');
      fetch(API_CALL)
      .then(function(response){
        return response.json();
      })
      .then(function(data){
        res.send(data);
      })
    }
  });



const port = process.env.port || 3000;
app.listen(port, () => console.log(`listening to ${port}`));
