var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles =
{
     articleOne : {
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
     articleTwo : {
         title:'Article Two | shravan saini',
        heading : 'Article Two',
        date : '15/08/1995',
        content : `     This is Article one.This is second Article. `
     },
     articleThree : {
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



app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName',function(req,res)    {
    res.send(createTemplate(articles[articleName]));
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




