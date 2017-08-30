var express = require('express');
var morgan = require('morgan');
var path = require('path');

var Pool = require('pg').Pool;
var config={
    user : 'kushpandya69',
    database : 'kushpandya69',
    host : 'db.imad.hasura-app.io',
    port: 5432,
    password: process.env.DB_PASSWORD,
};
var app = express();

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.use(morgan('combined'));
/*var articles={
    articleOne:
    {
    title : 'KUSH PANDYA ARTICLE 1',
     heading : 'ARTICLE 1',
     content :`<html>
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
    
                </html>`,
    },
    articleTwo:
    {
                title : 'KUSH PANDYA ARTICLE 2',
                heading : 'ARTICLE2',
                content :`<html>
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
    
                        </html>`,

                 },
    articleThree:
    {
                title: 'KUSH PANDYA ARTICLE 3',
                heading: 'ARTICLE 3',
                content :`<html>
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
    
                            </html>`,
                  
        
                 },
};*/
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
var Pool = new Pool(config);
app.get('/articles/articleName',function (req,res){    Pool.query("SELECT * FROM article WHERE title =" +req.params.articleName ,function(err,result){
         if (err)
        {res.status(500).send(err,toString);
         
     }
        else
        {
            if (result.rows.length ===0)
            {res.status(404).send('ARTICLE not found');
                
            }
            else
            {var articleData = result.rows[0];
            
                res.send(createTemplate.articledata);
            }
     }
    });
});
app.get('/:articleName',function (req,res){
    var articleName = req.params.articleName;
    res.send(createtemplate(articles[articleName]))});
app.get('/ui/style.css', function (req, res){
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/main.js', function (req, res){
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