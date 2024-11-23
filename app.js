const express =require("express")
const app =express();
const mongoose = require('mongoose');


const receiperoute =require("./routes/reciperoute")




app.use(express.json())
app.use("/api/v1/recipes",receiperoute)



module.exports = app;



























// app.engine('hbs',hbs.engine({layoutsDir:"view/main", extname:"hbs", defaultLayout:"main"}))
// app.use(express.urlencoded())
// app.set("view engine", "hub")



// app.use("/", async (req,res)=>{

//     res.send("welcome to our page")
    
// })



app.listen(3000);