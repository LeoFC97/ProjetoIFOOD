const exprees= require('express');//imports
const bodyParser= require('body-parser'); //imports

const app = exprees(); // init

module.exports = app; //exportando o app para o resto do projeto

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

module.exports = app;