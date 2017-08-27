var express = require('express');
var morgan = require('morgan');
var path = require('path');
var pool = require('pg').Pool
var app = express();
app.use(morgan('combined'));


var config = {
    user :'shravansaini94',
    database:'shravansaini94',
    host :'http://db.imad.hasura-app.io',
    port  :'5432',
    password:process.env.DB_PASSWORD
    
};
var pool = new Pool(config);

var articles =
{
    'article-one' : {
        title:'Article One | shravan saini',
        heading : 'Article One',
        date : '05/08/1995',
        content : `
                     <p>
                        This is Article one.This is Article one.This is Article one.This is Article one.This is Article one.This is Article one.This is Article one.This is Article one.This is Article one.This is Article one.This is Article one.This is Article one.This is Article one.This is Article one.This is Article one.This is Article one.This is Article one.This is Article one.This is Article one.
                    </p>
                    <p>
                        This is Article one.This is Article one.This is Article one.This is Article one.This is Article one.This is Article one.This is Article one.This is Article one.This is Article one.This is Article one.This is Article one.This is Article one.This is Article one.This is Article one.This is Article one.This is Article one.This is Article one.This is Article one.This is Article one.
                    </p>
                    <p>
                        This is Article one.This is Article one.This is Article one.This is Article one.This is Article one.This is Article one.This is Article one.This is Article one.This is Article one.This is Article one.This is Article one.This is Article one.This is Article one.This is Article one.This is Article one.This is Article one.This is Article one.This is Article one.This is Article one.
                    </p> `
    },
     'article-two' : {
         title:'Article Two | shravan saini',
        heading : 'Article Two',
        date : '15/08/1995',
        content : `     This is Article one.This is second Article. `
     },
     'article-three' : {
         title:'Article Three | shravan saini',
        heading : 'Article Three',
        date : '25/08/1995',
        content : `     This is Article three.This is third Article. `
     },
     
    
    
};

function createTemplate(data)
{
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;
    
    var htmlTemplate = `
    <html>
        <head>
            <title>
                ${title}
            </title>
            <meta name="viewport" content="width=device-width,initial-scale" />
            <link rel="stylesheet" type="text/css" href="/ui/style.css" />
            
        </head>
    
        <body>
            <div class ="container">
                <div>
                    <a href="/" >Home</a>
                </div>
                <hr/>
                <h3>
                    ${heading}
                </h3>
                <div>
                    ${date}
                </div>
                <div>
                    ${content}
                </div>
            </div>
        </body>
    </html>`

    return htmlTemplate;
}

var counter=0;
app.get('/counter', function(req,res)   {
   counter= counter+1;
   res.send(counter.toString());
});

app.get('/test',function(req,res){
   
   pool.query('SELECT * from article', function(err,result){
       if(err)
       {
           res.status(505).send(err.toString());
       }
       else
       {
           
           res.send(createTemplate(result));
       }
   });
    
});
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});


app.get('/articles/:articleNames',function(req,res)    {
    var articleNames=req.params.articleNames;
    
  res.send(createTemplate(articles[articleNames]));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});




