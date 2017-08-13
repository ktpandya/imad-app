var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
 

 
var articleOne = 
     {title : 'KUSH PANDYA ARTICLE 1',
     heading : 'ARTICLE 1',
     content :` <html>
                    <head>
                            <title>
                            KUSH PANDYA ARTICLE 1
                            </title>
                    </head>
                    <body>
                            <h2>
                                 ARTICLE 1  
                            </h2>
                            <p>
                                 HI THIS IS ARTICLE ONE OF KUSH PANDYA
                            </p>    
                    </body>
    
                </html>`
                };
var articletwo =
{title : 'KUSH PANDYA ARTICLE 2',
heading : '' ,
content : `<html>
   <head>
        <title>
                KUSH PANDYA ARTICLE 2
        </title>
        
    </head>
    <body>
        HI THIS IS ARTICLE TWO OF KUSH PANDYA
    </body>
    
</html>`
}


function articles(articleName)
{
title = articleName.title;
heading = articleName.heading;
content = articleName.content;

}
function createtemplate(data)

{
    var title = data.title;
    var heading = data.heading;
    var content = data.content;
    var HTMLtemplate = 
    `    <html>
    <head>
         <title>
                ${title};
         </title>
    </head>
    <body>
         <h2>
             ${heading};
         </h2>
         <p>
             ${content};
         </p>    
    </body>
    
</html>

        
    `;
    return HTMLtemplate;
}
 
 app.get('/articleName',function (req,res){
    res.send(articles(articleName));});
     
 
 /*app.get('/article1', function (req, res){
   res.send(createtemplate(article1));
});

app.get('/article2', function (req, res){
  res.sendFile(path.join(__dirname, 'ui', 'article2.html'));
});

app.get('/article3', function (req, res){
   res.sendFile(path.join(__dirname, 'ui', 'article3.html'));
});*/

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
//System.out.println("hii");