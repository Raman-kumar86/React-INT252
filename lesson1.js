function sum(n){
    return (n*(n+1))/2;
}
const express=require('express');
const app=express();
app.use(express.json());
const port=process.env.PORT||3000;
app.get("/",(req,res)=>{
    const n=Number(req.query.n);
    if(isNaN(n)){
        return res.status(400).send("Please provide a valid number");
    }
    console.log(n);
    let ans=sum(n).toString();
    res.send(`The sum upto ${n} from 1 is ${ans}`);
});
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})