var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool
var app = express();
app.use(morgan('combined'));
var config = {
    user :'shravansaini94',
    database:'shravansaini94',
    host :'db.imad.hasura-app.io',
    port  :'5432',
    password:'db-shravansaini94-99413'
    
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


//creating a pool connection
var pool = new Pool(config);

app.get('/articles/:articleName',function(res,req){
    var articleName=req.params.articleName;
   pool.query("SELECT * FROM articles WHERE title='"+article-one+"'",function(err,result){
       if(err)
       {
           res.status(500).send(err.toString());
           
       }
       else
       {
            if(result.rows.length===0)
            {
                res.status(404).send("Article not found");
            }
            else
            {
                res.send(createTemplate(result.rows[0]));
            }
       }
       
   }) ;
});

app.get('/testdb',function(req,res){
   
   pool.query('SELECT * FROM test',function(err,result){
       if(err)
       {
           res.status(509).send(err.toString());
       }
       else
        {
            res.send(JSON.stringify(result));
        }
   });
  
});

var counter=0;
app.get('/counter', function(req,res)   {
   counter= counter+1;
   res.send(counter.toString());
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var names = [];
app.get('/submit-name',function(req,res){
   //get the names from the input area
    var name = req.query.inputarea;
    names.push(name);
    res.send(JSON.stringify(names));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
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




