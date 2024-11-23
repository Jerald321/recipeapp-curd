// const mongoose =require("mongoose");
// const app = require('./app');
// require('dotenv').config();

//  async function getdatabase(){
//     mongoose.connect(process.env.DATABASE_URL )
//     .then(()=>{
       
//         app.listen(3000,()=>{
//             console.log("Server is running @ http://localhost:3000");
            
//         });
//         console.log("database is created");
        
//     })
//     .catch(()=>{
//         console.log( "database connection issue");
        
//     })

//  }





const mongoose=require('mongoose');
const app = require('./app');
require('dotenv').config();


//connect to database

mongoose.connect(process.env.DATABASE_URL)
.then(()=>{
    console.log('Connected to the database');
    app.listen(4000)
    console.log("backend is start");
    
})
.catch((error)=>{
    console.log('Connection failed');
    console.log(error); 
})