const express = require("express");
const mysql = require("mysql");
const myconnection = require("express-myconnection")
const validar = require("./library/validar")
const fs = require ("fs")
var cors = require('cors')

const app = express();
const json_data =fs.readFileSync("./dbs.json", "utf-8")
const data = JSON.parse(json_data)
app.use(cors())
app.use(express.json())

// Database connection
app.use(myconnection(mysql, {
    host: "sql10.freemysqlhosting.net",
    user:"sql10482142",
    password:"r3ddPgZWQR",
    database:"sql10482142"
}, "single"))
 


app.get("/", ( req ,res )=>{
    
    res.send("im alive :D")
})

app.get("/all", ( req ,res )=>{
    fs.writeFileSync("./dbs.json", "[]", "utf-8")
    req.getConnection((error, connection)=>{
        if(error)console.log(error);
        connection.query("SELECT * FROM formulario", (err, rows)=>{
            if(err){res.send(err);}
            else
            res.send(rows)
        })
    })
})

app.delete("/all", ( req ,res )=>{

    req.getConnection((error, connection)=>{
        if(error)console.log(error);
        connection.query("DELETE FROM formulario", (err, rows)=>{
            if(err){res.send(err);}
            else
            res.send("All rows deleted")
        })
    })
})

app.post("/post", ( req,res )=>{
    const valid = validar(req.body)

    if(valid){

        data.push(req.body)
        const jsonData = JSON.stringify(data)
        fs.writeFileSync("./dbs.json", jsonData, "utf-8")
        req.getConnection((error, connection)=>{
            if(error)consolelog(error);
            connection.query(`INSERT INTO formulario set ?`, req.body , (err, rows)=>{
                if(err){res.send(err);}
                else
                res.send(rows)
            })
        })
    }
    else{
        res.send({message:"Algo anda mal"})

    }
     
})

//listener
app.listen(8080, ()=>{
    console.log("server listening at port: 8080")
})