 const mongoose =require("mongoose");

const recipescheme = new mongoose.Schema({
    receipename :"String",
    description:"String",
    ingredients:"String",
    steps:"String",
    
})                              

module.exports =mongoose.model("recipe",recipescheme, "Recipes")