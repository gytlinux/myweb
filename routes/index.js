var express = require('express');
var dbsql = require('../models/mysql');

var router = express.Router();
var codedata={}

router.use(function(req,res,next){

    dbsql.pool.getConnection(function(err,con){
        if (err) {console.log(err)};
        con.query(dbsql.code.findtags,function(err,data){
            codedata.category = data;
            con.release();
            next();
        });
    })
})

router.get('/',function(req,res){
  codedata.page = Number(req.query.page || 1);
  codedata.limit = 10;
  codedata.pages = 0;

  dbsql.pool.getConnection(function(err,con){
      if (req.query.tag) {
        codedata.tag = req.query.tag;
        con.query(dbsql.code.findtag,req.query.tag,function(err,data){
          
          if (err) {console.log(err)}            
            codedata.count = data.length
            codedata.pages = Math.ceil(codedata.count / codedata.limit);
            codedata.page = Math.min(codedata.page,codedata.pages);
            codedata.page = Math.max(codedata.page,1);
            var skip = (codedata.page - 1) * codedata.limit

            con.query(dbsql.code.findtagpage,[req.query.tag,skip,codedata.limit],function(err,data){
              if (err) {console.log(err)};
              codedata.articles = data;                        
              res.render('show/index',codedata);
              con.release();
              });
          });
        }else{
          con.query(dbsql.code.findall,function(err,data){
            if (err) {console.log(err)}
            codedata.count = data.length
            codedata.pages = Math.ceil(codedata.count / codedata.limit);
            codedata.page = Math.min( codedata.page, codedata.pages );
            codedata.page = Math.max( codedata.page, 1 );
            var skip = (codedata.page - 1) * codedata.limit

            con.query(dbsql.code.findallpage,[skip,codedata.limit],function(err,data){
              if (err) {console.log(err)};
              codedata.articles = data;
              res.render('show/index',codedata);
              con.release();
              });
          });
        }
  });
});

router.get('/page',function(req,res){
    var id = req.query.contentid
    dbsql.pool.getConnection(function(err,con){
        if (err) {console.log(err)};
        con.query(dbsql.code.findone,id,function(err,data){
            if (err) {console.log(err)};
            codedata.content = data[0];
            res.render('show/page',codedata);
            con.release();
        });
    })

});

module.exports = router;
