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

app.post('/login',( req ,res) =>{
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

