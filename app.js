/********************************************************************************* 
*  WEB322 – Assignment 6 
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.   
*  No part of this assignment has been copied manually or electronically from any other source 
*  (including web sites) or distributed to other students. 
*  
*  Name: _____Darshan Vallabhbhai Sheta_________________ Student ID: ___158800219___________ Date: _______08 December 2022_________ 
* 
*  Online (Cyclic) URL: ____________
********************************************************************************/  

const express = require('express')

const app = express()

const port = process.env.port || 3500


app.set('view-engine','ejs')
app.get('/',(req,res)=>{

    res.send("Welcome from the Cyclic first Github Demo App!!!")


})

app.get('/display',(req,res)=>{

    res.render("display.ejs",{author:'Darshan Sheta - 158800219'})
})

app.listen(port,()=>{


    console.log("App is listening at port 3500!!!")
})

