var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
 

/*var article ;{
    article_1 :{title = 'KUSH PANDYA ARTICLE 1';
     heading = 'ARTICLE 1';
     content =` <html>
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
    
                </html>`;
                }
    article_2 : {
title : 'KUSH PANDYA ARTICLE 2';
heading : 'ARTICLE2' ;
content : `<html>
   <head>
        <title>
                KUSH PANDYA ARTICLE 2
        </title>
        
    </head>
    <body>
       <h2>ARTICLE2
       </h2>
       <p> HI THIS IS ARTICLE TWO OF KUSH PANDYA
    </p>
    </body>
    
</html>`;

}
    article_3 :{
      title : 'KUSH PANDYA ARTICLE 3';
      heading : 'ARTICLE 3';
      content : `<html>
    <head>
        <title>
                KUSH PANDYA ARTICLE 3
        </title>
        
    </head>
    <body>
       <h2>ARTICLE 3 
       </h2>
         
        HI THIS IS ARTICLE THREE OF KUSH PANDYA
    </body>
    
</html>`;
        
        
    }

}

function createtemplate(data){
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
         
           <p>  ${content};
            </p>
    </body>
    
</html>
    `;
    return HTMLtemplate;
}
 
 app.get('/: article_Numb',function (req,res){
    var article_Numb = req.params.article_Numb;
    res.send(createtemplate(article_Numb));});*/
var counter = 0;
app.get('/counter', function (req, res)
{
counter = counter++;
res.send(counter.toString());
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
//System.out.println("hii");