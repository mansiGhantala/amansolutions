const mongoose = require("mongoose");

// const URI =  "mongodb://127.0.0.1:27017/mern_admin";
// mongoose.connect(URI);
// amansolutions24    aMaN2004

const URI = process.env.MONGODB_URI;

const connectDb = async () =>{
    try{
        await mongoose.connect(URI);
        console.log("connection successful to DB");
        
    }catch(error){
        // console.log("databse connection failed");
        console.log("database connection failed", error);
        process.exit(0);
    }
};

module.exports = connectDb;
