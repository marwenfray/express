const express = require('express');
const app = express();
const hbs = require('hbs');



app.use(express.static(__dirname + "/views"));
app.get('/',(req,res)=>{
    let day=new Date().getDay();
    let hour=new Date().getHours();
    (day!==0 && day!==6 && hour>=9 && hour<=17)?



    res.sendFile(__dirname + "/views/Home.html"):
    res.render('error.hbs',{day,hour})




})




 app.listen(3000, err=>{
     err? console.log('cannot run server, check for errors'):
     console.log('server is running at port 3000')
 });