const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());

const db = mysql.createPool({
    host: "localhost",
    port: "3344",
    user: "root",
    password: "VijayHari@1234",
    database: "resume"

});

 
app.use(express.json());


app.listen(3001, ()=>{
    console.log("You Are Good To Go")
});

app.get('/log',( req ,res) =>{
    const uname = req.body.uname;
    const password = req.body.password; 
    const sqlinsert = "select * from resume.users where username=?"; 
    db.query(sqlinsert, [uname] , function(Error, result) { 
    if (Error) { 
    console.log(Error) 
    }else{ 
    console.log(result) 
    res.send(result) 
    } 
    }); 
   }); 

   app.post("/api/", (req, res) => { 
    const resumeid = req.body.uname;
    const sqlinsert = "SELECT * FROM resume.users WHERE username=?"; 
    db.query(sqlinsert, [resumeid] , function(err, result) { 
    if (err) { 
    console.log(err) 
    }else{ 
    console.log(result) 
    res.send(result) 
    } 
    }); 
   }); 

app.post('/api1/',( req ,res) =>{
    const uname = req.body.uname;
    const password = req.body.password;
    const sqlinsert =   "insert into resume.users (username,password) values(?,?)"
    db.query(sqlinsert,[uname,password],(Error, result) => { 
        if (Error){ 
        console.log(Error); 
        console.log(resumedegey) 
        res.send("usn alredy present delete and re enter details") 
        }else{ 
        res.send("sucess"); 
        console.log(result);} 
        
        
        });
});

