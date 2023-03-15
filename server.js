const express = require("express");

const app=express();
app.use(express.json());

const port=1836;

const myArray=["one", "two", "three"];

app.get("/methds",(req,res) => {
    res.status(200).send(myArray);
});

app.post("/methds",(req,res) => {
    let mynewArray = req.body.Amjad;
    myArray.push(mynewArray);
    res.status(200).send({ message : "Task Added Successfully" });
});

app.delete("/methds",(req,res) => {
    const deleteItem = req.body.Amjad;

    myArray.find((elem,index) => {
        if(elem === deleteItem){
            myArray.splice(index,1);
        }
    });
    res.status(200).send(myArray);
});

app.listen(port, () => {
    console.log(`The expressjs server started on Port: ${port}`);
});

// http://localhost:2220