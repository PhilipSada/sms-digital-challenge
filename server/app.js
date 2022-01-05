const express = require('express');
const cors = require('cors');
const app = express();
const {Information} = require('./models');
const db = require('./models');
require('dotenv').config()

const port = 8080;

app.use(express.json())

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // For local development
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//Creates the information table in the schema in mysql
db.sequelize.authenticate()
.then(()=> {
    console.log('Database connected')
    app.listen(port, ()=>{
        console.log('Runing server started on port'+ port)
    })
}).catch(err => console.log('Error:' + err))

  
app.get('/', (req, res) => res.send('INDEX'));

// get the information
app.get('/info', (req, res) => {
    
    Information.findAll().then(
        info => {
            res.send(info)
        }
    ).catch(err => console.log(err))
});

