const express= require("express");

const app=express();


// (/test ) means the port localhost:7777/test will show this things 



app.use("/test/5",(req,res)=>{
    res.send("test net 5555 test ...");
});

app.use("/test",(req,res)=>{
    res.send("test net test ...");
});

app.use("/main",(req,res)=>{
    res.send("Main main ...");
});

//it respond to the action by the user 
app.use("/",(req,res)=>{
    res.send("Hello from the server ...");
});





//This help to take input of the data and 3000 is the port number as(localhost:3000) for websites
app.listen(7777, ()=>{
    console.log("Our server has been created!...")
});


