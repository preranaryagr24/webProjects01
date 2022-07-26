const express=require("express");
const app=express();
const path=require("path");
const hbs=require('hbs');

const port=process.env.PORT || 8000;

const static_path=(path.join(__dirname,"../public"));
const templates_path=(path.join(__dirname,"../templates/views"));
// console.log(path.join(__dirname,"../templates/partials"));
const partials_path=(path.join(__dirname,"../templates/partials"));

app.set('view engine', 'hbs');
app.set('views',templates_path);
hbs.registerPartials(partials_path);

app.get("/",(req,res)=>{
    res.render("index")
});
app.get("/about",(req,res)=>{
    res.render("about");
});
app.get("/weather",(req,res)=>{
    res.render("weather");
});
app.use(express.static(static_path));    
app.get("*",(req,res)=>{
    res.render("404error",{
        errorMsg :'Opps page  not found'
    })
})  
 
const localhost='127.0.0.1'
 app.listen(port,()=>{
    console.log(`the code is running at http://${localhost}:${port}`);
 }) 