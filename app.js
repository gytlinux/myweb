var express = require('express'),
    bodyparser = require('body-parser'),
    Cookies = require('cookies'),
    swig = require('swig'),
    path = require('path');
var app = express();

require('dotenv').config();

var basetest = require('./models/basetest');
basetest();

app.use(express.static(path.join(__dirname,'public')));

app.engine("html",swig.renderFile);
app.set("views","./views");
app.set("view engine","html");
swig.setDefaults({cache : false});

app.use(bodyparser.urlencoded({extended:true}));

/*app.use( function(req, res, next) {
    req.cookies = new Cookies(req, res);

        req.userInfo = {};
        if(req.cookies.get('userInfo')){
            var str1 = req.cookies.get('userInfo');
            req.userInfo=JSON.parse(str1);
            User.findById(req.userInfo._id).then(function(userInfodata){
            req.userInfo.isadmin = Boolean(userInfodata.isadmin);
            });
        }
        next();

});
*/
app.use('/',require('./routes/index'));
app.use('/admin',require('./routes/admin'));
//app.use('/api',api);


app.set('port',process.env.PORT||80);
app.set('ip',process.env.IP||'0.0.0.0')
app.listen(app.get('port'),app.get('ip'),function(){
    console.log('Service listening on port '+app.get('ip')+':'+app.get('port'));
    
    });

