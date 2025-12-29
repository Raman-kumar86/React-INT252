const express = require('express');
const app = express();
app.use(express.json());
const users=[{
    name:"john",
    kidneys:[{
        healthy:false
    }]
}];
app.get("/",(req,res)=>{
    const johnKidneys=users[0].kidneys;
    const numberOfKidneys=johnKidneys.length;
    let numberOfHealthyKidneys=0;
    for(let i=0;i<numberOfKidneys;i++){
        if(johnKidneys[i].healthy){
            numberOfHealthyKidneys++;
        }
    }
    const numberOfUnhealthyKidneys=numberOfKidneys-numberOfHealthyKidneys;
    res.json({
        johnKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys
    })
});
app.post("/",(req,res)=>{
    const isHealthy=req.body.isHealthy;
    users[0].kidneys.push({
        healthy:isHealthy
    })
    res.json({
        msg:"Done"
    })
})
app.put("/",(req,res)=>{
    for(let i=0;i<users[0].kidneys.length;i++){
        users[0].kidneys[i].healthy=true;
    }
    res.json({
        msge:"Schema gets updated"
    })
})
function atleastone(){
    let ans=false;
    for(let i=0;i<users[0].kidneys.length;i++){
        if(!users[0].kidneys[i].healthy){
            ans=true;
            break;
        }
    }
    return ans;
}
app.delete("/",(req,res)=>{
    const newKidney=[];
    if(atleastone()){
        for(let i=0;i<users[0].kidneys.length;i++){
            if(users[0].kidneys[i].healthy){
                newKidney.push({healthy:true});
            }
        }
        users[0].kidneys=newKidney;
        res.json({msg:"Deleted Successfully"});
    }else{
        res.status(411).json({msg:"You don't have any bad kidney"});
    }
})
app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})
