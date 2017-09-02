var username = document.getElementById('username');
var password = document.getElementById('password');
pool.query('SELECT * FROM "user" WHERE username ='+username ,function(err,result){
    if (err)
    {res.send('no user'+username);
    }
   else
   {pool.query('SELECT *FROM "user" WHERE password = '+dbString , function(err,result){
       if(err){
           res.send('incorrect password');
       }
       else{
           var R3sult = result.rows[0]; 
           res.send(R3sult);
       }
   });
       
   }
});