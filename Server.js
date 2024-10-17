const express = require('express')
const app = express();
const db = require('./mongoose')
const person = require('./Models/Person')
const menu = require('./Models/Manu')
require('dotenv').config();
const PORT = process.env.PORT;



// Body Parser 
const bodyParser = require('body-parser');
const Person = require('./Models/Person');
const Manu = require('./Models/Manu');

app.use(bodyParser.json());

app.listen(PORT , ()=>{
    console.log(`Server run in ${PORT} port`)
})

// All get req

app.get('/',function (req , res) {
    res.send("Kreet is here");
}) 

// PersonData
const PersonRout = require('./Routes/personRoutes')

app.use('/person',PersonRout)


// MenuData

const MenuData = require('./Routes/menuRoutes')
app.use('/menu',MenuData);









app.get("*",(req, res)=>{
        res.send("404 Page is not found")
        })
        