require('./Models/db');

const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const bodyparser = require('body-parser');

const CandidateController = require('./Controllers/CandidateController');

var app = express();
app.use(bodyparser.urlencoded({
    extended : true
}))
app.use(bodyparser.json());

app.set('views', path.join(__dirname, 'views'));
//console.log('hello');
app.engine('.hbs', exphbs({ extname: '.hbs', defaultLayout: 'mainLayout', layoutsDir: __dirname + '/views/layouts/' }) );
app.set('view engine', '.hbs');

app.listen(process.env.port || 3000, () => {
    console.log('Express Server Started at Port : 3000')
});

app.use('/Candidate', CandidateController);

 