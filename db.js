const mongoose = require("mongoose");

//connection string for database (specify the database name 'inotebook')
const mongoURI = "mongodb+srv://Surveyform:Surveyform@cluster0.8shbddr.mongodb.net/?retryWrites=true&w=majority"

//syntax// connectToMongo is a function which uses built-in function mongoose.connect(which takes a the URI(connnection string), and a callback function))
const connectToMongo = () =>{
    mongoose.connect(mongoURI,()=>{
        console.log("connected to mongo");
    })
}

module.exports = connectToMongo; 