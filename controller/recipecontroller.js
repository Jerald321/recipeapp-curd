
const { create } = require('express-handlebars');
const recipe  = require('../model/recipeModel');


const recipecontroller ={
    getAllRecipes : async(req,res)=>{
        try {
            const Recipes =await recipe.find();
            res.status(200).json(Recipes)   
          
                  
            
            
        } catch (error) {
            res.status(500).json({messsage:error})
        }
    },
   
     createRecipe : async (req, res) => {
        try {
            
            const { receipename, description, ingredients, steps } = req.body;
    
            if (!receipename || !description || !ingredients || !steps) {
                return res.status(400).json({ error: "All fields are required" });
            }
    
            // Create a new recipe instance
            const newRecipe = new recipe({
                receipename,
                description,
                ingredients,
                steps
            });
    
            // Save the recipe to the database
            const savedRecipe = await newRecipe.save();
    
            // Respond with a success message and the created recipe
            res.status(201).json({
                message: "Recipe created successfully",
                recipe: savedRecipe
            });
        } catch (error) {
            // Handle errors and send appropriate response
            res.status(500).json({ error: "Internal Server Error", details: error.message });
        }
    },
    
    
    

     getRecipeById: async(req,res)=>{
        try {
            const {id} =req.params
          
            
        const getrecipe = await recipe.findById(id)

        if(!getrecipe){
           res.status(400).json({message:"This is not match or data not found"})
            
        }
        
        
        res.status(200).json(getrecipe)
             
            
        } catch (error) {
            res.status(500).json({messsage:"created successfully "})
        }
    },
    updateRecipe : async (req, res) => {
        try {
            const {id} =req.params
         
            
            
            const {receipename}=req.body

            const updaterecipe = await recipe.findById(id)  
            
            
           
            
            
        
            updaterecipe.receipename = await recipename;

            await updaterecipe.save();
           
            console.log(updaterecipe);
           res.status(200).json({message:
            'updated'
           })
           
            
        } catch (error) {
            res.status(500).json({messsage:error})
        }
    },
    
    
    
    
    deleteRecipe: async(req,res)=>{
        try {
            const {id} =req.params
          await recipe.findByIdAndDelete(id)
           res.status(200).json({message:"deleted"})
        } catch (error) {
            res.status(500).json({messsage:error})
        }

    }

}
module.exports =recipecontroller

