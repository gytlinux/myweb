var express = require('express'),
    bodyparser = require('body-parser'),
    Cookies = require('cookies'),
    swig = require('swig'),
    logger = require('morgan'),
    path = require('path');
var app = express();

require('dotenv').config();

var createdb = require('./models/mysql');
createdb();

app.use(logger('dev'));
app.use(express.static(path.join(__dirname,'public')));

app.engine("html",swig.renderFile);
app.set("views","./views");
app.set("view engine","html");
swig.setDefaults({cache : false});

app.use(bodyparser.urlencoded({extended:true}));

app.use('/',require('./routes/index'));
app.use('/code',require('./routes/code'));

app.set('port',process.env.PORT||80);
app.set('ip',process.env.IP||'0.0.0.0')
app.listen(app.get('port'),app.get('ip'),function(){
    console.log('Service listening on port '+app.get('ip')+':'+app.get('port'));
    
    });

