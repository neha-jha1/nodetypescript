import express from 'express';
import dotenv from 'dotenv';
const app  = express();

app.get('/',(req,res) => {
    res.send("home");
})

app.listen(3000, ()=> {
    console.log('app working')
})