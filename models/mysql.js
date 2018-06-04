var mysql = require('mysql');
 
module.exports = function createdb() {

db = mysql.createConnection({
    host : process.env.MYSQL_HOST,
    user : process.env.MYSQL_USER,
    port : process.env.MYSQL_PORT,
    password: process.env.MYSQL_PASSWORD
    });

var base = process.env.MYSQL_DB;

var code = `create table if not exists code(
             id int not null auto_increment,
             title varchar(100) not null,
             tag varchar(100) not null,
             createdate char(100) not null,
             abstract varchar(500) not null,
             body longtext not null,
             primary key ( id, title )
             ) default charset=utf8;`

var tables = [code]

db.connect(function(err){
    if (err) {
        console.log(err);
    } else {
        db.query("create database if not exists "+base+" default character set utf8 collate utf8_general_ci",function(err){
            if (err){console.log(err)};
            db.query("use "+base,function(err){
                if (err){console.log(err)};
                for (i=0;i<tables.length;i++){
                    db.query(tables[i],function(err){
                        if (err){console.log(err)};
                        }); 
                };
                db.end();               
            });
        });
    }
})

}
