const express = require("express");
const app = express();



app.get("/",(req,res)=>{

   console.log("request incoming");
  
   res.set('Content-Type', 'text/xml');
   res.send("ok");
})


app.listen(3000,()=>{
   console.log("Server listening in port 3000");
})
