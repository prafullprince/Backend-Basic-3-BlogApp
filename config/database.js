const mongoose = require('mongoose');

const dbConnect = async ()=>{
    try{
        mongoose.connect(process.env.DATABASE_URL);
        console.log("database connected successfully");
    } catch(error){
        console.log(error);
        process.exit(1);
    }
}
module.exports = dbConnect
