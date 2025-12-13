const express=require('express');
const bodyParser=require("body-parser");
const app=express();
const port=process.env.PORT || 3000;
app.use(bodyParser.json());
app.get('/',(req,res)=>{
    // const message=req.query.password;
    console.log(req.query);
    res.send(req.query);
})
app.listen(port,()=>{
    console.log(`App is listening on port ${port}`);
})