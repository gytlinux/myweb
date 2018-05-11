var mysql = require('mysql');

var pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB
    });

var code = {
    insert : "insert into code set title=?,tag=?,createdate=?,abstract=?,body=?;",
    deleteid : "delete from code where id=?;",
    updatecode : "update code set title=?,tag=?,abstract=?,body=? where id=?;",

    findone : "select * from code where id=?;",
    findall : "select * from code order by createdate desc;",
    findallpage : "select * from code order by createdate desc limit ?,?;",

    findtags : "select distinct tag from code;",
    findtagpage : "select * from code where tag=? order by createdate desc limit ?,?;",
    findtag : "select * from code where tag=? order by createdate desc;",

}


module.exports = {
    pool,
    code
    }
